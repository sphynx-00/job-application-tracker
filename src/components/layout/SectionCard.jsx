import { ArrowRight } from 'lucide-react';
import IconTile from '../ui/IconTile';

export default function SectionCard({ icon, tone, title, viewAllHref, children }) {
  return (
    <section className="rounded-2xl bg-white shadow-sm lg:min-h-96">
      <header className="flex items-center justify-between gap-3 border-b border-gray-100 p-4 lg:p-6">
        <div className="flex items-center gap-3 lg:gap-4">
          <IconTile icon={icon} tone={tone} variant="solid" />
          <h2 className="text-lg font-semibold lg:text-xl">{title}</h2>
        </div>
        <a
          href={viewAllHref}
          className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-blue-600 hover:underline lg:text-base"
        >
          View All
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </header>
      <div className="flex flex-col gap-3 p-4 lg:gap-4 lg:p-6">{children}</div>
    </section>
  );
}