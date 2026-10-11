import Link from "next/link";

const SectionPlaceholder = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="pb-8">
    <h1 className="mb-2 text-xl font-bold text-slate-800">{title}</h1>
    <p className="text-sm text-slate-500">{description}</p>
    <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
      <p className="text-sm font-medium text-slate-400">
        {/* TODO: replace with real data from API/context */}
        Content coming soon
      </p>
    </div>
  </div>
);

export default function ReportsPage() {
  return (
    <div>
      <SectionPlaceholder
        title="Reports"
        description="Growth reports and progress summaries for your children."
      />
      <p className="text-sm text-slate-500">
        Looking for the detailed summary view?{" "}
        <Link href="/summary" className="font-semibold text-blue-600 hover:text-blue-700">
          Open Summary →
        </Link>
      </p>
    </div>
  );
}
