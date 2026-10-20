"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Glasses, ShieldCheck } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 text-slate-400 text-xs py-8 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Mandatory Attribution */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center">
              <Glasses className="w-3.5 h-3.5 text-white" />
            </div>
            <span>AR/VR Development Bootcamp</span>
          </div>
          <p className="text-slate-400">
            Course duration: <span className="text-slate-200 font-medium">30 Days | 56 Hours</span>
          </p>
          <p className="text-cyan-400 font-semibold tracking-wide">
            Jane Rose, Asst. Prof, CSE
          </p>
        </div>

        {/* Middle: Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-slate-400 text-xs font-medium">
          <Link href="/roadmap" className="hover:text-cyan-400 transition-colors">
            Roadmap
          </Link>
          <Link href="/lessons" className="hover:text-cyan-400 transition-colors">
            Daily Lessons
          </Link>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors">
            Weekly Projects
          </Link>
          <Link href="/assignments" className="hover:text-cyan-400 transition-colors">
            Assignments
          </Link>
          <Link href="/assessments" className="hover:text-cyan-400 transition-colors">
            Assessments
          </Link>
          <Link href="/resources" className="hover:text-cyan-400 transition-colors">
            Resources
          </Link>
          <Link href="/course-info" className="hover:text-cyan-400 transition-colors">
            Course Info
          </Link>
          <Link href="/instructor" className="hover:text-cyan-400 transition-colors">
            Instructor
          </Link>
        </nav>

        {/* Right: Validation & Dynamic Year */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>56-Hour Curriculum Validated</span>
          </div>
          <p>© {currentYear} AR/VR Course Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
