import { Building2, Clock, Phone, Video } from "lucide-react";
import Badge from "../../components/ui/Badge";
import IconTile from "../../components/ui/IconTile";
import ListItem from "../../components/ui/ListItem";

const modeIcon = { online: Video, onsite: Building2, phone: Phone };
const modeLabel = { online: "Online", onsite: "On-site", phone: "Phone" };

export default function InterviewItem({ title, company, time, mode }) {
  return (
    <ListItem
      leading={<IconTile icon={modeIcon[mode]} tone="blue" size="lg" />}
      title={title}
      subtitle={company}
      meta={
        <span className="inline-flex items-center gap-2">
          <Clock className="size-4" aria-hidden="true" />
          {time}
        </span>
      }
      trailing={<Badge>{modeLabel[mode]}</Badge>}
    />
  );
}