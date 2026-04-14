import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestReposSection } from "@/components/sections/LatestReposSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { profile } from "@/data/site";
import { getLatestRepos } from "@/lib/github";
import type { GithubRepository } from "@/types/site";

type HomePageProps = {
  repositories: GithubRepository[];
};

export default function HomePage({
  repositories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SiteShell>
      <HeroSection />
      <FeaturedProjectsSection />
      <LatestReposSection repositories={repositories} />
    </SiteShell>
  );
}

export const getStaticProps = (async () => {
  const repositories = await getLatestRepos(
    profile.githubUsername,
    process.env.GITHUB_AUTH_TOKEN
  );

  return {
    props: {
      repositories,
    } satisfies HomePageProps,
    revalidate: 21600,
  };
}) satisfies GetStaticProps<HomePageProps>;
