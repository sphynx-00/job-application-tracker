import IconTile from "../../components/ui/IconTile";

// One number card: label, big value, icon tile, optional footnote.
export default function StatCard({ label, value, icon, tone, footnote, positive = false }) {
  return (
    <div className="flex min-h-32 flex-col justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-900 dark:shadow-none dark:ring-1 dark:ring-gray-800 lg:min-h-40 lg:p-6">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="mt-1 text-3xl font-semibold tabular-nums lg:mt-2 lg:text-4xl">{value}</p>
        </div>
        <IconTile icon={icon} tone={tone} size="lg" />
      </div>

      {footnote && (
        <p
          className={`text-sm lg:text-base ${
            positive ? "text-green-700 dark:text-green-400" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {footnote}
        </p>
      )}
    </div>
  );
}