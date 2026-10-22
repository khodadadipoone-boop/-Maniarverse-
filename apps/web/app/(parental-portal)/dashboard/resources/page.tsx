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

export default function ResourcesPage() {
  return (
    <SectionPlaceholder
      title="Resources"
      description="Guides, articles, and tools to support your family."
    />
  );
}
