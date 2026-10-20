"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  BookOpen,
  Code2,
  Sparkles,
  Target,
  FlaskConical,
  HelpCircle,
  Copy,
  Check,
  ExternalLink,
  Save
} from "lucide-react";
import { Lesson } from "@/types/course";
import { getAdjacentLessons, allLessons } from "@/data/course";
import { useProgress } from "@/context/ProgressContext";
import { formatDuration } from "@/lib/utils";

export function LessonView({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const { progress, toggleDay, updateDayAssignment, isHydrated } = useProgress();

  const [copiedCodeTitle, setCopiedCodeTitle] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [saveConfirmation, setSaveConfirmation] = useState(false);

  useEffect(() => {
    if (lesson && isHydrated) {
      const dayKey = `day-${lesson.day}`;
      const existing = progress.assignments[dayKey];
      if (existing) {
        setNotes(existing.notes || "");
        setRepoUrl(existing.repoUrl || "");
      }
    }
  }, [lesson, isHydrated, progress.assignments]);

  const { prev, next } = getAdjacentLessons(lesson.day);
  const isCompleted = isHydrated && progress.completedDays.includes(lesson.day);
  const dayKey = `day-${lesson.day}`;
  const assignmentData = progress.assignments[dayKey];
  const completedChecklist = assignmentData?.completedChecklist || [];

  const handleCopyCode = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeTitle(title);
    setTimeout(() => setCopiedCodeTitle(null), 2500);
  };

  const handleToggleChecklistItem = (item: string) => {
    const exists = completedChecklist.includes(item);
    const updatedList = exists
      ? completedChecklist.filter((c) => c !== item)
      : [...completedChecklist, item];

    updateDayAssignment(lesson.day, {
      completedChecklist: updatedList
    });
  };

  const handleSaveNotes = () => {
    updateDayAssignment(lesson.day, {
      notes,
      repoUrl
    });
    setSaveConfirmation(true);
    setTimeout(() => setSaveConfirmation(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Top Navigation Bar: Back link, Day Selector, Prev/Next */}
      <div className="glass-panel p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <Link
          href="/lessons"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All 30 Lessons</span>
        </Link>

        {/* Day Jumper Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium hidden sm:inline">Jump to Day:</span>
          <select
            value={lesson.id}
            onChange={(e) => router.push(`/lessons/${e.target.value}`)}
            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
          >
            {allLessons.map((l) => (
              <option key={l.id} value={l.id}>
                Day {l.day}: {l.title.slice(0, 32)}...
              </option>
            ))}
          </select>
        </div>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-2">
          {prev ? (
            <Link
              href={`/lessons/${prev.id}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Day {prev.day}</span>
            </Link>
          ) : (
            <span className="text-slate-600 px-2.5 py-1">Start of Course</span>
          )}

          {next ? (
            <Link
              href={`/lessons/${next.id}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <span>Day {next.day}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="text-slate-600 px-2.5 py-1">Final Day</span>
          )}
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Day {lesson.day} • Week {lesson.week}
              </span>
              <span className="text-slate-400 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {formatDuration(lesson.duration)} instructional module
              </span>
              <span className="text-slate-400 text-xs">Jane Rose, Asst. Prof, CSE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lesson.title}
            </h1>
          </div>

          {/* Mark Complete CTA */}
          <button
            type="button"
            onClick={() => toggleDay(lesson.day)}
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs shadow-lg transition-all ${
              isCompleted
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 shadow-emerald-500/10"
                : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-indigo-600/20 hover:scale-[1.02]"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isCompleted ? "Lesson Completed (Click to Reopen)" : "Mark Lesson Complete"}</span>
          </button>
        </div>

        {/* Topics badges */}
        <div className="pt-2 flex flex-wrap gap-2">
          {lesson.topics.map((topic, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Objectives & Prerequisites */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400">
            <Target className="w-4 h-4" />
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">Learning Objectives</h2>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {lesson.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-violet-400">
            <BookOpen className="w-4 h-4" />
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">Prerequisites</h2>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {lesson.prerequisites.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-1.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Teaching Content & Theory Sections */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h2 className="text-base font-bold text-white tracking-tight">
            Detailed Teaching Content & Theoretical Foundations
          </h2>
        </div>

        {lesson.teachingContent.map((section, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-white text-indigo-300">
              {section.sectionTitle}
            </h3>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-2">
              {section.content}
            </div>

            {/* Code Snippet Card if present */}
            {section.codeSnippet && (
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden shadow-xl">
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-semibold text-slate-200">{section.codeSnippet.title}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      {section.codeSnippet.language}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(section.codeSnippet!.code, section.codeSnippet!.title)}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedCodeTitle === section.codeSnippet.title ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-xs font-mono text-cyan-100/90 leading-relaxed">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Instructor Demonstration & Hands-On Lab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instructor Demonstration Notes */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <FlaskConical className="w-4 h-4" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">
              Instructor Demonstration
            </h3>
          </div>
          <h4 className="text-xs font-bold text-indigo-300">
            {lesson.instructorDemonstration.title}
          </h4>
          <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
            {lesson.instructorDemonstration.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 mt-2">
            <strong>Instructor Pro-Tip: </strong>
            {lesson.instructorDemonstration.tips}
          </div>
        </div>

        {/* Hands-On Lab Instructions */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400">
              <FlaskConical className="w-4 h-4" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wide">Hands-On Lab</h3>
            </div>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {lesson.handsOnLab.durationMinutes} min
            </span>
          </div>
          <h4 className="text-xs font-bold text-cyan-300">{lesson.handsOnLab.title}</h4>
          <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
            {lesson.handsOnLab.instructions.map((ins, i) => (
              <li key={i}>{ins}</li>
            ))}
          </ol>
          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 mt-2">
            <strong>Expected Lab Output: </strong>
            {lesson.handsOnLab.expectedResult}
          </div>
        </div>
      </div>

      {/* Daily Mini-Project Workspace & Checklist */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-violet-500/30 space-y-5 bg-gradient-to-br from-slate-950 to-violet-950/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
              Daily Mini-Project & Assignment
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              {lesson.miniProject.title}
            </h2>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold self-start sm:self-auto">
            Day {lesson.day} Practical Task
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {lesson.miniProject.description}
        </p>

        {/* Expected Deliverable Box */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
          <span className="font-bold text-cyan-400">Expected Deliverable:</span>
          <p className="text-slate-200">{lesson.miniProject.deliverable}</p>
        </div>

        {/* Interactive Verification Checklist */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold text-slate-200 block">
            Submission Verification Checklist (Interactive):
          </span>
          <div className="space-y-2">
            {lesson.miniProject.checklist.map((item, idx) => {
              const isChecked = completedChecklist.includes(item);
              return (
                <label
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                    isChecked
                      ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-200"
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggleChecklistItem(item)}
                    className="mt-0.5 rounded border-slate-700 text-indigo-600 focus:ring-0"
                  />
                  <span className="leading-relaxed">{item}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Student Submission Record: Repo link & Personal Notes */}
        <div className="space-y-3 pt-3 border-t border-slate-800">
          <span className="text-xs font-bold text-slate-200 block">
            Student Submission Notes & Verification Link:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">GitHub / Build / Video Link:</label>
              <input
                type="url"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/... or https://..."
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Personal Notes & Reflections:</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Document your findings, challenges, or key breakthroughs..."
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-500">
              * Stored locally in your browser storage.
            </span>
            <button
              type="button"
              onClick={handleSaveNotes}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saveConfirmation ? "Saved!" : "Save Submission Details"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reflection Questions & Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-amber-400">
            <HelpCircle className="w-4 h-4" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">
              Reflection Questions
            </h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {lesson.reflectionQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-amber-400">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400">
            <ExternalLink className="w-4 h-4" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">
              Official Reference Links
            </h3>
          </div>
          <div className="space-y-2">
            {lesson.resources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors group"
              >
                <span className="font-medium truncate">{res.title}</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Prev / Next Nav */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
        {prev ? (
          <Link
            href={`/lessons/${prev.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Previous: Day {prev.day}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/lessons/${next.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
          >
            <span>Next: Day {next.day}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white"
          >
            <span>Course Complete • View Roadmap</span>
            <CheckCircle2 className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
