import { Lesson } from "@/types/course";
import { week1Lessons } from "./lessons/week1";
import { week2Lessons } from "./lessons/week2";
import { week3Lessons } from "./lessons/week3";
import { week4Lessons } from "./lessons/week4";
import { showcaseLessons } from "./lessons/showcase";

export const allLessons: Lesson[] = [
  ...week1Lessons,
  ...week2Lessons,
  ...week3Lessons,
  ...week4Lessons,
  ...showcaseLessons
];

export const courseOverviewMetadata = {
  title: "AR/VR Development Bootcamp",
  subtitle: "From 3D Foundations to Immersive Applications in 30 Days",
  instructorAttribution: "Jane Rose, Asst. Prof, CSE",
  totalDays: 30,
  totalInstructionalHours: 56,
  weeklyMajorProjectsCount: 4,
  dailyMiniProjectsCount: 30,
  weeks: [
    {
      weekNumber: 1,
      title: "3D Foundations and AR Introduction",
      daysRange: "Days 1 – 7",
      hours: 13,
      majorProjectTitle: "3D Interactive World",
      majorProjectId: "project-1",
      description: "Students establish 3D literacy, Unity editor mastery, PBR materials, lighting, C# interactivity, and basic physics."
    },
    {
      weekNumber: 2,
      title: "Augmented Reality Development",
      daysRange: "Days 8 – 14",
      hours: 13,
      majorProjectTitle: "AR Learning Companion",
      majorProjectId: "project-2",
      description: "Students master mobile AR with AR Foundation, natural feature image tracking, plane detection, multi-touch gestures, and billboarding UI."
    },
    {
      weekNumber: 3,
      title: "Virtual Reality Development",
      daysRange: "Days 15 – 21",
      hours: 13,
      majorProjectTitle: "VR Laboratory",
      majorProjectId: "project-3",
      description: "Students build fully immersive VR environments using OpenXR and XRI, featuring comfortable teleportation, 6-DoF grabbing, and socket mechanics."
    },
    {
      weekNumber: 4,
      title: "Advanced Interaction and Integrated XR",
      daysRange: "Days 22 – 28",
      hours: 13,
      majorProjectTitle: "Immersive Safety Training",
      majorProjectId: "project-4",
      description: "Students develop industrial hazard simulation prototypes with spatial triggers, decision quiz terminals, multisensory alerts, and companion AR overlays."
    },
    {
      weekNumber: 5,
      title: "Final Showcase and Evaluation",
      daysRange: "Days 29 – 30",
      hours: 4,
      majorProjectTitle: "Comprehensive Portfolio & Technical Viva",
      majorProjectId: "showcase",
      description: "Students conduct QA profiling, eliminate memory leaks, publish release builds, and defend their work in a technical viva and peer review."
    }
  ]
};

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id || l.day === parseInt(id.replace("day-", ""), 10));
}

export function getLessonByDay(day: number): Lesson | undefined {
  return allLessons.find((l) => l.day === day);
}

export function getAdjacentLessons(currentDay: number): { prev?: Lesson; next?: Lesson } {
  const prev = currentDay > 1 ? getLessonByDay(currentDay - 1) : undefined;
  const next = currentDay < 30 ? getLessonByDay(currentDay + 1) : undefined;
  return { prev, next };
}
