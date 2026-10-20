"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
  ListTodo,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { allLessons } from "@/data/course";
import { useProgress } from "@/context/ProgressContext";
import { formatDuration } from "@/lib/utils";

export function UpcomingTasks() {
  const { progress, metrics, toggleDay, isHydrated } = useProgress();

  // Find incomplete mini-projects sorted by course day
  const incompleteTasks = useMemo(() => {
    const completedSet = new Set(progress.completedDays);
    return allLessons
      .filter((lesson) => !completedSet.has(lesson.day))
      .slice(0, 5); // top 5 immediate tasks
  }, [progress.completedDays]);

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <ListTodo className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Upcoming Daily Mini-Projects</h3>
              <p className="text-xs text-slate-400">Immediate incomplete assignments sorted by schedule</p>
            </div>
          </div>
          <Link
            href="/assignments"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>View All 30 Labs</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {incompleteTasks.length === 0 ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <p className="text-sm font-bold text-white">All Mini-Projects Completed!</p>
            <p className="text-xs text-slate-400">
              Outstanding work! You have finished all 30 daily practical assignments.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {incompleteTasks.map((lesson) => {
              return (
                <div
                  key={lesson.id}
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <button
                      type="button"
                      onClick={() => toggleDay(lesson.day)}
                      title="Mark Complete"
                      className="mt-0.5 text-slate-500 hover:text-emerald-400 transition-colors flex-shrink-0"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-cyan-400">Day {lesson.day}</span>
                        <span className="text-[11px] text-slate-400">• Wk {lesson.week}</span>
                        <span className="text-[11px] text-slate-400">({formatDuration(lesson.duration)})</span>
                      </div>
                      <Link
                        href={`/lessons/${lesson.id}`}
                        className="text-xs font-semibold text-slate-200 hover:text-white truncate block hover:underline"
                      >
                        {lesson.miniProject.title}
                      </Link>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        Deliverable: {lesson.miniProject.deliverable}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/lessons/${lesson.id}`}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs flex-shrink-0"
                    title="Open Lesson"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
        <span>Click checkbox to mark done</span>
        <span>{isHydrated ? metrics.remainingDaysCount : 30} days remaining</span>
      </div>
    </div>
  );
}
