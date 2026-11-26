export default function Chip({ active = false, count, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:text-base ${
        active
          ? "border-blue-600/40 bg-blue-50 text-blue-600 dark:border-blue-400/40 dark:bg-blue-500/15 dark:text-blue-400"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
      }`}
    >
      {children}
      {count != null && (
        <span className={active ? "text-blue-600/70 dark:text-blue-400/70" : "text-gray-400 dark:text-gray-500"}>
          {count}
        </span>
      )}
    </button>
  );
}