import React from "react";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { ValidationBanner } from "@/components/dashboard/ValidationBanner";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { ContinueLearningCard } from "@/components/dashboard/ContinueLearningCard";
import { WeeklyProjectsGrid } from "@/components/dashboard/WeeklyProjectsGrid";
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function OverviewDashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* 1. Welcome Panel & Course Header */}
      <WelcomeBanner />

      {/* 2. Programmatic Curriculum Validation Badge */}
      <ValidationBanner />

      {/* 3. Interactive Metrics Cards */}
      <StatsOverview />

      {/* 4. Visual Progress & Hours Charts */}
      <ProgressChart />

      {/* 5. Next Incomplete Lesson (Continue Learning) */}
      <ContinueLearningCard />

      {/* 6. Four Weekly Major Capstone Cards */}
      <WeeklyProjectsGrid />

      {/* 7. Bottom Two-Column: Upcoming Tasks & Quick Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingTasks />
        <QuickActions />
      </section>
    </div>
  );
}
