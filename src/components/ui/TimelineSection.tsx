import { Fragment } from "react";

import type { TimelineItem } from "@/types/site";
import { RichText } from "@/components/ui/RichText";

type TimelineSectionProps = {
  eyebrow: string;
  title: string;
  items: TimelineItem[];
  showImages?: boolean;
};

export function TimelineSection({
  eyebrow,
  title,
  items,
  showImages = false,
}: TimelineSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className="py-20 text-center text-5xl font-bold md:text-left md:text-9xl">
          {title}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-4 dark:bg-gray-900">
        <div className="mx-auto grid max-w-xl grid-cols-1 pt-20 dark:bg-gray-900">
          {items.map((item, index) => (
            <Fragment key={`${item.title}-${item.year}`}>
              <TimelineCard item={item} showImage={showImages} />
              {index === items.length - 1 ? null : (
                <div className="divider-container -mt-2 flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full bg-green-500">
                    <div className="relative z-10 h-4 w-4 animate-ping rounded-full bg-green-500" />
                  </div>
                  <div className="-mt-2 h-24 w-1 rounded-full bg-gray-200 dark:bg-gray-500" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

type TimelineCardProps = {
  item: TimelineItem;
  showImage: boolean;
};

function TimelineCard({ item, showImage }: TimelineCardProps) {
  return (
    <div className="relative z-10 mx-4 rounded-md border bg-white p-6 shadow-xl dark:bg-gray-800">
      <h1 className="absolute -top-10 text-4xl font-bold text-gray-300 md:-left-10 md:-top-12 dark:text-gray-700">
        {item.year}
      </h1>

      <a href={item.companyLink} target="_blank" rel="noopener noreferrer">
        <h1 className="text-2xl font-semibold">{item.title}</h1>
        <p className="text-gray-500">{item.company}</p>
        <RichText
          html={item.desc}
          className="my-2 text-gray-700 dark:text-gray-400"
        />
        <div className="absolute right-4 top-4 bottom-4 text-2xl text-gray-500">
          &gt;&gt;
        </div>
      </a>

      {showImage && item.imgUrl ? (
        <div className="h-72 object-cover">
          <img
            src={item.imgUrl}
            alt={item.title}
            className="h-full w-full object-cover transition duration-2000 ease-out hover:scale-110"
          />
        </div>
      ) : null}
    </div>
  );
}
