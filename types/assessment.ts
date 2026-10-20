export interface AssessmentCategoryConfig {
  id: "miniProjects" | "week1Project" | "week2Project" | "week3Project" | "week4Project" | "finalViva";
  title: string;
  weight: number; // e.g. 0.20 for 20%
  percentageLabel: string;
  description: string;
  maxScore: number;
}

export interface AssessmentResultItem {
  id: string;
  title: string;
  weight: number;
  percentageLabel: string;
  score: number | null; // null represents ungraded
  weightedScore: number;
  status: "graded" | "ungraded";
}

export interface OverallAssessmentReport {
  items: AssessmentResultItem[];
  totalAttemptedWeight: number;
  currentWeightedAverage: number; // based on graded items
  projectedFinalGrade: number; // assuming ungraded are 0 if finalized, or projected
  letterGrade: string;
  gpa: number;
  statusSummary: string;
}
