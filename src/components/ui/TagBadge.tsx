interface TagBadgeProps {
  category: string;
  year: string;
}

export default function TagBadge({ category, year }: TagBadgeProps) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="font-sans text-[14px] uppercase text-body whitespace-nowrap">
        {category}
      </span>
      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" aria-hidden="true">
        <circle cx="2" cy="2" r="2" fill="#4B4B51" />
      </svg>
      <span className="font-sans text-[14px] uppercase text-body whitespace-nowrap">
        {year}
      </span>
    </div>
  );
}
