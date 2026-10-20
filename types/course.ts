export type WeekNumber = 1 | 2 | 3 | 4 | 5;

export interface TeachingContentSection {
  sectionTitle: string;
  content: string;
  codeSnippet?: {
    language: string;
    code: string;
    title: string;
  };
  keyTakeaways?: string[];
}

export interface InstructorDemo {
  title: string;
  steps: string[];
  tips: string;
}

export interface HandsOnLab {
  title: string;
  durationMinutes: number;
  instructions: string[];
  expectedResult: string;
}

export interface MiniProject {
  title: string;
  description: string;
  deliverable: string;
  checklist: string[];
  requiredSoftware: string[];
  assessmentCriteria: string[];
}

export interface LessonResource {
  title: string;
  url: string;
  type: "docs" | "tutorial" | "repo" | "asset" | "tool";
}

export interface Lesson {
  id: string; // e.g. "day-1"
  day: number; // 1 to 30
  week: WeekNumber;
  duration: number; // in hours: 1 or 2
  title: string;
  topics: string[];
  learningObjectives: string[];
  prerequisites: string[];
  teachingContent: TeachingContentSection[];
  instructorDemonstration: InstructorDemo;
  handsOnLab: HandsOnLab;
  miniProject: MiniProject;
  resources: LessonResource[];
  reflectionQuestions: string[];
}

export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ProjectRubricItem {
  criteria: string;
  weightPercentage: number;
  description: string;
  exemplary: string;
  proficient: string;
  developing: string;
}

export interface MajorProject {
  id: string; // e.g. "project-1"
  week: number;
  title: string;
  durationHours: number;
  description: string;
  problemStatement: string;
  learningOutcomes: string[];
  functionalRequirements: string[];
  suggestedArchitecture: string;
  requiredAssets: string[];
  milestones: ProjectMilestone[];
  testingChecklist: string[];
  submissionRequirements: string[];
  rubric: ProjectRubricItem[];
  extensionChallenges: string[];
  educationalDisclaimer?: string;
}

export interface ResourceCategory {
  id: string;
  category: string;
  description: string;
  iconName: string;
  items: {
    title: string;
    description: string;
    url: string;
    type: "official-doc" | "video-course" | "library" | "tool" | "asset-store";
    isPrimary?: boolean;
    badge?: string;
  }[];
}
