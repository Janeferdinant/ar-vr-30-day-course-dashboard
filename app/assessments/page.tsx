"use client";

import React, { useMemo } from "react";
import {
  Award,
  Printer,
  Info,
  TrendingUp
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { useProgress } from "@/context/ProgressContext";
import { assessmentCategories, calculateAssessmentReport } from "@/lib/assessment";

export default function AssessmentDashboardPage() {
  const { progress, updateScore } = useProgress();

  const report = useMemo(() => {
    return calculateAssessmentReport(progress.assessmentScores);
  }, [progress.assessmentScores]);

  // Chart data
  const chartData = useMemo(() => {
    return report.items.map((item) => ({
      name: item.id.replace("Project", "").replace("finalViva", "Viva"),
      title: item.title,
      score: item.score ?? 0,
      weighted: item.weightedScore,
      maxWeight: item.weight * 100,
      status: item.status
    }));
  }, [report]);

  const handleScoreChange = (
    key: keyof typeof progress.assessmentScores,
    valStr: string
  ) => {
    if (valStr.trim() === "") {
      updateScore(key, undefined);
    } else {
      const num = parseFloat(valStr);
      if (!isNaN(num)) {
        updateScore(key, Math.min(100, Math.max(0, num)));
      }
    }
  };

  const handleResetScores = () => {
    assessmentCategories.forEach((cat) => {
      updateScore(cat.id, undefined);
    });
  };

  const handlePrefillSample = () => {
    updateScore("miniProjects", 95);
    updateScore("week1Project", 92);
    updateScore("week2Project", 88);
    updateScore("week3Project", 94);
    updateScore("week4Project", 90);
    updateScore("finalViva", 96);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Evaluation & Academic Grading
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                100% Weighted Total
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Assessment Dashboard & Rubric Evaluation
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Automated weighted grade computation evaluated by <strong>Jane Rose, Asst. Prof, CSE</strong>.
              Enter earned scores (0–100) to view dynamic GPA calculations, letter grades, and rubric feedback.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handlePrefillSample}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Fill Sample Exemplar Marks
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Grade Report</span>
            </button>
          </div>
        </div>

        {/* Missing-score handling explanation banner */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-white">Institutional Grading & Missing Score Policy: </strong>
            <p className="leading-relaxed">
              In accordance with academic standards, ungraded assessments are explicitly marked as{" "}
              <span className="text-amber-400 font-semibold">&quot;Ungraded / Pending&quot;</span> and are{" "}
              <strong>not penalized as zero (0.0)</strong> in the Current Average calculation. Assessments
              receiving an actual score of zero marks will reflect as <span className="text-rose-400 font-semibold">0%</span>.
              The Projected Final Grade reflects total weighted points accumulated toward the 100% course total.
            </p>
          </div>
        </div>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Current Weighted Average</span>
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">
              {report.totalAttemptedWeight > 0 ? `${report.currentWeightedAverage}%` : "Pending"}
            </p>
            <span className="text-[11px] text-slate-500">Based on graded modules</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Projected Course Grade</span>
            <p className="text-2xl sm:text-3xl font-black text-white">
              {report.projectedFinalGrade}% <span className="text-sm font-normal text-slate-400">/ 100%</span>
            </p>
            <span className="text-[11px] text-slate-500">Accumulated weighted points</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Calculated Letter Grade</span>
            <p className="text-2xl sm:text-3xl font-black text-indigo-300">
              {report.letterGrade}
            </p>
            <span className="text-[11px] text-slate-500">Scale: A (93+) to Passing C (70+)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">GPA Equivalent</span>
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">
              {report.gpa.toFixed(1)} <span className="text-sm font-normal text-slate-400">/ 4.0</span>
            </p>
            <span className="text-[11px] text-slate-500">Standard 4.0 Academic Scale</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Grade Input Table (2 cols) & Chart (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Table */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                Curriculum Assessment Categories & Score Inputs
              </h2>
              <p className="text-xs text-slate-400">Enter raw percentage marks (0 to 100)</p>
            </div>
            <button
              type="button"
              onClick={handleResetScores}
              className="text-xs text-slate-500 hover:text-rose-400 transition-colors"
            >
              Clear Scores
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300">
                  <th className="p-3 font-bold">Assessment Component</th>
                  <th className="p-3 font-bold w-20">Weight</th>
                  <th className="p-3 font-bold w-32">Raw Score (0–100)</th>
                  <th className="p-3 font-bold w-24">Weighted Pts</th>
                  <th className="p-3 font-bold text-right w-24">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {report.items.map((item) => {
                  const rawScoreVal = progress.assessmentScores[item.id as keyof typeof progress.assessmentScores];
                  const displayInputVal = rawScoreVal !== undefined ? rawScoreVal.toString() : "";

                  return (
                    <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3">
                        <span className="font-bold text-white block text-sm">{item.title}</span>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">
                          {assessmentCategories.find((c) => c.id === item.id)?.description}
                        </span>
                      </td>

                      <td className="p-3 font-mono font-bold text-indigo-400 text-sm">
                        {item.percentageLabel}
                      </td>

                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="1"
                            value={displayInputVal}
                            onChange={(e) =>
                              handleScoreChange(item.id as keyof typeof progress.assessmentScores, e.target.value)
                            }
                            placeholder="Pending"
                            className="w-20 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
                          />
                          <span className="text-slate-500">/ 100</span>
                        </div>
                      </td>

                      <td className="p-3 font-mono font-bold text-cyan-400 text-sm">
                        {item.status === "graded" ? `${item.weightedScore} pts` : "—"}
                      </td>

                      <td className="p-3 text-right">
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                            item.status === "graded"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              : "bg-slate-900 text-slate-500 border-slate-800"
                          }`}
                        >
                          {item.status === "graded" ? "Graded" : "Ungraded"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">Weighted Points Contribution</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Points earned toward the 100-point course total
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} domain={[0, 20]} tickLine={false} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-slate-900 border border-slate-700 p-2.5 rounded-lg shadow-xl text-xs space-y-1">
                            <p className="font-bold text-white">{d.title}</p>
                            <p className="text-cyan-400">
                              Earned: <span className="font-semibold">{d.weighted} pts</span>
                            </p>
                            <p className="text-slate-400">Max Component: {d.maxWeight} pts</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="weighted" fill="#6366f1" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.status === "graded" ? "#10b981" : "#334155"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Evaluation Status:</span>
              <span className="font-bold text-white">{report.statusSummary}</span>
            </div>
            <div className="flex justify-between">
              <span>Instructor:</span>
              <span className="font-bold text-cyan-400">Jane Rose, Asst. Prof, CSE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
