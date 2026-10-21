"use client";

import {
  HiOutlineDocumentText,
  HiOutlineUserCircle,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from "react-icons/hi2";
import { useChildrenContext } from "@/components/main/childrenContext";
import MetricCard from "./components/metricCard";
import GrowthChart from "./components/growthChart";
import UpcomingEvents from "./components/upcomingEvents";
import RecentStories from "./components/recentStories";

const Summary = () => {
  const { childrenList, activeId } = useChildrenContext();
  const activeChild = childrenList.find((child) => child.id === activeId);

  // TODO: replace this sample data with the active child's real data from context/API
  const growthData = [
    { label: "Month 1", height: 55, weight: 4 },
    { label: "Month 2", height: 58, weight: 5 },
    { label: "Month 3", height: 61, weight: 5.8 },
    { label: "Month 4", height: 64, weight: 6.5 },
  ];

  const events = [
    { id: "1", title: "Doctor visit", date: "Jul 27" },
    { id: "2", title: "Vaccination", date: "Aug 3" },
  ];

  const stories = [
    { id: "1", title: "First smile" },
    { id: "2", title: "First steps" },
  ];

  if (!activeChild) {
    return (
      <div className="flex flex-1 items-center justify-center py-16">
        <p className="text-lg font-medium text-slate-400">
          Select a child to view their summary
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6 pb-8">
      <h1 className="text-xl font-bold text-slate-800">Summary</h1>

      <div className="flex flex-wrap gap-4">
        <MetricCard
          label="Stories recorded"
          value={stories.length}
          icon={HiOutlineDocumentText}
        />
        <MetricCard
          label="Child's age"
          value="8 months"
          icon={HiOutlineUserCircle}
        />
        <MetricCard
          label="Upcoming events"
          value={events.length}
          icon={HiOutlineCalendarDays}
        />
        <MetricCard label="Last update" value="2 days ago" icon={HiOutlineClock} />
      </div>

      <GrowthChart data={growthData} />

      <div className="flex flex-col gap-6 lg:flex-row">
        <UpcomingEvents events={events} />
        <RecentStories stories={stories} />
      </div>
    </div>
  );
};

export default Summary;
