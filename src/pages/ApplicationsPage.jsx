import PageHeader from "../components/layout/PageHeader";

export default function ApplicationsPage({ applications }) {
  return (
    <>
      <PageHeader
        title="My Applications"
        subtitle={`${applications.length} applications`}
      />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-12">
        <p className="text-gray-600 dark:text-gray-400">The list will go here.</p>
      </main>
    </>
  );
}