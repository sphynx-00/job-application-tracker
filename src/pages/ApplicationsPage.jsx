import { useState } from "react";
import { Briefcase, SearchX } from "lucide-react";
import PageHeader from "../components/layout/PageHeader";
import SectionCard from "../components/layout/SectionCard";
import ApplicationItem from "../features/applications/ApplicationItem";
import ApplicationsToolbar from "../features/applications/ApplicationsToolbar";
import { formatRelative, formatSalary } from "../lib/format";
import { statusOrder } from "../lib/status";

// Highest salary first. Jobs with no salary go last.
const topSalary = (a) => a.salaryMax ?? a.salaryMin ?? 0;

const sorters = {
  newest: (a, b) => b.appliedAt - a.appliedAt,
  oldest: (a, b) => a.appliedAt - b.appliedAt,
  salary: (a, b) => topSalary(b) - topSalary(a),
  company: (a, b) => a.company.localeCompare(b.company),
};

export default function ApplicationsPage({ applications }) {
  const now = new Date();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("newest");

  // Counts always come from the full list, so the chips don't change while you filter.
  const counts = { all: applications.length };
  statusOrder.forEach((key) => {
    counts[key] = applications.filter((a) => a.status === key).length;
  });

  // The visible list is worked out from state every time. It is never stored.
  const search = query.trim().toLowerCase();
  const visible = applications
    .filter((a) => status === "all" || a.status === status)
    .filter((a) => !search || `${a.title} ${a.company}`.toLowerCase().includes(search))
    .sort(sorters[sort]);

  const inProgress = counts.applied + counts.interview;

  return (
    <>
      <PageHeader title="My Applications" subtitle={`${counts.all} applications · ${inProgress} in progress`} />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:gap-8 lg:px-6 lg:py-12">
        <ApplicationsToolbar
          query={query}
          onQuery={setQuery}
          status={status}
          onStatus={setStatus}
          sort={sort}
          onSort={setSort}
          counts={counts}
        />

        <SectionCard icon={Briefcase} tone="green" title={`Applications (${visible.length})`}>
          {visible.length > 0 ? (
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
              {visible.map((application) => (
                <ApplicationItem
                  key={application.id}
                  title={application.title}
                  company={application.company}
                  appliedAgo={formatRelative(application.appliedAt, now)}
                  salary={formatSalary(application.salaryMin, application.salaryMax)}
                  status={application.status}
                />
              ))}
            </div>
          ) : (
            <div className="grid place-items-center gap-3 py-10 text-center text-gray-600 dark:text-gray-400">
              <SearchX className="size-8 text-gray-400 dark:text-gray-500" aria-hidden="true" />
              <p>{counts.all === 0 ? "No applications yet. Press Add Job to start." : "No applications match your search."}</p>
            </div>
          )}
        </SectionCard>
      </main>
    </>
  );
}