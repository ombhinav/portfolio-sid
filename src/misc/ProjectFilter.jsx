import { Badge } from "../misc/ui/badge";

export const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={`px-6 py-2 text-sm font-medium cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${
            activeCategory === category
              ? "gradient-accent text-accent-foreground shadow-glow"
              : "hover:bg-secondary hover:text-secondary-foreground"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};
