"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Search,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { allLessons, courseOverviewMetadata } from "@/data/course";
import { useProgress } from "@/context/ProgressContext";
import { formatDuration } from "@/lib/utils";

export default function RoadmapPage() {
  const { progress, toggleDay, isHydrated } = useProgress();
  const [selectedWeek, setSelectedWeek] = useState<number | "all">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "remaining">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const completedDaysSet = useMemo(() => new Set(progress.completedDays), [progress.completedDays]);

  const filteredLessons = useMemo(() => {
    return allLessons.filter((lesson) => {
      // Week filter
      if (selectedWeek !== "all" && lesson.week !== selectedWeek) return false;

      // Status filter
      const isDone = completedDaysSet.has(lesson.day);
      if (statusFilter === "completed" && !isDone) return false;
      if (statusFilter === "remaining" && isDone) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = lesson.title.toLowerCase().includes(query);
        const matchesTopic = lesson.topics.some((t) => t.toLowerCase().includes(query));
        const matchesMini = lesson.miniProject.title.toLowerCase().includes(query);
        if (!matchesTitle && !matchesTopic && !matchesMini) return false;
      }

      return true;
    });
  }, [selectedWeek, statusFilter, searchQuery, completedDaysSet]);

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Full 30-Day Curriculum Timeline
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 56 Instructional Hours
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              30-Day Course Roadmap
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Chronological schedule detailing all 30 days of lecture topics, hands-on lab instructions,
              and daily mini-projects.
            </p>
          </div>

          {/* Overall progress indicator */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center md:text-right min-w-[160px]">
            <p className="text-xs text-slate-400">Total Completion</p>
            <p className="text-2xl font-black text-white">
              {isHydrated ? completedDaysSet.size : 0} <span className="text-sm font-normal text-slate-400">/ 30 Days</span>
            </p>
            <p className="text-[11px] text-cyan-400 font-medium mt-0.5">
              {isHydrated ? Math.round((completedDaysSet.size / 30) * 100) : 0}% Course Logged
            </p>
          </div>
        </div>

        {/* Weekly Breakdown Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {courseOverviewMetadata.weeks.map((week) => {
            const isSelected = selectedWeek === week.weekNumber;
            const weekLessons = allLessons.filter((l) => l.week === week.weekNumber);
            const completedCount = weekLessons.filter((l) => completedDaysSet.has(l.day)).length;

            return (
              <button
                key={week.weekNumber}
                type="button"
                onClick={() => setSelectedWeek(isSelected ? "all" : week.weekNumber)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-indigo-600/30 border-indigo-500 shadow-md shadow-indigo-600/20"
                    : "bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? "text-cyan-300" : "text-slate-400"}>
                    Week {week.weekNumber}
                  </span>
                  <span className="text-slate-400">{week.hours}h</span>
                </div>
                <p className="text-xs font-bold text-white mt-1 truncate">{week.title}</p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
                  <span>{week.daysRange}</span>
                  <span className="text-emerald-400 font-semibold">{completedCount}/{weekLessons.length}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, keywords, C# scripts, or mini-projects..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Week Selector */}
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value === "all" ? "all" : parseInt(e.target.value, 10))}
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Weeks (30 Days)</option>
            <option value="1">Week 1: 3D Foundations (13h)</option>
            <option value="2">Week 2: AR Development (13h)</option>
            <option value="3">Week 3: VR Development (13h)</option>
            <option value="4">Week 4: Advanced XR (13h)</option>
            <option value="5">Week 5: Showcase (4h)</option>
          </select>

          {/* Status Filter */}
          <div className="flex rounded-lg border border-slate-800 overflow-hidden text-xs">
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 font-medium transition-colors ${
                statusFilter === "all" ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              All ({allLessons.length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("completed")}
              className={`px-3 py-1.5 font-medium transition-colors ${
                statusFilter === "completed" ? "bg-emerald-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              Done ({completedDaysSet.size})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("remaining")}
              className={`px-3 py-1.5 font-medium transition-colors ${
                statusFilter === "remaining" ? "bg-amber-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              Remaining ({30 - completedDaysSet.size})
            </button>
          </div>
        </div>
      </div>

      {/* Filtered Lesson Cards Grid */}
      {filteredLessons.length === 0 ? (
        <div className="py-16 text-center glass-panel rounded-2xl border border-slate-800 space-y-2">
          <Calendar className="w-10 h-10 text-slate-500 mx-auto" />
          <p className="text-base font-bold text-white">No lessons match your filters</p>
          <p className="text-xs text-slate-400">
            Try adjusting your search query or reset the week/status filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedWeek("all");
              setStatusFilter("all");
              setSearchQuery("");
            }}
            className="mt-3 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Showing {filteredLessons.length} of 30 lessons</span>
            <span>Click any day to launch lesson workspace</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson) => {
              const isCompleted = isHydrated && completedDaysSet.has(lesson.day);

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
                    {/* Top row: Day badge, duration & completion toggle */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Day {lesson.day}
                        </span>
                        <span className="text-[11px] text-slate-400">Week {lesson.week}</span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          {formatDuration(lesson.duration)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleDay(lesson.day)}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                          isCompleted
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                            : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isCompleted ? "Completed" : "Mark Done"}</span>
                      </button>
                    </div>

                    {/* Lesson Title */}
                    <Link
                      href={`/lessons/${lesson.id}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors block mt-1"
                    >
                      {lesson.title}
                    </Link>

                    {/* Topics covered pill list */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {lesson.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800"
                        >
                          {topic}
                        </span>
                      ))}
                      {lesson.topics.length > 3 && (
                        <span className="text-[10px] text-slate-500">
                          +{lesson.topics.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Mini-Project deliverable */}
                    <div className="mt-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs">
                      <span className="font-semibold text-slate-300">Mini-Project: </span>
                      <span className="text-slate-400">{lesson.miniProject.title}</span>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        Deliverable: {lesson.miniProject.deliverable}
                      </p>
                    </div>
                  </div>

                  {/* Open Lesson Action */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      {lesson.teachingContent.length} detailed sections • Hands-on lab
                    </span>
                    <Link
                      href={`/lessons/${lesson.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 group"
                    >
                      <span>Open Lesson</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
