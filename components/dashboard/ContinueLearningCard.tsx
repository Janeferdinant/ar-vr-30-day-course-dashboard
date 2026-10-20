"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Clock,
  CheckCircle2,
  BookOpen,
  Target,
  FileCode2
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { getNextIncompleteLesson } from "@/lib/progress";
import { formatDuration } from "@/lib/utils";

export function ContinueLearningCard() {
  const { progress, toggleDay, isHydrated } = useProgress();
  const nextLesson = getNextIncompleteLesson(progress);

  if (!nextLesson) return null;

  const isCompleted = isHydrated && progress.completedDays.includes(nextLesson.day);

  return (
    <section aria-labelledby="continue-learning-title" className="glass-panel p-6 sm:p-7 rounded-2xl border border-indigo-500/40 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 shadow-xl">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3 flex-1">
          {/* Header Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              {isCompleted ? "All Lessons Finished" : "Next Incomplete Lesson"}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {formatDuration(nextLesson.duration)} instructional module
            </span>
            <span className="text-xs text-slate-400">• Week {nextLesson.week}</span>
          </div>

          {/* Lesson Title */}
          <div>
            <h3 id="continue-learning-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Day {nextLesson.day}: {nextLesson.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl line-clamp-2">
              {nextLesson.learningObjectives[0]}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <Target className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200">Core Objectives:</span>
                <p className="text-slate-400 line-clamp-1">{nextLesson.learningObjectives.slice(0, 2).join(" • ")}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <FileCode2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200">Daily Mini-Project:</span>
                <p className="text-slate-400 line-clamp-1">{nextLesson.miniProject.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto">
          <Link
            href={`/lessons/${nextLesson.id}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] text-center"
          >
            <BookOpen className="w-4 h-4" />
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => toggleDay(nextLesson.day)}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors ${
              isCompleted
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
                : "bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isCompleted ? "Completed (Click to Reopen)" : "Mark Day Complete"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
