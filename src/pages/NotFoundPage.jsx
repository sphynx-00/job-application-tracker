import { Link } from "react-router";
import PageHeader from "../components/layout/PageHeader";

export default function NotFoundPage() {
  return (
    <>
      <PageHeader title="Page not found" subtitle="That address doesn't exist." />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-12">
        <Link to="/" className="text-blue-600 hover:underline dark:text-blue-400">
          Back to the dashboard
        </Link>
      </main>
    </>
  );
}