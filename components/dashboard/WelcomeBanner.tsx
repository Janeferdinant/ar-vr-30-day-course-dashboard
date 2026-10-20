import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Glasses,
  Clock,
  Layers,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass-panel p-6 sm:p-8 border border-indigo-500/30 shadow-2xl shadow-indigo-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-violet-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          {/* Badge & Attribution */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Spatial Computing Curriculum
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700 font-semibold">
              Jane Rose, Asst. Prof, CSE
            </span>
          </div>

          {/* Heading and Subtitle */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            AR/VR Development <span className="gradient-text-spatial">Bootcamp</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            From 3D Foundations to Immersive Applications in 30 Days. Master real-time spatial engineering,
            Augmented Reality with AR Foundation, Virtual Reality with OpenXR, and industrial safety simulations.
          </p>

          {/* Key Metrics Quick Ribbon */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span><strong className="text-white">56</strong> Instructional Hours</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span><strong className="text-white">30</strong> Days • <strong className="text-white">30</strong> Labs</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span><strong className="text-white">4</strong> Major Capstones</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Syllabus Validated</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
          <Link
            href="/roadmap"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore 30-Day Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm transition-colors"
          >
            <Glasses className="w-4 h-4 text-cyan-400" />
            <span>View 4 Weekly Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
