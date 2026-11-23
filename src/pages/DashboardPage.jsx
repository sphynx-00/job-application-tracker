import { Briefcase, Calendar, CalendarPlus, ChartColumn, CircleCheck, CircleX, FileText } from "lucide-react";
import PageHeader from "../components/layout/PageHeader";
import SectionCard from "../components/layout/SectionCard";
import ApplicationItem from "../features/applications/ApplicationItem";
import InterviewItem from "../features/interviews/InterviewItem";
import StatCard from "../features/stats/StatCard";
import { computeStats } from "../features/stats/computeStats";
import {
  formatInterviewTime,
  formatRelative,
  formatSalary,
} from "../lib/format";

// This page only arranges pieces. The numbers come from the lists it receives.
export default function DashboardPage({ applications, interviews }) {
  const now = new Date();
  const stats = computeStats(applications, interviews, now);

  const upcoming = interviews
    .filter((i) => i.at > now)
    .sort((a, b) => a.at - b.at);
  const recent = [...applications]
    .sort((a, b) => b.appliedAt - a.appliedAt)
    .slice(0, 5);

  const sign = stats.weeklyChange >= 0 ? "+" : "";

  return (
    <>
      <PageHeader
        title="Welcome back, Job Seeker! 👋"
        subtitle="Here's your job search overview"
      />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:gap-8 lg:px-6 lg:py-12">
        {/* BAND 3: 2 columns on phones, 4 from 1024px */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          <StatCard
            label="Applications"
            value={stats.applications}
            icon={FileText}
            tone="blue"
            footnote={`${sign}${stats.weeklyChange}% this week`}
            positive={stats.weeklyChange > 0}
          />
          <StatCard
            label="Interviews"
            value={stats.interviews}
            icon={Calendar}
            tone="blue"
            footnote={`${stats.upcoming} upcoming`}
          />
          <StatCard
            label="Offers"
            value={stats.offers}
            icon={CircleCheck}
            tone="green"
          />
          <StatCard
            label="Response Rate"
            value={`${stats.responseRate}%`}
            icon={ChartColumn}
            tone="purple"
            footnote={`${stats.responseRate}% of ${stats.applications} applications`}
          />
          <StatCard
            label="Rejected"
            value={stats.rejected}
            icon={CircleX}
            tone="red"
          />
        </div>

        {/* BAND 4: stacked on phones, side by side from 1024px */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <SectionCard
            icon={Calendar}
            tone="blue"
            title="Upcoming Interviews"
            viewAllHref="#interviews"
          >
            {upcoming.length > 0 ? (
              upcoming.map((interview) => (
                <InterviewItem
                  key={interview.id}
                  title={interview.title}
                  company={interview.company}
                  time={formatInterviewTime(interview.at)}
                  mode={interview.mode}
                />
              ))
            ) : (
              <div className="grid place-items-center gap-3 py-10 text-center text-gray-600">
                <CalendarPlus
                  className="size-8 text-gray-400"
                  aria-hidden="true"
                />
                <p>No interviews scheduled yet.</p>
              </div>
            )}
          </SectionCard>

          <SectionCard
            icon={Briefcase}
            tone="green"
            title="Recent Applications"
            viewAllHref="#applications"
          >
            {recent.map((application) => (
              <ApplicationItem
                key={application.id}
                title={application.title}
                company={application.company}
                appliedAgo={formatRelative(application.appliedAt, now)}
                salary={formatSalary(
                  application.salaryMin,
                  application.salaryMax,
                )}
              />
            ))}
          </SectionCard>
        </div>
      </main>
    </>
  );
}
