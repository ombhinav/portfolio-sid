import { useState, useEffect } from "react";
import { ProjectCard } from "../misc/ProjectCard";
import { ProjectFilter } from "../misc/ProjectFilter";

import ongc from "../assets/ongc.png";
import box from "../assets/box.jpg";
import box1 from "../assets/box1.jpg";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const categories = ["All", "Internships", "Personal", "Student Teams"];

  const projects = [
    {
      id: "1",
      title: "Apple Internship",
      category: "Internships",
      image: box,
      description:
        "Software engineering internship working on iOS development and user experience design.",
    },
    {
      id: "2",
      title: "SpaceX Internship",
      category: "Internships",
      image: box1,
      description:
        "Aerospace engineering internship focused on rocket propulsion systems and mission planning.",
    },
    {
      id: "3",
      title: "FSAE Planetary Gearbox",
      category: "Student Teams",
      image: ongc,
      description:
        "Designed and manufactured precision planetary gearbox for Formula SAE racing vehicle.",
    },
    {
      id: "4",
      title: "Plastic Injection Mold",
      category: "Personal",
      image: ongc,
      description:
        "Custom injection mold design and manufacturing for consumer product development.",
    },
    {
      id: "5",
      title: "FSAE Suspension Uprights",
      category: "Student Teams",
      image: ongc,
      description:
        "Lightweight aluminum suspension uprights for high-performance racing applications.",
    },
    {
      id: "6",
      title: "Electric Motor Dynamometer",
      category: "Student Teams",
      image: ongc,
      description:
        "Precision testing equipment for electric motor performance analysis and validation.",
    },
  ];

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${engineeringToolsBg})` }}
      > */}
      {/* Overlay */}
      {/* <div className="absolute inset-0 gradient-hero opacity-80" /> */}

      {/* Content
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
            PROJECTS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Click each picture to learn more!
          </p>
        </div> */}

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-8 bg-primary rounded-full opacity-60" />
      </div>
      {/* </section> */}

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Filter */}
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
