import { Bookmark, Check, MapPin } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import CompanyLogo from "../applications/CompanyLogo";
import { formatRelative, formatSalary } from "../../lib/format";

const typeLabels = { "full-time": "Full-time", contract: "Contract", "part-time": "Part-time" };

// One job listing. It shows data and reports clicks; the page decides what they do.
export default function JobCard({ job, now, saved, applied, onToggleSave, onApply }) {
  const salary = formatSalary(job.salaryMin, job.salaryMax);

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-3 dark:border-gray-800 lg:gap-4 lg:p-4">
      <div className="flex items-start gap-3 lg:gap-4">
        <CompanyLogo name={job.company} />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium lg:text-lg">{job.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">{job.company}</p>
        </div>
        <button
          type="button"
          onClick={onToggleSave}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`}
          className={`grid size-10 shrink-0 place-items-center rounded-xl hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600 dark:hover:bg-gray-800 ${
            saved ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"
          }`}
        >
          <Bookmark className={`size-5 ${saved ? "fill-current" : ""}`} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
        <Badge>{typeLabels[job.type]}</Badge>
        {job.remote && <Badge tone="green">Remote</Badge>}
        <span className="inline-flex items-center gap-1">
          <MapPin className="size-4" aria-hidden="true" />
          {job.location}
        </span>
        <span>{formatRelative(job.postedAt, now)}</span>
      </div>

      <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 lg:text-base">{job.summary}</p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-3 dark:border-gray-800">
        <span className="font-medium">
          {salary ?? <span className="text-gray-500 dark:text-gray-400">Salary not listed</span>}
        </span>
        <Button
          type="button"
          onClick={onApply}
          disabled={applied}
          className="py-2 disabled:bg-gray-200 disabled:text-gray-600 disabled:hover:bg-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-400 dark:disabled:hover:bg-gray-800"
        >
          {applied && <Check className="size-4" aria-hidden="true" />}
          {applied ? "Applied" : "Apply"}
        </Button>
      </div>
    </article>
  );
}