import IconTile from '../../components/ui/IconTile';

export default function StatCard({ label, value, icon, tone, footnote, positive = false }) {
  return (
    <div className="flex min-h-32 flex-col justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm lg:min-h-40 lg:p-6">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="mt-1 text-3xl font-semibold tabular-nums lg:mt-2 lg:text-4xl">{value}</p>
        </div>
        <IconTile icon={icon} tone={tone} size="lg" />
      </div>

      {footnote && (
        <p className={`text-sm lg:text-base ${positive ? "text-green-600" : "text-gray-600"}`}>
          {footnote}
        </p>
      )}
    </div>
  );
}