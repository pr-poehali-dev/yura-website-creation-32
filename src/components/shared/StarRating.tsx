interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  count?: number;
}

export default function StarRating({ rating, max = 5, size = "md", showValue = false, count }: StarRatingProps) {
  const sizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };

  return (
    <span className={`flex items-center gap-1 ${sizes[size]}`}>
      <span className="flex">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} style={{ color: i < Math.round(rating) ? "hsl(var(--gold))" : "#d1d5db" }}>
            ★
          </span>
        ))}
      </span>
      {showValue && <span className="font-golos font-semibold" style={{ color: "hsl(var(--navy))" }}>{rating}</span>}
      {count !== undefined && <span className="text-gray-400 font-golos">({count})</span>}
    </span>
  );
}
