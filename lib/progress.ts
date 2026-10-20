import { allLessons, courseOverviewMetadata } from "@/data/course";
import { majorProjects } from "@/data/projects";
import {
  AssignmentProgress,
  ProgressMetrics,
  SubmissionStatus,
  UserProgressState
} from "@/types/progress";

const STORAGE_KEY = "arvr_course_progress_v1";

export const initialProgressState: UserProgressState = {
  completedDays: [],
  assignments: {},
  projectMilestones: {},
  projectStatus: {
    "project-1": "not-started",
    "project-2": "not-started",
    "project-3": "not-started",
    "project-4": "not-started"
  },
  assessmentScores: {},
  lastActiveDay: 1,
  lastUpdated: new Date().toISOString()
};

export function getStoredProgress(): UserProgressState {
  if (typeof window === "undefined") {
    return initialProgressState;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgressState;
    const parsed = JSON.parse(raw);
    return {
      ...initialProgressState,
      ...parsed,
      assignments: parsed.assignments || {},
      projectMilestones: parsed.projectMilestones || {},
      projectStatus: { ...initialProgressState.projectStatus, ...(parsed.projectStatus || {}) },
      assessmentScores: parsed.assessmentScores || {}
    };
  } catch (err) {
    console.error("Failed to read progress from localStorage", err);
    return initialProgressState;
  }
}

export function saveStoredProgress(state: UserProgressState): void {
  if (typeof window === "undefined") return;
  try {
    const updated = {
      ...state,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("arvr-progress-updated", { detail: updated }));
  } catch (err) {
    console.error("Failed to save progress to localStorage", err);
  }
}

export function calculateMetrics(state: UserProgressState): ProgressMetrics {
  const completedDaysSet = new Set(state.completedDays);
  const completedDaysCount = completedDaysSet.size;
  const remainingDaysCount = Math.max(0, 30 - completedDaysCount);
  const overallPercentage = Math.round((completedDaysCount / 30) * 100);

  let completedHours = 0;
  for (const lesson of allLessons) {
    if (completedDaysSet.has(lesson.day)) {
      completedHours += lesson.duration;
    }
  }

  const totalInstructionalHours = 56;
  const remainingHours = Math.max(0, totalInstructionalHours - completedHours);
  const hoursPercentage = Math.round((completedHours / totalInstructionalHours) * 100);

  const weeklyProgress = courseOverviewMetadata.weeks.map((week) => {
    const weekLessons = allLessons.filter((l) => l.week === week.weekNumber);
    const totalWeekHours = week.hours;
    const completedWeekHours = weekLessons
      .filter((l) => completedDaysSet.has(l.day))
      .reduce((sum, l) => sum + l.duration, 0);
    const completedWeekDays = weekLessons.filter((l) => completedDaysSet.has(l.day)).length;

    return {
      week: week.weekNumber,
      title: week.title,
      totalHours: totalWeekHours,
      completedHours: completedWeekHours,
      totalDays: weekLessons.length,
      completedDays: completedWeekDays,
      percentage: totalWeekHours > 0 ? Math.round((completedWeekHours / totalWeekHours) * 100) : 0
    };
  });

  // Calculate completed mini projects (marked as completed in assignments or day completed)
  let completedMiniProjects = 0;
  for (let day = 1; day <= 30; day++) {
    const dayKey = `day-${day}`;
    const assign = state.assignments[dayKey];
    if (completedDaysSet.has(day) || assign?.status === "completed" || assign?.status === "submitted") {
      completedMiniProjects++;
    }
  }

  const completedMajorProjects = Object.values(state.projectStatus).filter(
    (status) => status === "completed" || status === "submitted"
  ).length;

  return {
    totalDays: 30,
    completedDaysCount,
    remainingDaysCount,
    overallPercentage,
    totalInstructionalHours,
    completedHours,
    remainingHours,
    hoursPercentage,
    weeklyProgress,
    totalMiniProjects: 30,
    completedMiniProjects,
    totalMajorProjects: 4,
    completedMajorProjects
  };
}

export function getNextIncompleteLesson(state: UserProgressState) {
  const completed = new Set(state.completedDays);
  const next = allLessons.find((l) => !completed.has(l.day));
  return next || allLessons[allLessons.length - 1];
}

export function toggleDayCompletion(day: number): UserProgressState {
  const current = getStoredProgress();
  const exists = current.completedDays.includes(day);
  const newDays = exists
    ? current.completedDays.filter((d) => d !== day)
    : [...current.completedDays, day].sort((a, b) => a - b);

  const dayKey = `day-${day}`;
  const existingAssign = current.assignments[dayKey] || {
    status: "not-started",
    completedChecklist: []
  };

  const updatedAssign: AssignmentProgress = {
    ...existingAssign,
    status: !exists ? "completed" : "not-started",
    completedAt: !exists ? new Date().toISOString() : undefined
  };

  const updated: UserProgressState = {
    ...current,
    completedDays: newDays,
    assignments: {
      ...current.assignments,
      [dayKey]: updatedAssign
    },
    lastActiveDay: day
  };

  saveStoredProgress(updated);
  return updated;
}

export function updateAssignment(
  dayNumber: number,
  updates: Partial<AssignmentProgress>
): UserProgressState {
  const current = getStoredProgress();
  const dayKey = `day-${dayNumber}`;
  const existing = current.assignments[dayKey] || {
    status: "not-started",
    completedChecklist: []
  };

  const newStatus = updates.status ?? existing.status;
  const isCompleted = newStatus === "completed" || newStatus === "submitted";

  let newCompletedDays = [...current.completedDays];
  if (isCompleted && !newCompletedDays.includes(dayNumber)) {
    newCompletedDays.push(dayNumber);
    newCompletedDays.sort((a, b) => a - b);
  } else if (!isCompleted && newCompletedDays.includes(dayNumber)) {
    newCompletedDays = newCompletedDays.filter((d) => d !== dayNumber);
  }

  const updated: UserProgressState = {
    ...current,
    completedDays: newCompletedDays,
    assignments: {
      ...current.assignments,
      [dayKey]: {
        ...existing,
        ...updates
      }
    },
    lastActiveDay: dayNumber
  };

  saveStoredProgress(updated);
  return updated;
}

export function toggleProjectMilestone(projectId: string, milestoneId: string): UserProgressState {
  const current = getStoredProgress();
  const currentMilestones = current.projectMilestones[projectId] || [];
  const exists = currentMilestones.includes(milestoneId);
  const updatedList = exists
    ? currentMilestones.filter((m) => m !== milestoneId)
    : [...currentMilestones, milestoneId];

  const project = majorProjects.find((p) => p.id === projectId);
  const totalMilestones = project?.milestones.length || 4;
  const isAllDone = updatedList.length >= totalMilestones;

  const updated: UserProgressState = {
    ...current,
    projectMilestones: {
      ...current.projectMilestones,
      [projectId]: updatedList
    },
    projectStatus: {
      ...current.projectStatus,
      [projectId]: isAllDone
        ? "completed"
        : updatedList.length > 0
        ? "in-progress"
        : "not-started"
    }
  };

  saveStoredProgress(updated);
  return updated;
}

export function setProjectStatus(projectId: string, status: SubmissionStatus): UserProgressState {
  const current = getStoredProgress();
  const updated: UserProgressState = {
    ...current,
    projectStatus: {
      ...current.projectStatus,
      [projectId]: status
    }
  };
  saveStoredProgress(updated);
  return updated;
}

export function saveAssessmentScore(
  key: keyof UserProgressState["assessmentScores"],
  score: number | undefined
): UserProgressState {
  const current = getStoredProgress();
  const updated: UserProgressState = {
    ...current,
    assessmentScores: {
      ...current.assessmentScores,
      [key]: score
    }
  };
  saveStoredProgress(updated);
  return updated;
}

export function exportProgressAsJSON(): string {
  const current = getStoredProgress();
  return JSON.stringify(current, null, 2);
}

export function exportAssignmentsAsCSV(): string {
  const current = getStoredProgress();
  const rows: string[] = [
    "Day,Week,DurationHours,Title,MiniProjectTitle,Deliverable,Status,CompletedAt,RepoURL,DemoURL,Notes"
  ];

  for (const lesson of allLessons) {
    const dayKey = `day-${lesson.day}`;
    const assign = current.assignments[dayKey];
    const isDayCompleted = current.completedDays.includes(lesson.day);
    const status = assign?.status || (isDayCompleted ? "completed" : "not-started");
    const completedAt = assign?.completedAt || (isDayCompleted ? "Recorded" : "");
    const repoUrl = assign?.repoUrl ? `"${assign.repoUrl.replace(/"/g, '""')}"` : "";
    const demoUrl = assign?.demoUrl ? `"${assign.demoUrl.replace(/"/g, '""')}"` : "";
    const notes = assign?.notes ? `"${assign.notes.replace(/"/g, '""')}"` : "";
    const deliverable = `"${lesson.miniProject.deliverable.replace(/"/g, '""')}"`;
    const title = `"${lesson.title.replace(/"/g, '""')}"`;
    const miniTitle = `"${lesson.miniProject.title.replace(/"/g, '""')}"`;

    rows.push(
      `${lesson.day},${lesson.week},${lesson.duration},${title},${miniTitle},${deliverable},${status},${completedAt},${repoUrl},${demoUrl},${notes}`
    );
  }

  return rows.join("\n");
}

export function importProgressFromJSON(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || !Array.isArray(parsed.completedDays)) {
      throw new Error("Invalid schema");
    }
    saveStoredProgress(parsed);
    return true;
  } catch (err) {
    console.error("Import failed:", err);
    return false;
  }
}

export function resetAllProgress(): UserProgressState {
  saveStoredProgress(initialProgressState);
  return initialProgressState;
}
