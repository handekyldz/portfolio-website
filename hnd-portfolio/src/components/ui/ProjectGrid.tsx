import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeInOnScroll from "./FadeInOnScroll";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" data-name="Projects" aria-label="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeInOnScroll key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
}
