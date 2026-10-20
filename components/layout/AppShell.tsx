"use client";

import React, { useState, Suspense } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProgressProvider } from "@/context/ProgressContext";
import { X } from "lucide-react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ProgressProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Desktop Fixed Sidebar */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <Suspense fallback={<div className="w-72 h-screen bg-slate-950" />}>
            <Sidebar />
          </Suspense>
        </div>

        {/* Mobile Slide-in Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <div className="relative flex flex-col w-72 max-w-[85vw] bg-slate-950 h-full shadow-2xl z-10 border-r border-slate-800">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors z-20"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
              <Suspense fallback={<div className="w-72 h-screen bg-slate-950" />}>
                <Sidebar onItemClick={() => setMobileMenuOpen(false)} />
              </Suspense>
            </div>
          </div>
        )}

        {/* Main Application Container */}
        <div className="flex-1 flex flex-col lg:pl-72 min-w-0">
          <Suspense fallback={<div className="h-16 bg-slate-950" />}>
            <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
          </Suspense>
          <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
            <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading...</div>}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </ProgressProvider>
  );
}
