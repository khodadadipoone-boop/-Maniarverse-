import type { EventItem } from "@/lib/eventCategories";
import EventListItem from "./eventListItem";

interface EventListProps {
  events: EventItem[];
}

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

const EventList = ({ events }: EventListProps) => {
  const now = new Date();
  const sorted = [...events].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  const thisWeek = sorted.filter(
    (event) => event.date.getTime() - now.getTime() <= ONE_WEEK_MS
  );
  const later = sorted.filter(
    (event) => event.date.getTime() - now.getTime() > ONE_WEEK_MS
  );

  return (
    <div className="flex-1 rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm">
      {events.length === 0 ? (
        <p className="text-sm text-slate-400">No events scheduled yet</p>
      ) : (
        <>
          {thisWeek.length > 0 && (
            <div className="mb-4">
              <p className="mb-1 text-xs font-medium text-slate-400">This week</p>
              {thisWeek.map((event) => (
                <EventListItem key={event.id} event={event} />
              ))}
            </div>
          )}

          {later.length > 0 && (
            <div>
              <p className="mb-1 text-xs font-medium text-slate-400">Later</p>
              {later.map((event) => (
                <EventListItem key={event.id} event={event} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventList;
