"use client";

import React from "react";
import Link from "next/link";
import {
  FolderKanban,
  ArrowRight,
  Clock,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { majorProjects } from "@/data/projects";
import { useProgress } from "@/context/ProgressContext";

export function WeeklyProjectsGrid() {
  const { progress, isHydrated } = useProgress();

  const getWeekColor = (week: number) => {
    switch (week) {
      case 1:
        return { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", glow: "hover:border-blue-500/40" };
      case 2:
        return { badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", glow: "hover:border-indigo-500/40" };
      case 3:
        return { badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", glow: "hover:border-violet-500/40" };
      case 4:
        return { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", glow: "hover:border-cyan-500/40" };
      default:
        return { badge: "bg-slate-800 text-slate-300 border-slate-700", glow: "hover:border-slate-600" };
    }
  };

  return (
    <section aria-labelledby="weekly-projects-heading" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 id="weekly-projects-heading" className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-indigo-400" />
            Four Weekly Major Capstone Projects
          </h2>
          <p className="text-xs text-slate-400">
            Core deliverables spanning 3D worlds, mobile AR, virtual reality laboratories, and industrial safety
          </p>
        </div>
        <Link
          href="/projects"
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 self-start sm:self-auto"
        >
          <span>View All Project Specifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {majorProjects.map((project) => {
          const style = getWeekColor(project.week);
          const status = isHydrated ? progress.projectStatus[project.id] || "not-started" : "not-started";
          const completedMilestones = isHydrated ? progress.projectMilestones[project.id]?.length || 0 : 0;
          const totalMilestones = project.milestones.length;
          const isCompleted = status === "completed" || status === "submitted";

          return (
            <div
              key={project.id}
              className={`glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col justify-between transition-all duration-300 ${style.glow} hover:shadow-xl hover:shadow-indigo-950/30 group`}
            >
              <div>
                {/* Header row: Week pill & Status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                      Week {project.week} Major Capstone
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {project.durationHours} hrs
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border ${
                      isCompleted
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : completedMilestones > 0
                        ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                        : "bg-slate-900 text-slate-400 border-slate-800"
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Completed
                      </>
                    ) : completedMilestones > 0 ? (
                      `In Progress (${completedMilestones}/${totalMilestones})`
                    ) : (
                      "Not Started"
                    )}
                  </span>
                </div>

                {/* Project Title and Description */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Key Deliverables & Required Skills */}
                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">Key Deliverables: </span>
                    <span className="text-slate-400 line-clamp-1">{project.submissionRequirements[0]}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Required Skills: </span>
                    <span className="text-slate-400 line-clamp-1">
                      {project.learningOutcomes.slice(0, 2).join("; ")}
                    </span>
                  </div>
                </div>

                {/* Milestones Progress Mini Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="flex justify-between items-center text-[11px] text-slate-400 mb-1">
                    <span>Milestones: {completedMilestones}/{totalMilestones}</span>
                    <span>{Math.round((completedMilestones / totalMilestones) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${(completedMilestones / totalMilestones) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {project.educationalDisclaimer ? "Academic Prototype Scope" : "Production Quality Track"}
                </span>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white group-hover:border-indigo-500/50 transition-colors"
                >
                  <span>Open Project Workspace</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
