import { Briefcase, ClipboardList, House, Plus, Search } from "lucide-react";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: House, href: "#dashboard" },
  { id: "applications", label: "My Applications", icon: ClipboardList, href: "#applications" },
  { id: "search", label: "Job Search", icon: Search, href: "#search" },
];

export default function TopNav({ active, onAddJob }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 lg:px-6">
        {/* BOX 1: logo */}
        <a href="#dashboard" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white lg:size-12 lg:rounded-2xl">
            <Briefcase className="size-5 lg:size-6" aria-hidden="true" />
          </span>
          <span className="text-xl font-semibold lg:text-2xl">My Job Trackr</span>
        </a>

        {/* BOX 2: tabs. Own row on phones, centred between logo and actions from 1024px */}
        <nav
          aria-label="Main"
          className="order-last flex w-full gap-1 overflow-x-auto lg:order-none lg:w-auto"
        >
          {tabs.map(({ id, label, icon: Icon, href }) => (
            <a
              key={id}
              href={href}
              aria-current={id === active ? "page" : undefined}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-2.5 py-2.5 text-[15px] sm:px-4 sm:text-base lg:text-lg ${
                id === active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="hidden size-5 sm:block" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        {/* BOX 3: actions. The button shows only a plus on phones */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Button onClick={onAddJob} aria-label="Add job">
            <Plus className="size-5" aria-hidden="true" />
            <span className="hidden sm:inline">Add Job</span>
          </Button>
          <Avatar initials="Jo" label="Your account" />
        </div>
      </div>
    </header>
  );
}