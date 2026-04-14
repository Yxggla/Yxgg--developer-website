import { fallbackRepositories } from "@/data/site";
import type { GithubRepository } from "@/types/site";

type GithubSearchResponse = {
  items?: Array<{
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage?: string | null;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
  }>;
};

export async function getLatestRepos(
  githubUsername: string,
  token?: string
): Promise<GithubRepository[]> {
  try {
    const url = new URL("https://api.github.com/search/repositories");
    url.searchParams.set("q", `user:${githubUsername}`);
    url.searchParams.set("sort", "updated");
    url.searchParams.set("order", "desc");
    url.searchParams.set("per_page", "6");

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 21600 },
    });

    if (!response.ok) {
      console.warn(
        `[github] failed to fetch latest repos: ${response.status} ${response.statusText}`
      );
      return fallbackRepositories;
    }

    const data = (await response.json()) as GithubSearchResponse;

    if (!data.items?.length) {
      return fallbackRepositories;
    }

    return data.items.map((repository) => ({
      id: repository.id,
      name: repository.name,
      description: repository.description,
      html_url: repository.html_url,
      homepage: repository.homepage ?? null,
      stargazers_count: repository.stargazers_count,
      language: repository.language,
      updated_at: repository.updated_at,
    }));
  } catch (error) {
    console.warn("[github] unexpected error while fetching latest repos", error);
    return fallbackRepositories;
  }
}
