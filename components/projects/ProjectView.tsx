"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Layers,
  Sparkles,
  Target,
  FileCheck2,
  Code2,
  Award,
  ShieldAlert,
  Flame
} from "lucide-react";
import { MajorProject } from "@/types/course";
import { majorProjects } from "@/data/projects";
import { useProgress } from "@/context/ProgressContext";
import { SubmissionStatus } from "@/types/progress";

export function ProjectView({ project }: { project: MajorProject }) {
  const router = useRouter();
  const { progress, toggleMilestone, updateProjectStatus, isHydrated } = useProgress();

  const currentStatus = isHydrated ? progress.projectStatus[project.id] || "not-started" : "not-started";
  const completedMilestones = isHydrated ? progress.projectMilestones[project.id] || [] : [];
  const totalMilestones = project.milestones.length;
  const milestonePercent = Math.round((completedMilestones.length / totalMilestones) * 100);

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Top Breadcrumb & Switcher */}
      <div className="glass-panel p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Weekly Projects</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium hidden sm:inline">Switch Project:</span>
          <select
            value={project.id}
            onChange={(e) => router.push(`/projects/${e.target.value}`)}
            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
          >
            {majorProjects.map((p) => (
              <option key={p.id} value={p.id}>
                Week {p.week}: {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Week {project.week} Major Capstone
              </span>
              <span className="text-slate-400 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {project.durationHours} Instructional Hours
              </span>
              <span className="text-slate-400 text-xs">Jane Rose, Asst. Prof, CSE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Project Status Selector */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-2 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 pl-2">Status:</span>
            <select
              value={currentStatus}
              onChange={(e) => updateProjectStatus(project.id, e.target.value as SubmissionStatus)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="submitted">Submitted for Evaluation</option>
              <option value="completed">Completed & Verified</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Educational Disclaimer Banner if present */}
        {project.educationalDisclaimer && (
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">Mandatory Scope Disclaimer: </strong>
              {project.educationalDisclaimer}
            </div>
          </div>
        )}

        {/* Milestone Progress bar */}
        <div className="pt-2">
          <div className="flex justify-between items-center text-xs text-slate-300 mb-1.5">
            <span className="font-semibold">
              Milestone Progress ({completedMilestones.length}/{totalMilestones})
            </span>
            <span className="text-cyan-400 font-bold">{milestonePercent}%</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${milestonePercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Problem Statement & Learning Outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <Target className="w-4 h-4" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">Problem Statement</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>

          <div className="pt-3 border-t border-slate-800">
            <h3 className="text-xs font-bold text-white uppercase tracking-wide mb-2 text-cyan-400">
              Learning Outcomes
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.learningOutcomes.map((lo, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                  <span>{lo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Required Assets & Tools */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-violet-400">
            <Layers className="w-4 h-4" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">Assets & Tools</h2>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {project.requiredAssets.map((asset, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-1.5" />
                <span>{asset}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Functional Requirements & Suggested Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wide text-cyan-400 flex items-center gap-2">
            <FileCheck2 className="w-4 h-4" /> Functional Requirements
          </h2>
          <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
            {project.functionalRequirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ol>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wide text-indigo-400 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Suggested Architecture
          </h2>
          <pre className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed">
            {project.suggestedArchitecture}
          </pre>
        </div>
      </div>

      {/* Step-by-Step Milestones (Interactive) */}
      <section className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Step-by-Step Implementation Milestones
          </h2>
          <span className="text-xs text-slate-400">Click to record milestone progress</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.milestones.map((milestone) => {
            const isDone = completedMilestones.includes(milestone.id);

            return (
              <div
                key={milestone.id}
                onClick={() => toggleMilestone(project.id, milestone.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isDone
                    ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-200"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xs font-bold text-white">{milestone.title}</h3>
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => {}} // handled by parent div
                    className="mt-0.5 rounded border-slate-700 text-indigo-600 focus:ring-0 pointer-events-none"
                  />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">{milestone.description}</p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                  <strong className="text-cyan-400">Deliverable: </strong>
                  {milestone.deliverable}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rubric and Evaluation Table */}
      <section className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              Project Evaluation Rubric & Scoring Criteria
            </h2>
            <p className="text-xs text-slate-400">
              Evaluated by instructor Jane Rose, Asst. Prof, CSE according to institutional standards
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300">
                <th className="p-3 font-semibold">Evaluation Criteria</th>
                <th className="p-3 font-semibold">Weight</th>
                <th className="p-3 font-semibold text-emerald-400">Exemplary</th>
                <th className="p-3 font-semibold text-cyan-400">Proficient</th>
                <th className="p-3 font-semibold text-amber-400">Developing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {project.rubric.map((r, i) => (
                <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3 font-bold text-white align-top min-w-[160px]">
                    {r.criteria}
                    <p className="text-[11px] font-normal text-slate-400 mt-1">{r.description}</p>
                  </td>
                  <td className="p-3 font-mono font-bold text-indigo-400 align-top">
                    {r.weightPercentage}%
                  </td>
                  <td className="p-3 text-[11px] text-slate-300 align-top max-w-[200px]">
                    {r.exemplary}
                  </td>
                  <td className="p-3 text-[11px] text-slate-400 align-top max-w-[200px]">
                    {r.proficient}
                  </td>
                  <td className="p-3 text-[11px] text-slate-500 align-top max-w-[200px]">
                    {r.developing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Extension Challenges for Advanced Students */}
      <section className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-3 bg-gradient-to-br from-slate-950 to-amber-950/10">
        <div className="flex items-center gap-2 text-amber-400">
          <Flame className="w-4 h-4" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wide">
            Extension Challenges for Advanced Students
          </h2>
        </div>
        <ul className="space-y-2 text-xs text-slate-300">
          {project.extensionChallenges.map((ec, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="font-bold text-amber-400">+{i + 1}.</span>
              <span>{ec}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
