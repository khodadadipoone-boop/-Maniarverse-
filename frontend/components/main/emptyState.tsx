// EmptyState.tsx
const EmptyState = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <svg
        width="220"
        height="220"
        viewBox="0 0 680 420"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="340" cy="378" rx="95" ry="14" fill="#0f766e" opacity="0.12" />
        <ellipse cx="300" cy="308" rx="20" ry="38" fill="#5eead4" stroke="#14b8a6" strokeWidth="3" transform="rotate(-18 300 308)" />
        <ellipse cx="380" cy="308" rx="20" ry="38" fill="#5eead4" stroke="#14b8a6" strokeWidth="3" transform="rotate(18 380 308)" />
        <ellipse cx="340" cy="300" rx="78" ry="88" fill="#5eead4" stroke="#14b8a6" strokeWidth="3" />
        <rect x="298" y="322" width="84" height="74" rx="10" fill="#ffffff" stroke="#14b8a6" strokeWidth="3" strokeDasharray="7 6" />
        <text x="340" y="372" textAnchor="middle" fontSize="34" fontWeight="500" fill="#0f766e">؟</text>
        <circle cx="296" cy="152" r="24" fill="#5eead4" stroke="#14b8a6" strokeWidth="3" />
        <circle cx="384" cy="152" r="24" fill="#5eead4" stroke="#14b8a6" strokeWidth="3" />
        <circle cx="296" cy="154" r="11" fill="#fbcfe8" />
        <circle cx="384" cy="154" r="11" fill="#fbcfe8" />
        <circle cx="340" cy="192" r="60" fill="#99f6e4" stroke="#14b8a6" strokeWidth="3" />
        <ellipse cx="308" cy="215" rx="13" ry="8" fill="#fbcfe8" opacity="0.8" />
        <ellipse cx="372" cy="215" rx="13" ry="8" fill="#fbcfe8" opacity="0.8" />
        <circle cx="320" cy="192" r="7" fill="#134e4a" />
        <circle cx="360" cy="192" r="7" fill="#134e4a" />
        <circle cx="322" cy="189" r="2" fill="#ffffff" />
        <circle cx="362" cy="189" r="2" fill="#ffffff" />
        <ellipse cx="340" cy="208" rx="7" ry="5" fill="#134e4a" />
        <path d="M 322 222 Q 340 232 358 222" fill="none" stroke="#134e4a" strokeWidth="3" strokeLinecap="round" />
        <path d="M 180 130 L 186 146 L 202 150 L 186 154 L 180 170 L 174 154 L 158 150 L 174 146 Z" fill="#fbbf24" />
        <path d="M 495 165 L 500 177 L 512 180 L 500 183 L 495 195 L 490 183 L 478 180 L 490 177 Z" fill="#22d3ee" />
        <path d="M 470 90 L 474 100 L 484 103 L 474 106 L 470 116 L 466 106 L 456 103 L 466 100 Z" fill="#5eead4" />
      </svg>

        <p className="text-center text-gray-600 font-semibold">
            No story has been recorded yet :(
        </p>
        <p className="text-center text-gray-400 text-sm max-w-xs">
            Add a child from the row above to see their information here
        </p>
    </div>
  );
};

export default EmptyState;
