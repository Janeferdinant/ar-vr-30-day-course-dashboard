"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import { majorProjects } from "@/data/projects";
import { useProgress } from "@/context/ProgressContext";

export default function ProjectsIndexPage() {
  const { progress, isHydrated } = useProgress();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Major Project Capstones
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                4 Capstones • 52 Combined Hours
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Weekly Projects Workspace
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Each course week culminates in a substantial engineering capstone. Work through detailed
              milestones, functional requirements, suggested architectures, and evaluation rubrics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center md:text-right min-w-[160px]">
            <span className="text-xs text-slate-400 block">Capstones Completed</span>
            <span className="text-2xl font-black text-white">
              {isHydrated
                ? Object.values(progress.projectStatus).filter(
                    (s) => s === "completed" || s === "submitted"
                  ).length
                : 0}{" "}
              <span className="text-sm font-normal text-slate-400">/ 4</span>
            </span>
            <p className="text-[11px] text-cyan-400 font-medium mt-0.5">
              Weighted Grade Impact: 75% Total
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {majorProjects.map((project) => {
          const status = isHydrated ? progress.projectStatus[project.id] || "not-started" : "not-started";
          const completedMilestones = isHydrated ? progress.projectMilestones[project.id]?.length || 0 : 0;
          const totalMilestones = project.milestones.length;
          const isDone = status === "completed" || status === "submitted";

          return (
            <div
              key={project.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 group"
            >
              <div className="space-y-4">
                {/* Top badges */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Week {project.week} Project
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {project.durationHours} Hours Total
                    </span>
                  </div>

                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      isDone
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : completedMilestones > 0
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-slate-900 text-slate-400 border-slate-800"
                    }`}
                  >
                    {isDone ? "Completed" : completedMilestones > 0 ? "In Progress" : "Not Started"}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Educational Disclaimer Badge for Project 4 */}
                {project.educationalDisclaimer && (
                  <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30 text-[11px] text-amber-300 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{project.educationalDisclaimer}</span>
                  </div>
                )}

                {/* Milestones Progress */}
                <div className="pt-2">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5">
                    <span className="font-medium text-slate-300">
                      Milestones Completed ({completedMilestones}/{totalMilestones})
                    </span>
                    <span className="text-cyan-400 font-semibold">
                      {Math.round((completedMilestones / totalMilestones) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(completedMilestones / totalMilestones) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Deliverables snippet */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs space-y-1">
                  <span className="font-bold text-slate-200">Core Deliverable:</span>
                  <p className="text-slate-400 line-clamp-2">{project.submissionRequirements[0]}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {project.milestones.length} milestones • {project.rubric.length} rubric criteria
                </span>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
                >
                  <span>Open Project Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
