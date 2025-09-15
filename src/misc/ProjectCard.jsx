import { useState } from "react";
import { Badge } from "../misc/ui/badge";
import { Card, CardContent } from "../misc/ui/card";

export const ProjectCard = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "internships":
        return "bg-primary text-primary-foreground";
      case "personal":
        return "bg-accent text-accent-foreground";
      case "student teams":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card
      className={`group relative overflow-hidden gradient-card border-border/50 transition-transform duration-300 ease-in-out hover:shadow-hover cursor-pointer ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />

          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out" />

          {/* Category badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out text-white">
            <Badge className={getCategoryColor(project.category)}>
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-xl text-foreground mb-2 group-hover:text-primary transition-transform duration-300 ease-in-out font-semibold text-white">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out text-white">
              {project.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
