"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  calculateMetrics,
  exportAssignmentsAsCSV,
  exportProgressAsJSON,
  getStoredProgress,
  importProgressFromJSON,
  initialProgressState,
  resetAllProgress,
  saveAssessmentScore,
  setProjectStatus,
  toggleDayCompletion,
  toggleProjectMilestone,
  updateAssignment
} from "@/lib/progress";
import { AssignmentProgress, ProgressMetrics, SubmissionStatus, UserProgressState } from "@/types/progress";

interface ProgressContextType {
  progress: UserProgressState;
  metrics: ProgressMetrics;
  isHydrated: boolean;
  toggleDay: (day: number) => void;
  updateDayAssignment: (day: number, updates: Partial<AssignmentProgress>) => void;
  toggleMilestone: (projectId: string, milestoneId: string) => void;
  updateProjectStatus: (projectId: string, status: SubmissionStatus) => void;
  updateScore: (key: keyof UserProgressState["assessmentScores"], score: number | undefined) => void;
  resetProgress: () => void;
  exportCSV: () => void;
  exportJSON: () => string;
  importJSON: (jsonStr: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgressState>(initialProgressState);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const loaded = getStoredProgress();
    setProgress(loaded);
    setIsHydrated(true);

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<UserProgressState>;
      if (customEvent.detail) {
        setProgress(customEvent.detail);
      } else {
        setProgress(getStoredProgress());
      }
    };

    window.addEventListener("arvr-progress-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("arvr-progress-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const metrics = calculateMetrics(progress);

  const handleToggleDay = (day: number) => {
    const updated = toggleDayCompletion(day);
    setProgress(updated);
  };

  const handleUpdateAssignment = (day: number, updates: Partial<AssignmentProgress>) => {
    const updated = updateAssignment(day, updates);
    setProgress(updated);
  };

  const handleToggleMilestone = (projectId: string, milestoneId: string) => {
    const updated = toggleProjectMilestone(projectId, milestoneId);
    setProgress(updated);
  };

  const handleSetProjectStatus = (projectId: string, status: SubmissionStatus) => {
    const updated = setProjectStatus(projectId, status);
    setProgress(updated);
  };

  const handleUpdateScore = (
    key: keyof UserProgressState["assessmentScores"],
    score: number | undefined
  ) => {
    const updated = saveAssessmentScore(key, score);
    setProgress(updated);
  };

  const handleReset = () => {
    const reset = resetAllProgress();
    setProgress(reset);
  };

  const handleExportCSV = () => {
    const csv = exportAssignmentsAsCSV();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `arvr_course_progress_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    return exportProgressAsJSON();
  };

  const handleImportJSON = (jsonStr: string) => {
    const success = importProgressFromJSON(jsonStr);
    if (success) {
      setProgress(getStoredProgress());
    }
    return success;
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        metrics,
        isHydrated,
        toggleDay: handleToggleDay,
        updateDayAssignment: handleUpdateAssignment,
        toggleMilestone: handleToggleMilestone,
        updateProjectStatus: handleSetProjectStatus,
        updateScore: handleUpdateScore,
        resetProgress: handleReset,
        exportCSV: handleExportCSV,
        exportJSON: handleExportJSON,
        importJSON: handleImportJSON
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
