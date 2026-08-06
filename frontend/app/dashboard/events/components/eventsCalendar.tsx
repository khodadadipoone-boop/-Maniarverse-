"use client";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

interface EventsCalendarProps {
  eventDates: Date[];
}

const EventsCalendar = ({ eventDates }: EventsCalendarProps) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm">
      <DayPicker
        modifiers={{ hasEvent: eventDates }}
        modifiersClassNames={{
          hasEvent: "bg-teal-50 text-teal-700 font-semibold rounded-lg",
        }}
        classNames={{
          root: `${defaultClassNames.root} w-full`,
          month: `${defaultClassNames.month} w-full`,
          month_caption: "flex justify-center items-center mb-3",
          caption_label: "text-sm font-semibold text-slate-700",
          nav: "flex items-center gap-1",
          chevron: "fill-teal-600",
          weekdays: "flex",
          weekday: "text-slate-400 w-9 font-normal text-[11px] text-center",
          week: "flex w-full mt-1",
          day: "w-9 h-9 text-center text-sm p-0",
          day_button:
            "w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:bg-teal-50 transition-colors",
          today: "font-semibold text-teal-600",
          outside: "text-slate-300",
        }}
      />
    </div>
  );
};

export default EventsCalendar;
