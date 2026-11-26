import Badge from "../../components/ui/Badge";
import ListItem from "../../components/ui/ListItem";
import { statuses } from '../../../src/lib/status';
import CompanyLogo from "./CompanyLogo";


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