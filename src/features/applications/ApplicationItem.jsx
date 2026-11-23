import Badge from "../../components/ui/Badge";
import ListItem from "../../components/ui/ListItem";
import CompanyLogo from "./CompanyLogo";

const statuses = {
  applied: { label: "Applied", tone: "blue" },
  interview: { label: "Interview", tone: "purple" },
  offer: { label: "Offer", tone: "green" },
  rejected: { label: "Rejected", tone: "red" },
};

export default function ApplicationItem({ title, company, appliedAgo, salary, status }) {
  const badge = statuses[status];

  return (
    <ListItem
      leading={<CompanyLogo name={company} />}
      title={title}
      subtitle={company}
      meta={
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {badge && <Badge tone={badge.tone}>{badge.label}</Badge>}
          {appliedAgo}
        </span>
      }
      trailing={salary && <span className="self-end whitespace-nowrap text-sm lg:text-base">{salary}</span>}
    />
  );
}