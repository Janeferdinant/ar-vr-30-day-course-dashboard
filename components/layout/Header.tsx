"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Clock,
  ShieldCheck,
  Download,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { getNextIncompleteLesson } from "@/lib/progress";

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export function Header({ onOpenMobileMenu }: HeaderProps) {
  const pathname = usePathname();
  const { progress, metrics, isHydrated, exportCSV } = useProgress();
  const nextLesson = getNextIncompleteLesson(progress);

  // Derive human-readable page name
  const getPageTitle = () => {
    if (pathname === "/") return "Overview Dashboard";
    if (pathname.startsWith("/roadmap")) return "30-Day Course Roadmap";
    if (pathname.startsWith("/lessons")) return "Daily Lessons";
    if (pathname.startsWith("/projects")) return "Weekly Major Projects";
    if (pathname.startsWith("/assignments")) return "Assignments & Mini-Projects";
    if (pathname.startsWith("/progress")) return "Progress Tracker";
    if (pathname.startsWith("/assessments")) return "Assessment Dashboard";
    if (pathname.startsWith("/resources")) return "Learning Resources";
    if (pathname.startsWith("/course-info")) return "Course Information";
    if (pathname.startsWith("/instructor")) return "Instructor Profile";
    return "Dashboard";
  };

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 flex items-center justify-between">
      {/* Left section: mobile hamburger + title */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-base md:text-lg font-bold text-white tracking-tight leading-none">
            {getPageTitle()}
          </h2>
          <p className="hidden sm:block text-[11px] text-slate-400 mt-0.5">
            AR/VR Development Bootcamp • 56 Instructional Hours
          </p>
        </div>
      </div>

      {/* Right section: Quick stats & Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Validated Badge */}
        <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>56h Validated</span>
        </div>

        {/* Hours Mini Pill */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          <span>
            {isHydrated ? metrics.completedHours : 0}
            <span className="text-slate-500">/56h</span>
          </span>
        </div>

        {/* Continue Learning CTA */}
        {nextLesson && (
          <Link
            href={`/lessons/${nextLesson.id}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Day {nextLesson.day}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}

        {/* Export Progress Button */}
        <button
          type="button"
          onClick={exportCSV}
          title="Export CSV Progress Report"
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
        >
          <Download className="w-4 h-4 text-cyan-400" />
          <span className="hidden lg:inline">Export</span>
        </button>
      </div>
    </header>
  );
}
