// Tailwind finds class names by reading this file as plain text,
// so always write the full class name ("bg-blue-100"), never build it from pieces.
const tints = {
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  green: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
  purple: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  red: "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400",
};

const solids = {
  blue: "bg-blue-600 text-white",
  green: "bg-green-600 text-white",
  purple: "bg-purple-600 text-white",
  red: "bg-red-600 text-white",
};

const sizes = {
  md: "size-10 rounded-xl",
  lg: "size-10 rounded-xl lg:size-12", // 40px on phones, 48px from 1024px
};

// A rounded square holding an icon. Used in stat cards, card headers and list rows.
export default function IconTile({ icon: Icon, tone = "blue", variant = "tint", size = "md" }) {
  const colors = variant === "solid" ? solids[tone] : tints[tone];

  return (
    <div className={`grid shrink-0 place-items-center ${sizes[size]} ${colors}`}>
      <Icon className="size-5" aria-hidden="true" />
    </div>
  );
}