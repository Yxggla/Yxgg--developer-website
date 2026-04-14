import { projects } from "@/data/site";

export function ProjectsSection() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className="py-20 text-center text-5xl font-bold md:text-left md:text-9xl">
          项目们
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              link={project.link}
              imgUrl={project.imgUrl}
              number={String(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  title: string;
  link: string;
  imgUrl: string;
  number: string;
};

function ProjectCard({ title, link, imgUrl, number }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={title}
            className="h-full w-full object-cover transition duration-2000 ease-out hover:scale-125"
          />
        </div>
        <h1 className="absolute left-10 top-10 rounded-md bg-red-500 px-2 text-xl font-bold text-gray-50">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-xl font-bold text-gray-50">
          {number.padStart(2, "0")}
        </h1>
      </div>
    </a>
  );
}
