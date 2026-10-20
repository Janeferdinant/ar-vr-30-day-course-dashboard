"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  FolderKanban,
  CheckCircle2,
  TrendingUp,
  FileCode2
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";

export function StatsOverview() {
  const { metrics, isHydrated } = useProgress();

  const statCards = [
    {
      title: "Total Duration",
      value: `${metrics.totalDays} Days`,
      subtext: "5 structured course weeks",
      icon: Calendar,
      color: "from-blue-500/20 to-indigo-500/10",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      href: "/roadmap"
    },
    {
      title: "Instructional Hours",
      value: `${metrics.totalInstructionalHours}h`,
      subtext: `${isHydrated ? metrics.completedHours : 0}h completed (${isHydrated ? metrics.remainingHours : 56}h remaining)`,
      icon: Clock,
      color: "from-indigo-500/20 to-violet-500/10",
      textColor: "text-indigo-400",
      borderColor: "border-indigo-500/30",
      href: "/progress"
    },
    {
      title: "Weekly Major Projects",
      value: `${metrics.totalMajorProjects}`,
      subtext: `${isHydrated ? metrics.completedMajorProjects : 0} capstones submitted`,
      icon: FolderKanban,
      color: "from-violet-500/20 to-fuchsia-500/10",
      textColor: "text-violet-400",
      borderColor: "border-violet-500/30",
      href: "/projects"
    },
    {
      title: "Daily Mini-Projects",
      value: `${metrics.totalMiniProjects}`,
      subtext: `${isHydrated ? metrics.completedMiniProjects : 0} labs completed`,
      icon: FileCode2,
      color: "from-cyan-500/20 to-teal-500/10",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      href: "/assignments"
    },
    {
      title: "Completed Lessons",
      value: isHydrated ? `${metrics.completedDaysCount}` : "0",
      subtext: `${isHydrated ? metrics.remainingDaysCount : 30} days remaining`,
      icon: CheckCircle2,
      color: "from-emerald-500/20 to-teal-500/10",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      href: "/lessons"
    },
    {
      title: "Overall Completion",
      value: isHydrated ? `${metrics.overallPercentage}%` : "0%",
      subtext: `${isHydrated ? metrics.hoursPercentage : 0}% hours logged`,
      icon: TrendingUp,
      color: "from-amber-500/20 to-orange-500/10",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      href: "/progress"
    }
  ];

  return (
    <section aria-labelledby="stats-heading" className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 id="stats-heading" className="text-sm font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          Course Metrics & Enrollment Statistics
        </h2>
        <span className="text-xs text-slate-500">Live dynamic progress</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className={`p-4 rounded-xl glass-panel glass-card-hover border ${card.borderColor} bg-gradient-to-br ${card.color} flex flex-col justify-between group`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-300 truncate">{card.title}</span>
                <Icon className={`w-4 h-4 ${card.textColor} group-hover:scale-110 transition-transform`} />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white tracking-tight">{card.value}</p>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{card.subtext}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
