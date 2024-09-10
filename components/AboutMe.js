import React, { useState } from "react";
import userData from "@constants/data";

export default function AboutMe() {
  const [showCourses, setShowCourses] = useState(false);
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          关于我
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                联系我
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                如果需要联系我可以给我发送{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  邮件
                </a>{" "}
                我会在我看到后回复。
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                工作机会
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                如果有合适的工作岗位可以查看我的{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  简历
                </a>{" "}
                ，我很愿意参与其中。
              </p>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-3">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                dangerouslySetInnerHTML={{ __html: desc }}
              ></p>
            ))}
            <h1
              className="bg-red-500 text-3xl rounded-md px-6 py-2 inline-block font-bold text-gray-50 mt-6 cursor-pointer hover:bg-red-600"
              onClick={() => setShowCourses(!showCourses)}
            >
              大学主修课程内容 &gt;&gt;
            </h1>

            {showCourses && (
              <div className="mt-4">
                {userData.about.MajorCourse.map((category, idx) => (
                  <div key={idx} className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {category[0]}
                    </h2>
                    {category.slice(1).map((course, courseIdx) => (
                      <p
                        key={courseIdx}
                        className="text-xl text-gray-700 dark:text-gray-300"
                      >
                        {course}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <br />

            <h1 className="bg-red-500 text-3xl rounded-md px-6 py-2 inline-block font-bold text-gray-50 mt-6">
              技术栈
            </h1>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row mb-8">
                {/* Web 框架 */}
                <div className="flex flex-col w-1/2">
                  <h2 className="text-xl font-semibold mb-4 ml-2">Web 框架</h2>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:react.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">React</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:flutter.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Flutter</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:nextjs-icon.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Next</p>
                    </div>
                  </div>
                </div>

                {/* Web 设计 */}
                <div className="flex flex-col w-1/2">
                  <h2 className="text-xl font-semibold mb-4 ml-2">Web 设计</h2>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:tailwindcss-icon.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:sass.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Sass</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:ant-design.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Antd</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row mb-8">
                {/* BFF/质量 */}
                <div className="flex flex-col w-1/2">
                  <h2 className="text-xl font-semibold mb-4 ml-2">BFF/质量</h2>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:nodejs.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">NodeJs</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:vitejs.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Vite</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:eslint-old.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Eslint</p>
                    </div>
                  </div>
                </div>

                {/* 常用语言 */}
                <div className="flex flex-col w-1/2">
                  <h2 className="text-xl font-semibold mb-4 ml-2">常用语言</h2>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:javascript.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">JS</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:typescript-icon.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">TS</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:python.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">Python</p>
                    </div>
                    <div className="flex flex-col items-center mx-6 my-4">
                      <img
                        src="https://api.iconify.design/logos:c-sharp.svg"
                        className="h-12 w-12"
                      />
                      <p className="mt-4 text-sm">C#</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 影视和游戏设计 */}
              <div className="flex flex-col mb-8">
                <h2 className="text-xl font-semibold mb-4 ml-2">
                  影视和游戏设计
                </h2>
                <div className="flex flex-row flex-wrap">
                  <div className="flex flex-col items-center mx-6  my-4">
                    <img src="/fcpx.png" className="h-12 w-12" />
                    <p className="mt-4 text-sm">FCPX</p>
                  </div>
                  <div className="flex flex-col items-center  mx-6 my-4">
                    <img src="/DaVinci.svg.png" className="h-12 w-12" />
                    <p className="mt-4 text-sm">Davinci</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:adobe-premiere.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">PR</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:adobe-after-effects.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">AE</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:adobe-photoshop.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">PS</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/devicon:unity.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Unity</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:blender.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Blender</p>
                  </div>
                </div>
              </div>

              {/* 工具/软件 */}
              <div className="flex flex-col mb-8">
                <h2 className="text-xl font-semibold mb-4 ml-2">工具/软件</h2>
                <div className="flex flex-row flex-wrap">
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:git-icon.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Git</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:github-icon.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">GitHub</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:postman-icon.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Postman</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:visual-studio-code.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Vscode</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:xcode.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Xcode</p>
                  </div>
                  <div className="flex flex-col items-center mx-6 my-4">
                    <img
                      src="https://api.iconify.design/logos:figma.svg"
                      className="h-12 w-12"
                    />
                    <p className="mt-4 text-sm">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
