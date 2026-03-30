import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm font-golos py-3">
      <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
        <Icon name="Home" size={13} />
        Главная
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <Icon name="ChevronRight" size={13} className="text-gray-400" />
          {item.path ? (
            <Link to={item.path} className="text-gray-500 hover:text-gray-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "hsl(var(--navy))" }} className="font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
