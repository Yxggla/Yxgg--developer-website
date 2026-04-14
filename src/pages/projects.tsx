import { SiteShell } from "@/components/layout/SiteShell";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <SiteShell
      title="项目 | 董一孝"
      description="董一孝的项目归档，覆盖 AI、前端开发、数字媒体与交互实践。"
    >
      <ProjectsSection />
    </SiteShell>
  );
}
