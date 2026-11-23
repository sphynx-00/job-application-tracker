const tones = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  red: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
};

export default function Badge({ children, tone = "blue" }) {
  return (
    <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium lg:px-3 lg:py-1 lg:text-sm ${tones[tone]}`}>
      {children}
    </span>
  );
}