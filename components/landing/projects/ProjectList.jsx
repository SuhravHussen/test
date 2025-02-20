import { getProjects } from "@/actions/getProjects";
import ProjectCard from "./ProjectCard";

export default async function ProjectList({ category }) {
  const projects = await getProjects(category);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center max-w-screen-xl mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
