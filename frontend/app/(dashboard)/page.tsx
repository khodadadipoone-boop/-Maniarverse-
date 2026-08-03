import StatCards from "@/components/dashboard/statCards";
import TodaysSuggestion from "@/components/dashboard/todaysSuggestion";
import TodaysPlan from "@/components/dashboard/todaysPlan";
import GrowthOverview from "@/components/dashboard/growthOverview";
import RecentActivity from "@/components/dashboard/recentActivity";
import MessagesRequests from "@/components/dashboard/messagesRequests";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <StatCards />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <TodaysSuggestion />
        <TodaysPlan />
        <GrowthOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentActivity />
        <MessagesRequests />
      </div>
    </div>
  );
}
