"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  CheckCircle2,
  FolderKanban,
  FileCheck2,
  Download,
  Upload,
  Sparkles
} from "lucide-react";
import { allLessons } from "@/data/course";
import { useProgress } from "@/context/ProgressContext";

export default function ProgressTrackerPage() {
  const {
    progress,
    metrics,
    toggleDay,
    exportCSV,
    exportJSON,
    importJSON,
    resetProgress,
    isHydrated
  } = useProgress();

  const [importText, setImportText] = useState("");
  const [showImportModal, setShowImportModal] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const completedSet = new Set(progress.completedDays);

  const handleImportSubmit = () => {
    const success = importJSON(importText);
    if (success) {
      setImportStatus("Progress successfully restored!");
      setTimeout(() => {
        setShowImportModal(false);
        setImportStatus(null);
        setImportText("");
      }, 1500);
    } else {
      setImportStatus("Error: Invalid JSON format. Please verify and try again.");
    }
  };

  const handleDownloadJSON = () => {
    const jsonStr = exportJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `arvr_progress_backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Enrollment Progress
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                56 Instructional Hours Target
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Progress & Hours Tracker
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Visual analytics tracking your completed days, hours logged, weekly milestones, and assignment
              deliverables across the 30-day curriculum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Export CSV</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadJSON}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Backup JSON</span>
            </button>
            <button
              type="button"
              onClick={() => setShowImportModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Upload className="w-4 h-4 text-violet-400" />
              <span>Restore Backup</span>
            </button>
          </div>
        </div>

        {/* Top 4 Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Days Completed
            </span>
            <p className="text-2xl font-black text-white">
              {isHydrated ? metrics.completedDaysCount : 0} <span className="text-sm font-normal text-slate-400">/ 30</span>
            </p>
            <span className="text-[11px] text-cyan-400 font-medium">
              {isHydrated ? metrics.overallPercentage : 0}% Course Completed
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Hours Logged
            </span>
            <p className="text-2xl font-black text-white">
              {isHydrated ? metrics.completedHours : 0} <span className="text-sm font-normal text-slate-400">/ 56h</span>
            </p>
            <span className="text-[11px] text-emerald-400 font-medium">
              {isHydrated ? metrics.remainingHours : 56} Hours Remaining
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
              <FolderKanban className="w-3.5 h-3.5 text-violet-400" /> Major Projects
            </span>
            <p className="text-2xl font-black text-white">
              {isHydrated ? metrics.completedMajorProjects : 0} <span className="text-sm font-normal text-slate-400">/ 4</span>
            </p>
            <span className="text-[11px] text-violet-400 font-medium">
              75% Total Assessment Weight
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" /> Daily Mini-Projects
            </span>
            <p className="text-2xl font-black text-white">
              {isHydrated ? metrics.completedMiniProjects : 0} <span className="text-sm font-normal text-slate-400">/ 30</span>
            </p>
            <span className="text-[11px] text-emerald-400 font-medium">
              20% Total Assessment Weight
            </span>
          </div>
        </div>
      </div>

      {/* Week-by-Week Instructional Hours Breakdown */}
      <section className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              Weekly Instructional Hours Breakdown (56 Hours Total)
            </h2>
            <p className="text-xs text-slate-400">
              Each week guarantees 13 instructional hours, culminating in 4 hours for the final showcase
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {metrics.weeklyProgress.map((week) => (
            <div key={week.week} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">
                    {week.week === 5 ? "Showcase" : `Week ${week.week}`}
                  </span>
                  <span className="text-white font-medium">{week.title}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>
                    Days: <strong className="text-slate-200">{isHydrated ? week.completedDays : 0}/{week.totalDays}</strong>
                  </span>
                  <span>
                    Hours: <strong className="text-slate-200">{isHydrated ? week.completedHours : 0}/{week.totalHours}h</strong>
                  </span>
                  <span className="font-bold text-indigo-400">{isHydrated ? week.percentage : 0}%</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${isHydrated ? week.percentage : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 30-Day Matrix Grid */}
      <section className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              30-Day Interactive Completion Matrix
            </h2>
            <p className="text-xs text-slate-400">
              Click any tile to toggle completion status. Use the link arrow to jump directly to that lesson.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/40 inline-block" />
              Completed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-900 border border-slate-800 inline-block" />
              Pending
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2.5">
          {allLessons.map((lesson) => {
            const isCompleted = isHydrated && completedSet.has(lesson.day);

            return (
              <div
                key={lesson.id}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col justify-between group ${
                  isCompleted
                    ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="font-bold">D{lesson.day}</span>
                    <span>{lesson.duration}h</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleDay(lesson.day)}
                    className="w-full py-1 text-center"
                    title={isCompleted ? "Mark Incomplete" : "Mark Complete"}
                  >
                    <CheckCircle2
                      className={`w-5 h-5 mx-auto transition-transform group-hover:scale-110 ${
                        isCompleted ? "text-emerald-400 fill-emerald-500/20" : "text-slate-600"
                      }`}
                    />
                  </button>
                </div>

                <Link
                  href={`/lessons/${lesson.id}`}
                  className="mt-1 text-[10px] font-semibold text-cyan-400 hover:underline truncate block"
                  title={lesson.title}
                >
                  View Lab
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Danger Zone / Reset Progress */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div>
          <h3 className="font-bold text-white">Browser Local Storage Management</h3>
          <p className="text-slate-400 mt-0.5">
            Resetting clears all local completion records, project status, and notes from this browser.
          </p>
        </div>

        {!showResetConfirm ? (
          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-500/30 transition-colors font-semibold self-start sm:self-auto"
          >
            Reset All Progress Data
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-rose-400 font-semibold">Confirm erase?</span>
            <button
              type="button"
              onClick={() => {
                resetProgress();
                setShowResetConfirm(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold"
            >
              Confirm Reset
            </button>
            <button
              type="button"
              onClick={() => setShowResetConfirm(false)}
              className="px-3 py-1.5 text-slate-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        )}
      </section>

      {/* Restore Backup JSON Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-panel max-w-lg w-full p-6 rounded-2xl border border-slate-700 space-y-4 bg-slate-950">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Restore Progress from JSON Backup</h3>
              <button
                type="button"
                onClick={() => setShowImportModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300">
              Paste the contents of your previously exported JSON backup file below to restore your completion records.
            </p>
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste JSON here..."
              rows={6}
              className="w-full p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-cyan-200 focus:outline-none focus:border-indigo-500"
            />
            {importStatus && (
              <p
                className={`text-xs ${
                  importStatus.startsWith("Error") ? "text-rose-400" : "text-emerald-400"
                }`}
              >
                {importStatus}
              </p>
            )}
            <div className="flex justify-end gap-2 text-xs">
              <button
                type="button"
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleImportSubmit}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
              >
                Apply Restore
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
