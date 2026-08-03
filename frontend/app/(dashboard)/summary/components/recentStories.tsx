import { HiOutlineDocumentText } from "react-icons/hi2";

interface StoryItem {
  id: string;
  title: string;
}

interface RecentStoriesProps {
  stories: StoryItem[];
}

const RecentStories = ({ stories }: RecentStoriesProps) => {
  return (
    <div className="flex-1 rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-slate-700">Recent stories</h3>

      {stories.length === 0 ? (
        <p className="text-sm text-slate-400">No stories recorded yet</p>
      ) : (
        <ul className="flex flex-col">
          {stories.map((story, index) => (
            <li
              key={story.id}
              className={`flex items-center gap-3 py-2 ${
                index !== stories.length - 1 ? "border-b border-teal-50" : ""
              }`}
            >
              <HiOutlineDocumentText
                size={18}
                className="shrink-0 text-teal-600"
              />
              <span className="text-sm text-slate-600">{story.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentStories;
