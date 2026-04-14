import { AboutSection } from "@/components/sections/AboutSection";
import { SiteShell } from "@/components/layout/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell
      title="关于 | 董一孝"
      description="董一孝的学习背景、技术栈与职业方向。"
    >
      <AboutSection />
    </SiteShell>
  );
}
