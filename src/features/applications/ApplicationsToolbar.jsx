import { Search } from "lucide-react";
import Chip from "../../components/ui/Chip";
import { fieldClass } from "../../lib/styles";
import { statuses, statusOrder } from "../../lib/status";

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
        <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search title or company"
          className={`${fieldClass} w-full pl-10 placeholder:text-gray-400 dark:placeholder:text-gray-500`}
        />
      </label>

      <div className="flex gap-2 overflow-x-auto p-1 -m-1 lg:flex-1" role="group" aria-label="Filter by status">
        {chips.map(({ value, label, count }) => (
          <Chip key={value} active={status === value} count={count} onClick={() => onStatus(value)}>
            {label}
          </Chip>
        ))}
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