export default function Avatar({ initials, label }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full bg-green-600 text-sm font-medium text-white"
    >
      {initials}
    </div>
  );
}