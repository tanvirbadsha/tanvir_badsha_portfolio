import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section
      id="services"
      className=" flex flex-col justify-center items-center px-[12%] gap-6"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">What i offers</h4>
      <h2 className="text-center text-5xl font-ovo mb-2">My Services</h2>
      <p className="text-center font-ovo max-w-2xl mx-auto mt-5 mb-12">
        I am a frontend developer from Dhaka, Bangladesh with 1.5 years of
        experience in multiple companies like Iota It, Bengal group of
        industries.
      </p>
      <section className="grid sm:gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 cursor-pointer ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <article
            key={index}
            className="flex flex-col gap-1 border border-gray-400 rounded-lg px-8 py-12 flex-wrap hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="right arrow"
                className="w-4"
              />
            </a>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Services;
