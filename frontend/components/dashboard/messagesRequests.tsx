interface MessageItem {
  id: string;
  avatar: string;
  title: string;
  description: string;
  timestamp: string;
  showReview?: boolean;
}

const MessagesRequests = () => {
  // TODO: replace with real data from API/context
  const messages: MessageItem[] = [
    {
      id: "1",
      avatar: "👩‍⚕️",
      title: "Dr. Martinez",
      description: "Follow-up notes from last session are ready.",
      timestamp: "1 hour ago",
      showReview: true,
    },
    {
      id: "2",
      avatar: "🏫",
      title: "Sunshine Preschool",
      description: "Permission slip due by Friday.",
      timestamp: "3 hours ago",
    },
    {
      id: "3",
      avatar: "👨",
      title: "Alex (Co-parent)",
      description: "Can we swap pickup on Thursday?",
      timestamp: "Yesterday",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-800">
        Messages &amp; Requests
      </h2>

      <ul className="flex flex-col gap-4">
        {messages.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg">
              {item.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex min-w-0 items-start justify-between gap-2">
                <p className="min-w-0 truncate text-sm font-bold text-slate-800">
                  {item.title}
                </p>
                <span className="shrink-0 text-xs text-slate-400">
                  {item.timestamp}
                </span>
              </div>
              <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                {item.description}
              </p>
              {item.showReview && (
                <button
                  type="button"
                  className="mt-2 rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Review
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesRequests;
