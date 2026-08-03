"use client";

import { useMemo, useState } from "react";
import EventsCalendar from "./components/eventsCalendar";
import EventList from "./components/eventList";
import {
  categoryLabels,
  type EventCategory,
  type EventItem,
} from "@/lib/eventCategories";

type FilterValue = EventCategory | "all";

const FILTERS: FilterValue[] = ["all", "medical", "vaccination", "milestone"];

const Events = () => {
  const [filter, setFilter] = useState<FilterValue>("all");

  // TODO: replace this sample data with the active child's real events from context/API
  const events: EventItem[] = [
    {
      id: "1",
      title: "Doctor visit",
      date: new Date(2026, 6, 7, 10, 0),
      category: "medical",
    },
    {
      id: "2",
      title: "Vaccination",
      date: new Date(2026, 6, 11, 14, 30),
      category: "vaccination",
    },
    {
      id: "3",
      title: "First tooth checkup",
      date: new Date(2026, 6, 20, 9, 0),
      category: "milestone",
    },
  ];

  const filteredEvents = useMemo(
    () =>
      filter === "all"
        ? events
        : events.filter((event) => event.category === filter),
    [events, filter]
  );

  const eventDates = useMemo(
    () => filteredEvents.map((event) => event.date),
    [filteredEvents]
  );

  return (
    <div className="flex flex-1 flex-col gap-6 pb-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-bold text-slate-700">Events</h1>

          {FILTERS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === value
                  ? "bg-teal-100 text-teal-700"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              {value === "all" ? "All" : categoryLabels[value]}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800"
        >
          <span className="text-base leading-none">+</span>
          Add Event
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:flex-[1.4]">
          <EventsCalendar eventDates={eventDates} />
        </div>
        <div className="lg:flex-1">
          <EventList events={filteredEvents} />
        </div>
      </div>
    </div>
  );
};

export default Events;
