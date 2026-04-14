import { SiteShell } from "@/components/layout/SiteShell";
import { TimelineSection } from "@/components/ui/TimelineSection";
import { experienceItems } from "@/data/site";

export default function ExperiencePage() {
  return (
    <SiteShell
      title="经历 | 董一孝"
      description="董一孝的学习、实习、工作与竞赛经历。"
    >
      <TimelineSection
        eyebrow="Experience"
        title="经历"
        items={experienceItems}
      />
    </SiteShell>
  );
}
