"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

function ContactMe() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ab6e528-d115-4628-88d5-ac7d414d94a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="bg-[url('/footer-bg-color.png')] flex flex-col items-center justify-center gap-6 bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="font-Ovo text-lg">Connect with me</h4>
      <h2 className="text-5xl font-Ovo">Get In Touch</h2>
      <p className="max-w-xl text-center font-Ovo ">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="outline-none border-[0.5px] border-gray-400 p-3 bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border-[0.5px] border-gray-400 p-3 bg-white"
          />
        </div>
        <textarea
          rows={"6"}
          type="text"
          name="message"
          placeholder="Enter Your message"
          className="border-[0.5px] border-gray-400 w-full p-3 bg-white"
        />
        <button
          type="submit"
          className="bg-black/80 text-white flex items-center justify-center gap-2 py-3 px-8 w-max rounded-full mx-auto hover:bg-black cursor-pointer duration-500"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
}

export default ContactMe;
