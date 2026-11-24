import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import IconTile from "../ui/IconTile";

// A white card with a header (icon, title, "View All") and a body.
// It doesn't know what goes inside: whatever you put between the tags
// (children) is shown in the body.
export default function SectionCard({ icon, tone, title, viewAllTo, children }) {
  return (
    <section className="rounded-2xl bg-white shadow-sm dark:bg-gray-900 dark:shadow-none dark:ring-1 dark:ring-gray-800 lg:min-h-96">
      <header className="flex items-center justify-between gap-3 border-b border-gray-100 p-4 dark:border-gray-800 lg:p-6">
        <div className="flex items-center gap-3 lg:gap-4">
          <IconTile icon={icon} tone={tone} variant="solid" />
          <h2 className="text-lg font-semibold lg:text-xl">{title}</h2>
        </div>
        {viewAllTo && (
          <Link
            to={viewAllTo}
            className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-blue-600 hover:underline dark:text-blue-400 lg:text-base"
          >
            View All
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </header>
      <div className="flex flex-col gap-3 p-4 lg:gap-4 lg:p-6">{children}</div>
    </section>
  );
}