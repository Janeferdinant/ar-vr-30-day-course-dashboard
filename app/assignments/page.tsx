"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Download,
  Search,
  ExternalLink,
  Edit3,
  Printer,
  Info
} from "lucide-react";
import { allLessons } from "@/data/course";
import { useProgress } from "@/context/ProgressContext";
import { SubmissionStatus } from "@/types/progress";

export default function AssignmentsPage() {
  const { progress, updateDayAssignment, exportCSV } = useProgress();
  const [selectedWeek, setSelectedWeek] = useState<number | "all">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | SubmissionStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingDay, setEditingDay] = useState<number | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [editRepoUrl, setEditRepoUrl] = useState("");

  const completedDaysSet = useMemo(() => new Set(progress.completedDays), [progress.completedDays]);

  const assignmentsList = useMemo(() => {
    return allLessons.map((lesson) => {
      const dayKey = `day-${lesson.day}`;
      const record = progress.assignments[dayKey];
      const isDayDone = completedDaysSet.has(lesson.day);

      const status: SubmissionStatus =
        record?.status || (isDayDone ? "completed" : "not-started");

      return {
        lesson,
        status,
        notes: record?.notes || "",
        repoUrl: record?.repoUrl || "",
        completedAt: record?.completedAt
      };
    });
  }, [progress.assignments, completedDaysSet]);

  const filteredAssignments = useMemo(() => {
    return assignmentsList.filter(({ lesson, status, notes }) => {
      if (selectedWeek !== "all" && lesson.week !== selectedWeek) return false;
      if (statusFilter !== "all" && status !== statusFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = lesson.miniProject.title.toLowerCase().includes(q);
        const matchesDeliverable = lesson.miniProject.deliverable.toLowerCase().includes(q);
        const matchesLesson = lesson.title.toLowerCase().includes(q);
        const matchesNotes = notes.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDeliverable && !matchesLesson && !matchesNotes) return false;
      }

      return true;
    });
  }, [assignmentsList, selectedWeek, statusFilter, searchQuery]);

  const totalCompleted = assignmentsList.filter(
    (a) => a.status === "completed" || a.status === "submitted"
  ).length;

  const handleOpenEdit = (day: number, curNotes: string, curUrl: string) => {
    setEditingDay(day);
    setEditNotes(curNotes);
    setEditRepoUrl(curUrl);
  };

  const handleSaveEdit = (day: number) => {
    updateDayAssignment(day, {
      notes: editNotes,
      repoUrl: editRepoUrl
    });
    setEditingDay(null);
  };

  const handleStatusChange = (day: number, newStatus: SubmissionStatus) => {
    updateDayAssignment(day, {
      status: newStatus,
      completedAt: newStatus === "completed" || newStatus === "submitted" ? new Date().toISOString() : undefined
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Practical Deliverables Registry
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                30 Daily Labs
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Assignments & Mini-Project Tracker
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Track submission status, personal lab reflections, and repository URLs for all 30 daily practical
              mini-projects across the 56-hour curriculum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV Report</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Local Storage Notice */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-white">Local Storage Notice: </strong>
            Course progress, notes, and repository links are stored locally in this browser. They are not
            automatically synced between devices or users. Use the <strong>Export CSV Report</strong> feature to back up or share your progress.
          </div>
        </div>

        {/* Summary Stat Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block">Total Mini-Projects</span>
            <span className="text-lg font-bold text-white">30 Labs</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block">Completed / Submitted</span>
            <span className="text-lg font-bold text-emerald-400">{totalCompleted} / 30</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block">Remaining Labs</span>
            <span className="text-lg font-bold text-amber-400">{30 - totalCompleted}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block">Grade Weighting</span>
            <span className="text-lg font-bold text-indigo-400">20% of Final Grade</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mini-project titles, deliverables, or personal notes..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Week Selector */}
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value === "all" ? "all" : parseInt(e.target.value, 10))}
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Weeks</option>
            <option value="1">Week 1 (Days 1–7)</option>
            <option value="2">Week 2 (Days 8–14)</option>
            <option value="3">Week 3 (Days 15–21)</option>
            <option value="4">Week 4 (Days 22–28)</option>
            <option value="5">Week 5 (Days 29–30)</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "all" | SubmissionStatus)}
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Statuses</option>
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="submitted">Submitted</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Assignments Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
                <th className="p-3.5 font-bold w-16">Day</th>
                <th className="p-3.5 font-bold">Mini-Project Title & Deliverable</th>
                <th className="p-3.5 font-bold w-36">Status</th>
                <th className="p-3.5 font-bold min-w-[200px]">Notes & Repository Link</th>
                <th className="p-3.5 font-bold text-right w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {filteredAssignments.map(({ lesson, status, notes, repoUrl }) => {
                const isEditing = editingDay === lesson.day;
                const isCompleted = status === "completed" || status === "submitted";

                return (
                  <tr
                    key={lesson.id}
                    className={`hover:bg-slate-900/50 transition-colors ${
                      isCompleted ? "bg-emerald-950/10" : ""
                    }`}
                  >
                    {/* Day Column */}
                    <td className="p-3.5 align-top">
                      <span className="font-black text-indigo-400 block text-sm">Day {lesson.day}</span>
                      <span className="text-[10px] text-slate-500">Wk {lesson.week}</span>
                    </td>

                    {/* Title & Deliverable */}
                    <td className="p-3.5 align-top space-y-1">
                      <Link
                        href={`/lessons/${lesson.id}`}
                        className="font-bold text-white hover:text-cyan-300 transition-colors block text-sm"
                      >
                        {lesson.miniProject.title}
                      </Link>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        <strong className="text-slate-300">Deliverable: </strong>
                        {lesson.miniProject.deliverable}
                      </p>
                      <span className="text-[10px] text-slate-500 block">
                        Lesson: {lesson.title}
                      </span>
                    </td>

                    {/* Status Column */}
                    <td className="p-3.5 align-top">
                      <select
                        value={status}
                        onChange={(e) => handleStatusChange(lesson.day, e.target.value as SubmissionStatus)}
                        className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-semibold focus:outline-none ${
                          status === "completed"
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                            : status === "submitted"
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                            : status === "in-progress"
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                            : "bg-slate-900 text-slate-400 border-slate-800"
                        }`}
                      >
                        <option value="not-started">Not Started</option>
                        <option value="in-progress">In Progress</option>
                        <option value="submitted">Submitted</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>

                    {/* Notes & Repo Link */}
                    <td className="p-3.5 align-top space-y-1 text-xs">
                      {isEditing ? (
                        <div className="space-y-2 p-2 bg-slate-900 rounded-lg border border-slate-700">
                          <input
                            type="text"
                            value={editRepoUrl}
                            onChange={(e) => setEditRepoUrl(e.target.value)}
                            placeholder="Repository or demo URL..."
                            className="w-full px-2 py-1 bg-slate-800 rounded border border-slate-700 text-xs text-white"
                          />
                          <textarea
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                            placeholder="Personal notes..."
                            rows={2}
                            className="w-full px-2 py-1 bg-slate-800 rounded border border-slate-700 text-xs text-white"
                          />
                          <div className="flex justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => setEditingDay(null)}
                              className="px-2 py-0.5 rounded text-slate-400 hover:text-white"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveEdit(lesson.day)}
                              className="px-2.5 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          {repoUrl ? (
                            <a
                              href={repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:underline flex items-center gap-1 truncate text-xs"
                            >
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{repoUrl}</span>
                            </a>
                          ) : (
                            <span className="text-slate-600 italic text-[11px] block">No URL recorded</span>
                          )}

                          {notes ? (
                            <p className="text-slate-300 text-xs line-clamp-2">{notes}</p>
                          ) : (
                            <span className="text-slate-600 italic text-[11px] block">No notes entered</span>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-3.5 align-top text-right space-y-1">
                      {!isEditing && (
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(lesson.day, notes, repoUrl)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs inline-flex items-center gap-1"
                          title="Edit submission notes"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                      )}
                      <Link
                        href={`/lessons/${lesson.id}`}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 text-xs inline-flex items-center gap-1 block text-center"
                        title="Open Lesson"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Lab</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
