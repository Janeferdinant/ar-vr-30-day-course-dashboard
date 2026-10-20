import { allLessons } from "@/data/course";
import { majorProjects } from "@/data/projects";

export interface ValidationReport {
  isValid: boolean;
  totalDays: number;
  totalHours: number;
  totalMiniProjects: number;
  totalMajorProjects: number;
  weekHours: {
    week1: number;
    week2: number;
    week3: number;
    week4: number;
    showcase: number;
  };
  checks: {
    title: string;
    passed: boolean;
    expected: string;
    actual: string;
  }[];
  errors: string[];
}

export function validateCurriculum(): ValidationReport {
  const errors: string[] = [];
  const checks: ValidationReport["checks"] = [];

  // 1. Total Days Check
  const totalDays = allLessons.length;
  const daysPassed = totalDays === 30;
  checks.push({
    title: "Total Days Count",
    passed: daysPassed,
    expected: "Exactly 30 days",
    actual: `${totalDays} days`
  });
  if (!daysPassed) {
    errors.push(`Expected 30 days, got ${totalDays}`);
  }

  // 2. Total Major Projects Check
  const totalMajorProjects = majorProjects.length;
  const majorPassed = totalMajorProjects === 4;
  checks.push({
    title: "Weekly Major Projects Count",
    passed: majorPassed,
    expected: "Exactly 4 major projects",
    actual: `${totalMajorProjects} major projects`
  });
  if (!majorPassed) {
    errors.push(`Expected 4 major projects, got ${totalMajorProjects}`);
  }

  // 3. Mini-projects Count (1 per day)
  const miniProjectsCount = allLessons.filter(
    (l) => l.miniProject && l.miniProject.title && l.miniProject.deliverable
  ).length;
  const miniPassed = miniProjectsCount === 30;
  checks.push({
    title: "Daily Mini-Projects Count",
    passed: miniPassed,
    expected: "30 mini-projects (1 per day)",
    actual: `${miniProjectsCount} valid mini-projects`
  });
  if (!miniPassed) {
    errors.push(`Expected 30 mini-projects, found ${miniProjectsCount}`);
  }

  // 4. Instructional Hours Calculation
  const week1Hours = allLessons.filter((l) => l.week === 1).reduce((sum, l) => sum + l.duration, 0);
  const week2Hours = allLessons.filter((l) => l.week === 2).reduce((sum, l) => sum + l.duration, 0);
  const week3Hours = allLessons.filter((l) => l.week === 3).reduce((sum, l) => sum + l.duration, 0);
  const week4Hours = allLessons.filter((l) => l.week === 4).reduce((sum, l) => sum + l.duration, 0);
  const showcaseHours = allLessons.filter((l) => l.week === 5).reduce((sum, l) => sum + l.duration, 0);
  const totalHours = week1Hours + week2Hours + week3Hours + week4Hours + showcaseHours;

  const totalHoursPassed = totalHours === 56;
  checks.push({
    title: "Total Instructional Hours",
    passed: totalHoursPassed,
    expected: "Exactly 56 instructional hours",
    actual: `${totalHours} hours`
  });
  if (!totalHoursPassed) {
    errors.push(`Expected 56 hours total, calculated ${totalHours}`);
  }

  // Week 1 Hours
  const w1Passed = week1Hours === 13;
  checks.push({
    title: "Week 1 Duration (3D Foundations & AR Intro)",
    passed: w1Passed,
    expected: "13 hours",
    actual: `${week1Hours} hours`
  });
  if (!w1Passed) errors.push(`Week 1 expected 13 hours, got ${week1Hours}`);

  // Week 2 Hours
  const w2Passed = week2Hours === 13;
  checks.push({
    title: "Week 2 Duration (AR Development)",
    passed: w2Passed,
    expected: "13 hours",
    actual: `${week2Hours} hours`
  });
  if (!w2Passed) errors.push(`Week 2 expected 13 hours, got ${week2Hours}`);

  // Week 3 Hours
  const w3Passed = week3Hours === 13;
  checks.push({
    title: "Week 3 Duration (VR Development)",
    passed: w3Passed,
    expected: "13 hours",
    actual: `${week3Hours} hours`
  });
  if (!w3Passed) errors.push(`Week 3 expected 13 hours, got ${week3Hours}`);

  // Week 4 Hours
  const w4Passed = week4Hours === 13;
  checks.push({
    title: "Week 4 Duration (Advanced Interaction & Integrated XR)",
    passed: w4Passed,
    expected: "13 hours",
    actual: `${week4Hours} hours`
  });
  if (!w4Passed) errors.push(`Week 4 expected 13 hours, got ${week4Hours}`);

  // Showcase Hours
  const showcasePassed = showcaseHours === 4;
  checks.push({
    title: "Final Showcase Duration (Days 29–30)",
    passed: showcasePassed,
    expected: "4 hours (2 hours each)",
    actual: `${showcaseHours} hours`
  });
  if (!showcasePassed) errors.push(`Final showcase expected 4 hours, got ${showcaseHours}`);

  // Unique IDs & valid structure for all lessons
  const idSet = new Set<string>();
  let idsUnique = true;
  for (const lesson of allLessons) {
    if (idSet.has(lesson.id)) {
      idsUnique = false;
      errors.push(`Duplicate lesson ID detected: ${lesson.id}`);
    }
    idSet.add(lesson.id);
    if (!lesson.title || !lesson.miniProject?.deliverable) {
      errors.push(`Incomplete lesson specification on Day ${lesson.day}`);
    }
  }

  checks.push({
    title: "Unique Lesson Identifiers & Structure",
    passed: idsUnique,
    expected: "All 30 lesson IDs unique with title, duration, mini-project, and deliverable",
    actual: idsUnique ? "All unique and verified" : "Duplicates or missing fields detected"
  });

  return {
    isValid: errors.length === 0,
    totalDays,
    totalHours,
    totalMiniProjects: miniProjectsCount,
    totalMajorProjects,
    weekHours: {
      week1: week1Hours,
      week2: week2Hours,
      week3: week3Hours,
      week4: week4Hours,
      showcase: showcaseHours
    },
    checks,
    errors
  };
}
