import { HiOutlineCalendarDays } from "react-icons/hi2";

interface EventItem {
  id: string;
  title: string;
  date: string;
}

interface UpcomingEventsProps {
  events: EventItem[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <div className="flex-1 rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-slate-700">Upcoming events</h3>

      {events.length === 0 ? (
        <p className="text-sm text-slate-400">No events scheduled yet</p>
      ) : (
        <ul className="flex flex-col">
          {events.map((event, index) => (
            <li
              key={event.id}
              className={`flex items-center gap-3 py-2 ${
                index !== events.length - 1 ? "border-b border-teal-50" : ""
              }`}
            >
              <HiOutlineCalendarDays
                size={18}
                className="shrink-0 text-teal-600"
              />
              <span className="text-sm text-slate-600">
                {event.title} - {event.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingEvents;
