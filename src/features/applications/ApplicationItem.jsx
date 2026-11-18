import ListItem from '../../components/ui/ListItem';
import CompanyLogo from './CompanyLogo';

export default function ApplicationItem({ title, company, appliedAgo, salary }) {
  return (
    <ListItem
      leading={<CompanyLogo name={company} />}
      title={title}
      subtitle={company}
      meta={appliedAgo}
      trailing={salary && <span className="self-end whitespace-nowrap text-sm lg:text-base">{salary}</span>}
    />
  );
}