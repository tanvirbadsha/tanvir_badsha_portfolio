import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="email icon" className="w-6" />
          mstanvir55@gmail.com
        </div>
        <div className="sm:flex justify-between text-center border-t border-gray-400 mx-[10%] mt-12 py-2">
          <div>
            <p> &copy; 2025 Tanvir Badsha. All right reserved.</p>
          </div>
          <ul className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
            <li>
              <a target="_blank" href="https://github.com/tanvirbadsha">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tanvir-badsha-821037171/"
              >
                Linked In
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/tanvir.badsha.3/"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
