import { categoryColors, type EventItem } from "@/lib/eventCategories";

interface EventListItemProps {
  event: EventItem;
}

const EventListItem = ({ event }: EventListItemProps) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <span
        className="h-8 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: categoryColors[event.category] }}
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-700">{event.title}</span>
        <span className="text-xs text-slate-400">
          {event.date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}{" "}
          ·{" "}
          {event.date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default EventListItem;
