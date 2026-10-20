export type SubmissionStatus = "not-started" | "in-progress" | "submitted" | "completed";

export interface AssignmentProgress {
  status: SubmissionStatus;
  completedAt?: string;
  notes?: string;
  repoUrl?: string;
  demoUrl?: string;
  completedChecklist: string[];
}

export interface UserProgressState {
  completedDays: number[]; // day numbers: 1 to 30
  assignments: Record<string, AssignmentProgress>; // key: day number e.g. "day-1" or "1"
  projectMilestones: Record<string, string[]>; // projectId -> milestoneIds[]
  projectStatus: Record<string, SubmissionStatus>;
  assessmentScores: {
    miniProjects?: number;
    week1Project?: number;
    week2Project?: number;
    week3Project?: number;
    week4Project?: number;
    finalViva?: number;
  };
  lastActiveDay: number;
  lastUpdated: string;
}

export interface ProgressMetrics {
  totalDays: number;
  completedDaysCount: number;
  remainingDaysCount: number;
  overallPercentage: number;
  totalInstructionalHours: number;
  completedHours: number;
  remainingHours: number;
  hoursPercentage: number;
  weeklyProgress: {
    week: number;
    title: string;
    totalHours: number;
    completedHours: number;
    totalDays: number;
    completedDays: number;
    percentage: number;
  }[];
  totalMiniProjects: number;
  completedMiniProjects: number;
  totalMajorProjects: number;
  completedMajorProjects: number;
}
