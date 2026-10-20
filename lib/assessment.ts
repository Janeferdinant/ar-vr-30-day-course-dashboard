import { AssessmentCategoryConfig, OverallAssessmentReport } from "@/types/assessment";
import { UserProgressState } from "@/types/progress";

export const assessmentCategories: AssessmentCategoryConfig[] = [
  {
    id: "miniProjects",
    title: "Daily Mini-Projects & Lab Submissions",
    weight: 0.2, // 20%
    percentageLabel: "20%",
    description: "Evaluates consistent completion, code quality, and deliverables across all 30 daily practical labs.",
    maxScore: 100
  },
  {
    id: "week1Project",
    title: "Week 1 — 3D Interactive World",
    weight: 0.15, // 15%
    percentageLabel: "15%",
    description: "Evaluates architectural scale, PBR materials, lighting, C# interactivity, and standalone build.",
    maxScore: 100
  },
  {
    id: "week2Project",
    title: "Week 2 — AR Learning Companion",
    weight: 0.2, // 20%
    percentageLabel: "20%",
    description: "Evaluates marker/plane tracking stability, touch gesture manipulation, world-space UI, and audio.",
    maxScore: 100
  },
  {
    id: "week3Project",
    title: "Week 3 — VR Laboratory",
    weight: 0.2, // 20%
    percentageLabel: "20%",
    description: "Evaluates OpenXR interaction, locomotion comfort, direct/ray grabbing, socket assembly, and 3D audio.",
    maxScore: 100
  },
  {
    id: "week4Project",
    title: "Week 4 — Immersive Safety Training",
    weight: 0.2, // 20%
    percentageLabel: "20%",
    description: "Evaluates hazard trigger detection, decision quiz terminals, multisensory alerts, and companion AR prototype.",
    maxScore: 100
  },
  {
    id: "finalViva",
    title: "Final Presentation and Viva",
    weight: 0.05, // 5%
    percentageLabel: "5%",
    description: "Evaluates architectural defense, code walkthrough, peer review participation, and portfolio presentation.",
    maxScore: 100
  }
];

export function calculateAssessmentReport(
  scores: UserProgressState["assessmentScores"]
): OverallAssessmentReport {
  let totalAttemptedWeight = 0;
  let accumulatedWeightedScore = 0;

  const items = assessmentCategories.map((cat) => {
    const rawScore = scores[cat.id];
    const isGraded = typeof rawScore === "number" && !isNaN(rawScore);
    const scoreVal = isGraded ? Math.min(100, Math.max(0, rawScore)) : null;

    let weightedScore = 0;
    if (scoreVal !== null) {
      weightedScore = (scoreVal * cat.weight);
      totalAttemptedWeight += cat.weight;
      accumulatedWeightedScore += weightedScore;
    }

    return {
      id: cat.id,
      title: cat.title,
      weight: cat.weight,
      percentageLabel: cat.percentageLabel,
      score: scoreVal,
      weightedScore: Math.round(weightedScore * 100) / 100,
      status: (isGraded ? "graded" : "ungraded") as "graded" | "ungraded"
    };
  });

  // Current weighted average based only on completed/graded modules
  const currentWeightedAverage =
    totalAttemptedWeight > 0
      ? Math.round((accumulatedWeightedScore / totalAttemptedWeight) * 10) / 10
      : 0;

  // Projected overall grade (with remaining treated as pending/ungraded)
  const projectedFinalGrade = Math.round(accumulatedWeightedScore * 10) / 10;

  // Letter Grade computation
  let letterGrade = "Incomplete";
  let gpa = 0.0;
  const gradeBasis = totalAttemptedWeight > 0 ? currentWeightedAverage : 0;

  if (gradeBasis >= 93) {
    letterGrade = "A (Exemplary)";
    gpa = 4.0;
  } else if (gradeBasis >= 90) {
    letterGrade = "A-";
    gpa = 3.7;
  } else if (gradeBasis >= 87) {
    letterGrade = "B+";
    gpa = 3.3;
  } else if (gradeBasis >= 83) {
    letterGrade = "B (Proficient)";
    gpa = 3.0;
  } else if (gradeBasis >= 80) {
    letterGrade = "B-";
    gpa = 2.7;
  } else if (gradeBasis >= 75) {
    letterGrade = "C+";
    gpa = 2.3;
  } else if (gradeBasis >= 70) {
    letterGrade = "C (Passing)";
    gpa = 2.0;
  } else if (gradeBasis > 0) {
    letterGrade = "F (Developing)";
    gpa = 1.0;
  }

  let statusSummary = "Evaluation in Progress";
  if (totalAttemptedWeight >= 1.0) {
    statusSummary = "All Assessments Completed & Graded";
  } else if (totalAttemptedWeight > 0) {
    const gradedPercent = Math.round(totalAttemptedWeight * 100);
    statusSummary = `${gradedPercent}% of curriculum weight graded (${100 - gradedPercent}% pending)`;
  } else {
    statusSummary = "No assessments recorded yet (all items ungraded)";
  }

  return {
    items,
    totalAttemptedWeight: Math.round(totalAttemptedWeight * 100) / 100,
    currentWeightedAverage,
    projectedFinalGrade,
    letterGrade,
    gpa,
    statusSummary
  };
}
