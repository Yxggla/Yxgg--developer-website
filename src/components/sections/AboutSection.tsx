"use client";

import { useState } from "react";

import { profile } from "@/data/site";
import { RichText } from "@/components/ui/RichText";

const skillSections = [
  {
    title: "Web 框架",
    items: [
      { name: "React", icon: "https://api.iconify.design/logos:react.svg" },
      { name: "Flutter", icon: "https://api.iconify.design/logos:flutter.svg" },
      { name: "Next", icon: "https://api.iconify.design/logos:nextjs-icon.svg" },
    ],
  },
  {
    title: "Web 设计",
    items: [
      { name: "Tailwind", icon: "https://api.iconify.design/logos:tailwindcss-icon.svg" },
      { name: "Sass", icon: "https://api.iconify.design/logos:sass.svg" },
      { name: "Antd", icon: "https://api.iconify.design/logos:ant-design.svg" },
    ],
  },
  {
    title: "BFF/质量",
    items: [
      { name: "NodeJs", icon: "https://api.iconify.design/logos:nodejs.svg" },
      { name: "Vite", icon: "https://api.iconify.design/logos:vitejs.svg" },
      { name: "Eslint", icon: "https://api.iconify.design/logos:eslint-old.svg" },
    ],
  },
  {
    title: "常用语言",
    items: [
      { name: "JS", icon: "https://api.iconify.design/logos:javascript.svg" },
      { name: "TS", icon: "https://api.iconify.design/logos:typescript-icon.svg" },
      { name: "Python", icon: "https://api.iconify.design/logos:python.svg" },
      { name: "C#", icon: "https://api.iconify.design/logos:c-sharp.svg" },
    ],
  },
  {
    title: "影视和游戏设计",
    fullWidth: true,
    items: [
      { name: "FCPX", icon: "/fcpx.png" },
      { name: "Davinci", icon: "/DaVinci.svg.png" },
      { name: "PR", icon: "https://api.iconify.design/logos:adobe-premiere.svg" },
      { name: "AE", icon: "https://api.iconify.design/logos:adobe-after-effects.svg" },
      { name: "PS", icon: "https://api.iconify.design/logos:adobe-photoshop.svg" },
      { name: "Unity", icon: "https://api.iconify.design/devicon:unity.svg" },
      { name: "Blender", icon: "https://api.iconify.design/logos:blender.svg" },
    ],
  },
  {
    title: "工具/软件",
    fullWidth: true,
    items: [
      { name: "Git", icon: "https://api.iconify.design/logos:git-icon.svg" },
      { name: "GitHub", icon: "https://api.iconify.design/logos:github-icon.svg" },
      { name: "Postman", icon: "https://api.iconify.design/logos:postman-icon.svg" },
      { name: "Vscode", icon: "https://api.iconify.design/logos:visual-studio-code.svg" },
      { name: "Xcode", icon: "https://api.iconify.design/logos:xcode.svg" },
      { name: "Figma", icon: "https://api.iconify.design/logos:figma.svg" },
    ],
  },
];

export function AboutSection() {
  const [showUndergraduateCourses, setShowUndergraduateCourses] =
    useState(false);
  const [showGraduateCourses, setShowGraduateCourses] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className="py-20 text-center text-5xl font-bold md:text-left md:text-9xl">
          关于我
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container mx-auto max-w-6xl pt-20">
          <p
            className="mx-4 text-2xl font-semibold leading-loose md:text-4xl"
            style={{ lineHeight: "3rem" }}
          >
            {profile.aboutTitle}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] px-4 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-20 gap-y-20 pt-20 md:grid-cols-4">
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                联系我
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                如果需要联系我可以给我发送
                {" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300"
                >
                  邮件
                </a>
                {" "}
                我会在我看到后回复。
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                工作机会
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                如果有合适的工作岗位可以查看我的
                {" "}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300"
                >
                  简历
                </a>
                {" "}
                ，我很愿意参与其中。
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            {profile.aboutDescription.map((paragraph) => (
              <RichText
                key={paragraph}
                html={paragraph}
                className="mb-4 text-xl text-gray-700 dark:text-gray-300"
              />
            ))}

            <h1
              className="mt-6 inline-block cursor-pointer rounded-md bg-red-500 px-6 py-2 text-3xl font-bold text-gray-50 transition-colors hover:bg-red-600"
              onClick={() =>
                setShowUndergraduateCourses(!showUndergraduateCourses)
              }
            >
              本科主修课程内容 {showUndergraduateCourses ? "▼" : "▶"}
            </h1>

            {showUndergraduateCourses ? (
              <div className="mt-4 animate-fadeIn">
                {profile.undergraduateCourses.map((category) => (
                  <div key={category.title} className="mb-6">
                    <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                      {category.items.join("、")}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <br />

            <h1
              className="mt-6 inline-block cursor-pointer rounded-md bg-red-500 px-6 py-2 text-3xl font-bold text-gray-50 transition-colors hover:bg-red-600"
              onClick={() => setShowGraduateCourses(!showGraduateCourses)}
            >
              硕士期间学习课程内容 {showGraduateCourses ? "▼" : "▶"}
            </h1>

            {showGraduateCourses ? (
              <div className="mt-4 animate-fadeIn">
                {profile.graduateCourses.map((category) => (
                  <div key={category.title} className="mb-6">
                    <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {category.items.map((course) => (
                        <div
                          key={course}
                          className="rounded-md bg-gray-50 px-4 py-2 text-lg text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <br />

            <h1 className="mt-6 inline-block rounded-md bg-red-500 px-6 py-2 text-3xl font-bold text-gray-50">
              技术栈
            </h1>
            <div className="mt-8 flex flex-col">
              <div className="mb-8 flex flex-col gap-8 md:flex-row">
                {skillSections
                  .filter((section) => !section.fullWidth)
                  .map((section) => (
                    <div key={section.title} className="flex w-full flex-col md:w-1/2">
                      <h2 className="mb-4 ml-2 text-xl font-semibold">
                        {section.title}
                      </h2>
                      <div className="flex flex-row flex-wrap">
                        {section.items.map((item) => (
                          <div
                            key={item.name}
                            className="mx-6 my-4 flex flex-col items-center"
                          >
                            <img src={item.icon} alt={item.name} className="h-12 w-12" />
                            <p className="mt-4 text-sm">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {skillSections
                .filter((section) => section.fullWidth)
                .map((section) => (
                  <div key={section.title} className="mb-8 flex flex-col">
                    <h2 className="mb-4 ml-2 text-xl font-semibold">
                      {section.title}
                    </h2>
                    <div className="flex flex-row flex-wrap">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="mx-6 my-4 flex flex-col items-center"
                        >
                          <img src={item.icon} alt={item.name} className="h-12 w-12" />
                          <p className="mt-4 text-sm">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
