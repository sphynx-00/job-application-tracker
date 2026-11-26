import { Search } from "lucide-react";
import { statuses, statusOrder } from "../../lib/status";

const fieldClass =
  "rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:[color-scheme:dark]";

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "salary", label: "Highest salary" },
  { value: "company", label: "Company A–Z" },
];

export default function ApplicationsToolbar({ query, onQuery, status, onStatus, sort, onSort, counts }) {
  const chips = [
    { value: "all", label: "All", count: counts.all },
    ...statusOrder.map((key) => ({ value: key, label: statuses[key].label, count: counts[key] })),
  ];

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
      <label className="relative lg:w-80">
        <span className="sr-only">Search applications</span>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search title or company"
          className={`${fieldClass} w-full pl-10 placeholder:text-gray-400 dark:placeholder:text-gray-500`}
        />
      </label>

      <div className="flex gap-2 overflow-x-auto p-1 -m-1 lg:flex-1" role="group" aria-label="Filter by status">
        {chips.map(({ value, label, count }) => {
          const active = status === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onStatus(value)}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:text-base ${
                active
                  ? "border-blue-600/40 bg-blue-50 text-blue-600 dark:border-blue-400/40 dark:bg-blue-500/15 dark:text-blue-400"
                  : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              {label}
              <span className={active ? "text-blue-600/70 dark:text-blue-400/70" : "text-gray-400 dark:text-gray-500"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        Sort
        <select value={sort} onChange={(event) => onSort(event.target.value)} className={`${fieldClass} flex-1 lg:flex-none`}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}