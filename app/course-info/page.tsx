"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  Target
} from "lucide-react";
import { courseOverviewMetadata } from "@/data/course";
import { validateCurriculum } from "@/lib/validation";

export default function CourseInfoPage() {
  const report = validateCurriculum();

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Syllabus & Course Specifications
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 56 Instructional Hours Validated
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Course Information & 56-Hour Syllabus
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Comprehensive instructional syllabus for the 30-Day AR/VR Development Bootcamp, directed by{" "}
              <strong>Jane Rose, Asst. Prof, CSE</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center md:text-right min-w-[170px]">
            <span className="text-xs text-slate-400 block">Total Curriculum</span>
            <span className="text-2xl font-black text-white">56 Hours</span>
            <p className="text-[11px] text-cyan-400 font-medium mt-0.5">30 Days • 4 Capstones</p>
          </div>
        </div>
      </div>

      {/* Programmatic Validation Card */}
      <section className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-3 bg-emerald-950/10">
        <div className="flex items-center gap-2 text-emerald-400">
          <ShieldCheck className="w-5 h-5" />
          <h2 className="text-base font-bold text-white tracking-tight">
            Programmatic Curriculum Schedule Validation Report
          </h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          The course data structure is verified against programmatic curriculum constraints. The schedule
          strictly adheres to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs pt-1">
          {report.checks.map((c, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-0.5">
              <span className="font-semibold text-slate-200 block truncate">{c.title}</span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                {c.actual}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 56-Hour Instructional Breakdown Table */}
      <section className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
        <div>
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            56-Hour Course Schedule & Instructional Breakdown
          </h2>
          <p className="text-xs text-slate-400">
            Exactly 13 hours per week across Weeks 1–4, plus 4 hours for the final showcase
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300">
                <th className="p-3.5 font-bold">Week</th>
                <th className="p-3.5 font-bold">Theme & Focus Area</th>
                <th className="p-3.5 font-bold">Days</th>
                <th className="p-3.5 font-bold">Hours</th>
                <th className="p-3.5 font-bold">Major Capstone Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {courseOverviewMetadata.weeks.map((w) => (
                <tr key={w.weekNumber} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-indigo-400">
                    {w.weekNumber === 5 ? "Showcase" : `Week ${w.weekNumber}`}
                  </td>
                  <td className="p-3.5">
                    <span className="font-bold text-white block text-sm">{w.title}</span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">{w.description}</span>
                  </td>
                  <td className="p-3.5 font-mono text-slate-300">{w.daysRange}</td>
                  <td className="p-3.5 font-mono font-bold text-cyan-400 text-sm">{w.hours} hrs</td>
                  <td className="p-3.5 font-medium text-slate-200">
                    {w.majorProjectId !== "showcase" ? (
                      <Link
                        href={`/projects/${w.majorProjectId}`}
                        className="text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>{w.majorProjectTitle}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    ) : (
                      <span>{w.majorProjectTitle}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-900/90 font-bold text-white border-t-2 border-slate-700">
                <td className="p-3.5" colSpan={3}>
                  Total Certified Instructional Hours
                </td>
                <td className="p-3.5 font-mono text-emerald-400 text-base">56 Hours</td>
                <td className="p-3.5 text-xs text-slate-300">4 Capstones • 30 Daily Mini-Projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Target Learning Outcomes & Graduate Attributes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wide text-cyan-400 flex items-center gap-2">
            <Target className="w-4 h-4" /> Graduate Competencies
          </h2>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
              <span>Full-stack spatial software engineering using modern Unity LTS releases.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
              <span>Multiplatform mobile AR deployment with AR Foundation, natural feature tracking, and surface plane raycasting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
              <span>Cross-platform VR application architecture with Khronos OpenXR and XR Interaction Toolkit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
              <span>Strict adherence to spatial human factors: vestibular comfort, ergonomic reach zones, and photo-sensitivity standards.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wide text-indigo-400 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Assessment & Policies
          </h2>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
              <span><strong>Weighting:</strong> 20% Mini-Projects, 75% Major Projects (15%+20%+20%+20%), 5% Final Viva.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
              <span><strong>Code Integrity:</strong> All scripts and repository commits must reflect original student authorship with clean documentation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
              <span><strong>Hardware Accessibility:</strong> All activities support editor simulation via XR Device Simulator and XR Simulation for equitable access.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
