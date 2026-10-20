"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPin,
  BookOpen,
  FolderKanban,
  FileCheck2,
  TrendingUp,
  Award,
  Library,
  Info,
  UserCheck,
  Glasses,
  Clock,
  Sparkles
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

export const navigationItems: NavItem[] = [
  { title: "Overview Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Course Roadmap", href: "/roadmap", icon: MapPin },
  { title: "Daily Lessons", href: "/lessons", icon: BookOpen, badge: "30 Days" },
  { title: "Weekly Projects", href: "/projects", icon: FolderKanban, badge: "4 Main" },
  { title: "Assignments & Labs", href: "/assignments", icon: FileCheck2 },
  { title: "Progress Tracker", href: "/progress", icon: TrendingUp },
  { title: "Assessment Dashboard", href: "/assessments", icon: Award },
  { title: "Learning Resources", href: "/resources", icon: Library },
  { title: "Course Information", href: "/course-info", icon: Info },
  { title: "Instructor Information", href: "/instructor", icon: UserCheck }
];

interface SidebarProps {
  onItemClick?: () => void;
  className?: string;
}

export function Sidebar({ onItemClick, className }: SidebarProps) {
  const pathname = usePathname();
  const { metrics, isHydrated } = useProgress();

  return (
    <aside
      className={cn(
        "flex flex-col w-72 h-screen fixed top-0 left-0 z-40 bg-slate-950/90 backdrop-blur-xl border-r border-slate-800/80 text-slate-200 select-none",
        className
      )}
    >
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={onItemClick}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            <Glasses className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Spatial XR
            </span>
            <h1 className="text-base font-bold text-white tracking-tight leading-tight">
              AR/VR Bootcamp
            </h1>
          </div>
        </Link>
      </div>

      {/* Progress Mini Card in Sidebar */}
      <div className="px-5 py-4 border-b border-slate-800/60 bg-slate-900/40">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            <Clock className="w-3.5 h-3.5 text-indigo-400" /> Course Progress
          </span>
          <span className="font-semibold text-indigo-300">
            {isHydrated ? `${metrics.overallPercentage}%` : "0%"}
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${isHydrated ? metrics.overallPercentage : 0}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
          <span>{isHydrated ? metrics.completedDaysCount : 0}/30 Days</span>
          <span>{isHydrated ? metrics.completedHours : 0}/56 Hours</span>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                isActive
                  ? "bg-gradient-to-r from-indigo-600/30 to-violet-600/20 text-white border border-indigo-500/40 shadow-sm shadow-indigo-500/10"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-200"
                  )}
                />
                <span className="truncate">{item.title}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    "text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                    isActive
                      ? "bg-indigo-500/20 text-indigo-300 border-indigo-400/30"
                      : "bg-slate-800 text-slate-400 border-slate-700"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Instructor Attribution Badge */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/95 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-950 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-300 text-xs">
            JR
          </div>
          <div className="overflow-hidden">
            <p className="text-slate-200 font-semibold truncate leading-tight">Jane Rose</p>
            <p className="text-[11px] text-cyan-400/90 truncate">Asst. Prof, CSE</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
