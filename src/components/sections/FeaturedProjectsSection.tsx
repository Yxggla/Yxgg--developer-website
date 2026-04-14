import Link from "next/link";

import { featuredProjects } from "@/data/site";

export function FeaturedProjectsSection() {
  const cardClasses = [
    "col-span-3 shadow-2xl",
    "col-span-3 shadow-2xl sm:col-span-2",
    "col-span-3 block object-cover sm:col-span-1",
  ];

  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mx-10 flex flex-col items-center justify-between pt-40 md:my-20 md:flex-row lg:my-0">
          <h1 className="my-20 max-w-lg text-center text-6xl font-bold text-gray-500 md:my-0 md:text-white lg:text-9xl dark:text-gray-600">
            代表项目
          </h1>
          <Link
            href="/projects"
            className="mb-20 flex flex-row items-center space-x-4 rounded-md bg-white px-8 py-4 text-xl font-semibold shadow-lg dark:text-gray-700 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View all</p>
          </Link>
        </header>

        <div className="grid gap-8 pb-40 md:grid-cols-3 lg:-mt-8">
          {featuredProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full block ${cardClasses[index] ?? "col-span-3 shadow-2xl"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="transform transition duration-2000 ease-out hover:scale-125"
                />
                <h1 className="absolute left-10 top-10 rounded-md bg-red-500 px-2 text-xl font-bold text-gray-50">
                  {project.title}
                </h1>
                <h1 className="absolute bottom-10 left-10 text-xl font-bold text-gray-50">
                  {String(index + 1).padStart(2, "0")}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
