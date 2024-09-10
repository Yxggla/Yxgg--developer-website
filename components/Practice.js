import React from "react";
import userData from "@constants/data";

export default function Practice() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          实践
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.practice.map((exp, idx) => (
            <>
              <PracticeCard
                key={idx}
                title={exp.title}
                desc={<span dangerouslySetInnerHTML={{ __html: exp.desc }} />}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                imgUrl={exp.imgUrl}
              />
              {idx === userData.practice.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const PracticeCard = ({ title, desc, year, company, companyLink, imgUrl }) => {
  return (
    <div className=" relative experience-card border p-6 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-12 text-4xl text-gray-300 font-bold  dark:text-gray-700">
        {year}
      </h1>

      <a href={companyLink} target="_blank" rel="noopener noreferrer">
        <h1 className="font-semibold text-2xl ">{title}</h1>
        <p className="text-gray-500"> {company}</p>
        <p className="text-gray-700 dark:text-gray-400 my-2">{desc}</p>

        <div className="absolute bottom-4 right-4 text-gray-500 text-2xl top-4">
          &gt;&gt;
        </div>
      </a>
      <div className="h-72 object-cover">
        <img
          src={imgUrl}
          alt="portfolio"
          className="transform hover:scale-110 transition duration-2000 ease-out object-cover h-full w-full"
        />
      </div>
    </div>
  );
};
