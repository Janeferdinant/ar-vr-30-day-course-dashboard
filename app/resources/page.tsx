"use client";

import React, { useState } from "react";
import {
  Library,
  ExternalLink,
  Search,
  BookOpen,
  Code2,
  Layers,
  Scan,
  Glasses,
  HandMetal,
  Palette,
  Cpu,
  FolderGit2,
  Laptop
} from "lucide-react";
import { courseResources, softwarePrerequisites } from "@/data/resources";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Box":
        return BookOpen;
      case "Code2":
        return Code2;
      case "Layers":
        return Layers;
      case "Scan":
        return Scan;
      case "Glasses":
        return Glasses;
      case "HandMetal":
        return HandMetal;
      case "Palette":
        return Palette;
      case "Cpu":
        return Cpu;
      case "FolderGit2":
        return FolderGit2;
      default:
        return Library;
    }
  };

  const filteredCategories = courseResources
    .filter((cat) => selectedCat === "all" || cat.id === selectedCat)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const q = searchQuery.toLowerCase();
      const matchingItems = cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
      return {
        ...cat,
        items: matchingItems
      };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Official Curated Documentation
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Authoritative Manuals & Specifications
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Learning Resources & Tooling Documentation
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Curated technical references, official Khronos OpenXR manuals, Unity AR Foundation 6.0 docs,
              and XR Interaction Toolkit guides vetted by <strong>Jane Rose, Asst. Prof, CSE</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center md:text-right text-xs text-slate-300">
            <span className="text-cyan-400 font-bold block mb-0.5">Verified Official Links</span>
            <span>Zero Copyright Infringement • Open Standards</span>
          </div>
        </div>

        {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation, packages, APIs, or asset stores..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
            />
          </div>

          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All 9 Resource Categories</option>
            {courseResources.map((c) => (
              <option key={c.id} value={c.id}>
                {c.category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Software & Hardware Requirements Card */}
      <section className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Laptop className="w-5 h-5 text-cyan-400" />
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Software Prerequisites & Hardware Setup
            </h2>
            <p className="text-xs text-slate-400">
              Approved development environment required for the 30-day curriculum
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {softwarePrerequisites.map((soft, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white truncate">{soft.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono">
                  {soft.requiredVersion}
                </span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">{soft.purpose}</p>
              <a
                href={soft.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline pt-1"
              >
                <span>Download / Manual</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Categorized Documentation Links */}
      <div className="space-y-6">
        {filteredCategories.map((cat) => {
          const IconComponent = getCategoryIcon(cat.iconName);

          return (
            <div key={cat.id} className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">{cat.category}</h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {cat.items.length} {cat.items.length === 1 ? "Link" : "Links"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {cat.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        {item.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            {item.badge}
                          </span>
                        )}
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors ml-auto" />
                      </div>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-[10px] text-slate-500 mt-3 pt-2 border-t border-slate-800 truncate block font-mono">
                      {new URL(item.url).hostname}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
