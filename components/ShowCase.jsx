import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function ShowCase() {
  return (
    <section
      id="top"
      className="flex flex-col items-center justify-center gap-4 w-11/12 mx-auto max-w-3xl max-h-screen "
    >
      <figure className="flex flex-col items-center justify-center">
        <Image
          src={assets.profile_img}
          alt="profile photo"
          className="w-39 rounded-full"
        />
        <figcaption className="flex gap-2 mb-3">
          <h3 className="font-ovo text-xl md:text-2xl">
            Hi! I'm Tanvir Badsha
          </h3>
          <Image src={assets.hand_icon} className="w-7" alt="hand icon" />
        </figcaption>
      </figure>
      <h1 className="text-3xl sm:text-6xl md:text-4xl lg:text-[66px] font-ovo text-center">
        frontend web developer based in Dhaka
      </h1>
      <p className="font-ovo max-w-2xl mx-auto text-center">
        I am a frontend developer from Dhaka, Bangladesh with 1.5 years of
        experience in multiple companies like Bengal group of industries, Iota
        It.
      </p>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <a
          href="#contact"
          className="flex gap-2 border rounded-full border-gray-500 px-10 py-3 bg-black text-white items-center"
        >
          connect with me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-[10px] h-[16px]"
          />
        </a>
        <a
          href="/web_tanvir_badsha.pdf"
          download
          className="flex items-center gap-2 border rounded-full border-gray-500 px-10 py-3"
        >
          my resume{" "}
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-[10px]"
          />
        </a>
      </div>
    </section>
  );
}

export default ShowCase;
