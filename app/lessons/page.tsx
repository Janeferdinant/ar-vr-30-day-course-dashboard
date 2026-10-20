"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  Search,
  ArrowRight,
  FileCheck2
} from "lucide-react";
import { allLessons } from "@/data/course";
import { useProgress } from "@/context/ProgressContext";
import { formatDuration } from "@/lib/utils";

export function LessonsIndexPage() {
  const { progress, toggleDay, isHydrated } = useProgress();
  const [selectedWeek, setSelectedWeek] = useState<number | "all">("all");
  const [selectedDuration, setSelectedDuration] = useState<number | "all">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "remaining">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const completedSet = useMemo(() => new Set(progress.completedDays), [progress.completedDays]);

  const filtered = useMemo(() => {
    return allLessons.filter((lesson) => {
      if (selectedWeek !== "all" && lesson.week !== selectedWeek) return false;
      if (selectedDuration !== "all" && lesson.duration !== selectedDuration) return false;

      const isCompleted = completedSet.has(lesson.day);
      if (statusFilter === "completed" && !isCompleted) return false;
      if (statusFilter === "remaining" && isCompleted) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = lesson.title.toLowerCase().includes(q);
        const matchesTopics = lesson.topics.some((t) => t.toLowerCase().includes(q));
        const matchesMini = lesson.miniProject.title.toLowerCase().includes(q);
        if (!matchesTitle && !matchesTopics && !matchesMini) return false;
      }

      return true;
    });
  }, [selectedWeek, selectedDuration, statusFilter, searchQuery, completedSet]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Instructional Modules
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                30 Lessons • 56 Hours
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Daily Lessons Library
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Access in-depth technical lessons with C# code samples, instructor demonstration notes,
              hands-on practical lab instructions, and daily mini-project specifications.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center md:text-right min-w-[160px]">
            <span className="text-xs text-slate-400 block">Lessons Completed</span>
            <span className="text-2xl font-black text-white">
              {isHydrated ? completedSet.size : 0} <span className="text-sm font-normal text-slate-400">/ 30</span>
            </span>
            <p className="text-[11px] text-cyan-400 font-medium mt-0.5">
              {isHydrated ? Math.round((completedSet.size / 30) * 100) : 0}% Course Logged
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, C# MonoBehaviour, or lab name..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Week Selector */}
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value === "all" ? "all" : parseInt(e.target.value, 10))}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Weeks</option>
              <option value="1">Week 1: 3D Foundations (Days 1–7)</option>
              <option value="2">Week 2: Augmented Reality (Days 8–14)</option>
              <option value="3">Week 3: Virtual Reality (Days 15–21)</option>
              <option value="4">Week 4: Advanced XR (Days 22–28)</option>
              <option value="5">Week 5: Showcase (Days 29–30)</option>
            </select>

            {/* Duration Selector */}
            <select
              value={selectedDuration}
              onChange={(e) =>
                setSelectedDuration(e.target.value === "all" ? "all" : parseInt(e.target.value, 10))
              }
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Durations</option>
              <option value="1">1 Hour Modules</option>
              <option value="2">2 Hours Modules</option>
            </select>

            {/* Status Pills */}
            <div className="flex rounded-lg border border-slate-800 overflow-hidden">
              <button
                type="button"
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  statusFilter === "all" ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("completed")}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  statusFilter === "completed" ? "bg-emerald-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                Done
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("remaining")}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  statusFilter === "remaining" ? "bg-amber-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                Pending
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson List */}
      <div className="space-y-3">
        <div className="text-xs text-slate-400 flex items-center justify-between">
          <span>Showing {filtered.length} of 30 lessons</span>
          <span>Click any lesson to read full theory & code</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((lesson) => {
            const isCompleted = isHydrated && completedSet.has(lesson.day);

            return (
              <div
                key={lesson.id}
                className={`p-5 rounded-2xl glass-panel glass-card-hover border transition-all flex flex-col justify-between ${
                  isCompleted
                    ? "border-emerald-500/30 bg-emerald-950/10"
                    : "border-slate-800/80 bg-slate-950/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Day {lesson.day}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {formatDuration(lesson.duration)}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleDay(lesson.day)}
                        className={`text-slate-500 hover:text-emerald-400 transition-colors ${
                          isCompleted ? "text-emerald-400" : ""
                        }`}
                        title={isCompleted ? "Mark Incomplete" : "Mark Complete"}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <Link
                    href={`/lessons/${lesson.id}`}
                    className="text-base font-bold text-white hover:text-cyan-300 transition-colors block mt-1 line-clamp-2"
                  >
                    {lesson.title}
                  </Link>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {lesson.learningObjectives[0]}
                  </p>

                  <div className="mt-4 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                    <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-violet-400" />
                      <span className="truncate">{lesson.miniProject.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-1">
                      Deliverable: {lesson.miniProject.deliverable}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Week {lesson.week}</span>
                  <Link
                    href={`/lessons/${lesson.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 group"
                  >
                    <span>Read Lesson</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LessonsIndexPage;
