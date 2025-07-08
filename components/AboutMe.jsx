import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <article id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo mb-2">About me</h2>
      <section className="flex w-full flex-col md:flex-row lg:flex-row items-center justify-center mx-auto md:gap-4">
        <div className=" sm:w-80 rounded-3xl">
          <Image
            src={assets.user_image}
            alt="user image"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-ovo md:text-sm lg:text-lg">
            I'm Tanvir Badsha, a web developer who loves crafting clean, fast,
            and user-friendly websites. I work mostly with React, Next.js, and
            spend a lot of time making sure everything runs smoothly—whether
            that’s optimizing performance or refining the user experience.
            Lately, I’ve been diving deeper into areas like accessibility and
            clean architecture, always trying to sharpen my skills and stay
            curious.
          </p>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 p-6 cursor-pointer
                 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt="icon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

export default AboutMe;
