import { allLessons, getLessonById } from "@/data/course";
import { LessonView } from "@/components/lessons/LessonView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allLessons.map((lesson) => ({
    id: lesson.id
  }));
}

export default async function LessonPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLessonById(id);

  if (!lesson) {
    notFound();
  }

  return <LessonView lesson={lesson} />;
}
