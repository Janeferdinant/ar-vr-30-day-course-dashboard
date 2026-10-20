import { majorProjects } from "@/data/projects";
import { ProjectView } from "@/components/projects/ProjectView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return majorProjects.map((project) => ({
    id: project.id
  }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = majorProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
}
