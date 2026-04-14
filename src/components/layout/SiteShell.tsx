import Head from "next/head";
import { useRouter } from "next/router";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteMeta } from "@/data/site";
import { getCleanPath } from "@/lib/routes";

type SiteShellProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

export function SiteShell({
  children,
  title,
  description,
  image,
}: SiteShellProps) {
  const router = useRouter();

  const meta = {
    title: title ?? siteMeta.defaultTitle,
    description: description ?? siteMeta.defaultDescription,
    image: image ?? siteMeta.defaultImage,
  };

  const pathname = getCleanPath(router.asPath);
  const canonicalUrl = `${siteMeta.siteUrl}${pathname === "/" ? "" : pathname}`;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMeta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div>
        <Navbar />
        <main className="dark:bg-gray-800 w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
}
