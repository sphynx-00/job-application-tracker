import { useState } from "react";
import { Briefcase, SearchX } from "lucide-react";
import PageHeader from "../components/layout/PageHeader";
import SectionCard from "../components/layout/SectionCard";
import JobCard from "../features/jobs/JobCard";
import JobSearchToolbar from "../features/jobs/JobSearchToolbar";
import { sampleJobs } from "../data/sampleJobs";

const noFilters = { keyword: "", location: "", type: "all", remoteOnly: false, savedOnly: false, sort: "newest" };

// Highest salary first. Jobs with no salary go last.
const topSalary = (job) => job.salaryMax ?? job.salaryMin ?? 0;

const sorters = {
  newest: (a, b) => b.postedAt - a.postedAt,
  salary: (a, b) => topSalary(b) - topSalary(a),
};

export default function SearchPage({ applications, savedIds, onToggleSave, onApply }) {
  const now = new Date();
  const [filters, setFilters] = useState(noFilters);

  const keyword = filters.keyword.trim().toLowerCase();
  const place = filters.location.trim().toLowerCase();

  // The visible list is worked out from the filters every time. It is never stored.
  const visible = sampleJobs
    .filter((job) => !keyword || `${job.title} ${job.company} ${job.summary}`.toLowerCase().includes(keyword))
    .filter((job) => !place || job.location.toLowerCase().includes(place))
    .filter((job) => filters.type === "all" || job.type === filters.type)
    .filter((job) => !filters.remoteOnly || job.remote)
    .filter((job) => !filters.savedOnly || savedIds.includes(job.id))
    .sort(sorters[filters.sort]);

  // A job counts as applied when an application with the same title and company exists.
  const isApplied = (job) => applications.some((a) => a.title === job.title && a.company === job.company);

  return (
    <>
      <PageHeader
        title="Job Search"
        subtitle={`${visible.length} ${visible.length === 1 ? "job matches" : "jobs match"} your search`}
      />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:gap-8 lg:px-6 lg:py-12">
        <JobSearchToolbar filters={filters} onChange={setFilters} savedCount={savedIds.length} />

        <SectionCard icon={Briefcase} tone="blue" title={`Jobs (${visible.length})`}>
          {visible.length > 0 ? (
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
              {visible.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  now={now}
                  saved={savedIds.includes(job.id)}
                  applied={isApplied(job)}
                  onToggleSave={() => onToggleSave(job.id)}
                  onApply={() => onApply(job)}
                />
              ))}
            </div>
          ) : (
            <div className="grid place-items-center gap-3 py-10 text-center text-gray-600 dark:text-gray-400">
              <SearchX className="size-8 text-gray-400 dark:text-gray-500" aria-hidden="true" />
              <p>No jobs match your filters.</p>
              <button
                type="button"
                onClick={() => setFilters(noFilters)}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Clear filters
              </button>
            </div>
          )}
        </SectionCard>
      </main>
    </>
  );
}