"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from "recharts";
import { useProgress } from "@/context/ProgressContext";
import { PieChart as PieIcon, BarChart3 } from "lucide-react";

export function ProgressChart() {
  const { metrics, isHydrated } = useProgress();

  // Weekly progress comparison data
  const weeklyData = useMemo(() => {
    return metrics.weeklyProgress.map((wp) => ({
      name: wp.week === 5 ? "Showcase" : `Wk ${wp.week}`,
      fullTitle: wp.title,
      completed: isHydrated ? wp.completedHours : 0,
      remaining: isHydrated ? Math.max(0, wp.totalHours - wp.completedHours) : wp.totalHours,
      totalHours: wp.totalHours,
      percentage: isHydrated ? wp.percentage : 0
    }));
  }, [metrics, isHydrated]);

  // Status breakdown data
  const statusData = useMemo(() => {
    const completed = isHydrated ? metrics.completedDaysCount : 0;
    const remaining = isHydrated ? metrics.remainingDaysCount : 30;

    return [
      { name: "Completed Lessons", value: completed, color: "#10b981" },
      { name: "Remaining Lessons", value: remaining, color: "#334155" }
    ];
  }, [metrics, isHydrated]);

  const WEEK_COLORS = ["#6366f1", "#8b5cf6", "#06b6d4", "#ec4899", "#10b981"];

  return (
    <section aria-labelledby="chart-heading" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Weekly Progress Comparison (2 Columns) */}
      <div className="lg:col-span-2 glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 id="chart-heading" className="text-sm font-bold text-white tracking-tight">
                  Weekly Instructional Hours Distribution
                </h3>
                <p className="text-xs text-slate-400">
                  Target: 13h/week (Weeks 1–4) + 4h (Showcase) = 56 Hours Total
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              56 Hours Total
            </span>
          </div>

          <div className="h-64 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barGap={6}
              >
                <XAxis
                  dataKey="name"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#334155" }}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={12}
                  domain={[0, 14]}
                  tickLine={false}
                  axisLine={{ stroke: "#334155" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-xl text-xs space-y-1 z-50">
                          <p className="font-bold text-white">{data.fullTitle}</p>
                          <p className="text-indigo-400">
                            Completed: <span className="font-semibold">{data.completed} hrs</span> ({data.percentage}%)
                          </p>
                          <p className="text-slate-400">Total Scheduled: {data.totalHours} hrs</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="completed" name="Completed Hours" radius={[6, 6, 0, 0]}>
                  {weeklyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={WEEK_COLORS[index % WEEK_COLORS.length]} />
                  ))}
                </Bar>
                <Bar
                  dataKey="remaining"
                  name="Remaining Hours"
                  fill="#1e293b"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-indigo-500 inline-block" />
              <span>Completed Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-slate-800 inline-block" />
              <span>Scheduled Remaining</span>
            </div>
          </div>
          <span className="text-[11px] text-slate-500">Live synchronized</span>
        </div>
      </div>

      {/* Completion Donut Chart (1 Column) */}
      <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <PieIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Lesson Completion Status</h3>
              <p className="text-xs text-slate-400">Ratio of 30 structured days</p>
            </div>
          </div>

          <div className="h-52 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`pie-cell-${index}`} fill={entry.color} stroke="#0b0f19" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0];
                      return (
                        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg shadow-xl text-xs">
                          <span className="font-semibold text-white">{data.name}: </span>
                          <span className="text-cyan-400">{data.value} lessons</span>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center percentage text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-extrabold text-white">
                {isHydrated ? metrics.overallPercentage : 0}%
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400">Complete</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Completed Days:
            </span>
            <span className="font-bold text-white">
              {isHydrated ? metrics.completedDaysCount : 0} / 30
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              Remaining Days:
            </span>
            <span className="font-bold text-slate-300">
              {isHydrated ? metrics.remainingDaysCount : 30} / 30
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
