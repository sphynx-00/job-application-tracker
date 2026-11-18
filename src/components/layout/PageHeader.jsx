export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-8">
        <h1 className="text-2xl font-semibold lg:text-4xl">{title}</h1>
        <p className="mt-2 text-lg text-gray-600 lg:text-xl">{subtitle}</p>
      </div>
    </div>
  );
}