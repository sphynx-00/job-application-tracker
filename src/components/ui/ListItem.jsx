// The shared row used by interviews and applications:
// [leading tile]  title / subtitle / meta line  [trailing element]
export default function ListItem({ leading, title, subtitle, meta, trailing }) {
  return (
    <article className="flex items-start gap-3 rounded-2xl border border-gray-100 p-3 dark:border-gray-800 lg:gap-4 lg:p-4">
      {leading}
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-medium lg:text-lg">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">{subtitle}</p>
        <div className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 lg:mt-2">{meta}</div>
      </div>
      {trailing}
    </article>
  );
}