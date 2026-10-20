"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  BookOpen,
  MapPin,
  FolderKanban,
  Library,
  FileSpreadsheet
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { getNextIncompleteLesson } from "@/lib/progress";

export function QuickActions() {
  const { progress, exportCSV, resetProgress } = useProgress();
  const nextLesson = getNextIncompleteLesson(progress);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">Quick Actions & Navigation</h3>
            <p className="text-xs text-slate-400">Fast shortcuts to primary course sections</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Action 1: Open Today's Lesson */}
          <Link
            href={nextLesson ? `/lessons/${nextLesson.id}` : "/lessons/day-1"}
            className="p-3 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold block truncate">Open Today&apos;s Lesson</span>
              <span className="text-[11px] text-slate-400 truncate block">
                {nextLesson ? `Day ${nextLesson.day}: ${nextLesson.title}` : "Day 1"}
              </span>
            </div>
          </Link>

          {/* Action 2: View Complete Roadmap */}
          <Link
            href="/roadmap"
            className="p-3 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold block truncate">View Complete Roadmap</span>
              <span className="text-[11px] text-slate-400 truncate block">30-day chronological schedule</span>
            </div>
          </Link>

          {/* Action 3: Review Weekly Projects */}
          <Link
            href="/projects"
            className="p-3 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-violet-500/40 text-slate-200 hover:text-white transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:scale-105 transition-transform">
              <FolderKanban className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold block truncate">Review Weekly Projects</span>
              <span className="text-[11px] text-slate-400 truncate block">4 major capstone workspaces</span>
            </div>
          </Link>

          {/* Action 4: View Learning Resources */}
          <Link
            href="/resources"
            className="p-3 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
              <Library className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold block truncate">View Learning Resources</span>
              <span className="text-[11px] text-slate-400 truncate block">Unity, AR Foundation & OpenXR</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Action 5: Export CSV & Reset */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={exportCSV}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-colors"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
          <span>Export Progress Report (CSV)</span>
        </button>

        {!showConfirmReset ? (
          <button
            type="button"
            onClick={() => setShowConfirmReset(true)}
            className="text-[11px] text-slate-500 hover:text-rose-400 transition-colors"
          >
            Reset Progress
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-rose-400 text-[11px]">Clear all records?</span>
            <button
              type="button"
              onClick={() => {
                resetProgress();
                setShowConfirmReset(false);
              }}
              className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-semibold text-[10px]"
            >
              Yes, Reset
            </button>
            <button
              type="button"
              onClick={() => setShowConfirmReset(false)}
              className="text-slate-400 text-[10px] hover:underline"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
