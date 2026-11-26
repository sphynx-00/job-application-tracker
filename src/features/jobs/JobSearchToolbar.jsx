import { MapPin, Search } from "lucide-react";
import Chip from "../../components/ui/Chip";
import { fieldClass } from "../../lib/styles";

const typeOptions = [
  { value: "all", label: "All types" },
  { value: "full-time", label: "Full-time" },
  { value: "contract", label: "Contract" },
  { value: "part-time", label: "Part-time" },
];

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "salary", label: "Highest salary" },
];

// Keyword and location boxes, filter chips and sort dropdown. The page owns the state.
export default function JobSearchToolbar({ filters, onChange, savedCount }) {
  const set = (field) => (value) => onChange({ ...filters, [field]: value });

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
        <label className="relative">
          <span className="sr-only">Job title or keyword</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" aria-hidden="true" />
          <input
            type="search"
            value={filters.keyword}
            onChange={(event) => set("keyword")(event.target.value)}
            placeholder="Job title, company or keyword"
            className={`${fieldClass} w-full pl-10 placeholder:text-gray-400 dark:placeholder:text-gray-500`}
          />
        </label>

        <label className="relative">
          <span className="sr-only">Location</span>
          <MapPin className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" aria-hidden="true" />
          <input
            type="search"
            value={filters.location}
            onChange={(event) => set("location")(event.target.value)}
            placeholder="City, like London"
            className={`${fieldClass} w-full pl-10 placeholder:text-gray-400 dark:placeholder:text-gray-500`}
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
        <div className="flex gap-2 overflow-x-auto p-1 -m-1 lg:flex-1" role="group" aria-label="Filter jobs">
          {typeOptions.map(({ value, label }) => (
            <Chip key={value} active={filters.type === value} onClick={() => set("type")(value)}>
              {label}
            </Chip>
          ))}
          <Chip active={filters.remoteOnly} onClick={() => set("remoteOnly")(!filters.remoteOnly)}>
            Remote
          </Chip>
          <Chip active={filters.savedOnly} count={savedCount} onClick={() => set("savedOnly")(!filters.savedOnly)}>
            Saved
          </Chip>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          Sort
          <select
            value={filters.sort}
            onChange={(event) => set("sort")(event.target.value)}
            className={`${fieldClass} flex-1 lg:flex-none`}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}