// The white band under the nav: big title plus a grey subtitle.
export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-white shadow-sm dark:bg-gray-900 dark:shadow-none dark:border-b dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-8">
        <h1 className="text-2xl font-semibold lg:text-4xl">{title}</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 lg:text-xl">{subtitle}</p>
      </div>
    </div>
  );
}