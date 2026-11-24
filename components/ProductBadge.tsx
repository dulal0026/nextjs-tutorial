interface ProductBadgeProps {
  title: string;
  color?: string;
}

export default function ProductBadge({
  title,
  color = "green",
}: ProductBadgeProps) {
  return (
    <span className="rounded bg-gray-100 px-3 py-1">
      {title} ({color})
    </span>
  );
}