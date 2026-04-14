import { SiteShell } from "@/components/layout/SiteShell";
import { TimelineSection } from "@/components/ui/TimelineSection";
import { practiceItems } from "@/data/site";

export default function PracticePage() {
  return (
    <SiteShell
      title="实践 | 董一孝"
      description="董一孝的志愿服务、社会实践与活动参与记录。"
    >
      <TimelineSection
        eyebrow="Practice"
        title="实践"
        items={practiceItems}
        showImages
      />
    </SiteShell>
  );
}
