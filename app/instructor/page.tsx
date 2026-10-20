"use client";

import React from "react";
import {
  Award,
  BookOpen,
  Sparkles,
  Clock
} from "lucide-react";
import { instructorData } from "@/data/instructor";

export default function InstructorPage() {
  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Instructor Banner Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          {/* Avatar Icon */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center font-black text-white text-3xl shadow-xl shadow-indigo-600/30 flex-shrink-0">
            JR
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
              <span className="font-bold px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Course Director & Lead Instructor
              </span>
              <span className="text-slate-400">Department of Computer Science and Engineering</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {instructorData.name}
            </h1>
            <p className="text-base text-cyan-400 font-semibold">{instructorData.title}</p>

            <p className="text-xs text-slate-400 pt-1">
              Official Attribution:{" "}
              <strong className="text-slate-200">{instructorData.attribution}</strong>
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
          <p>{instructorData.bio}</p>
        </div>
      </div>

      {/* Teaching Philosophy & Course Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
              Teaching Philosophy
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {instructorData.teachingPhilosophy}
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
              Curriculum Vision
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {instructorData.courseVision}
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
        <h2 className="text-sm font-bold text-white uppercase tracking-wide text-violet-400 flex items-center gap-2">
          <Award className="w-4 h-4" /> Academic & Engineering Focus Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
          {instructorData.researchFocus.map((focus, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5 text-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
              <span>{focus}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Office Hours & Consultation Policy */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2 text-xs">
        <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-400" /> Office Hours & Academic Support
        </h2>
        <p className="text-slate-300 leading-relaxed">
          {instructorData.officeHoursInfo}
        </p>
        <p className="text-slate-500 text-[11px] pt-1">
          For technical inquiries regarding Unity setups or project milestones, consult during scheduled lab
          assistance periods.
        </p>
      </section>
    </div>
  );
}
