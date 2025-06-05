import React from "react";
import Image from "next/image";
import { Calendar, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className=" text-white pt-64 md:pt-40  px-6 md:px-7 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* Column 1: Logo + About + Icons */}
        <div>
          <Image src="/logo-white.svg" alt="logo" width={180} height={100} />
          <p className="pt-5 w-[95%] text-[#b5b3bc] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            quam nec ante fringilla vel at erat convallis elit.
          </p>
          <div className="flex gap-3 mt-7">
            <a href="/" className="bg-[#131b4d] p-2 rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="/" className="bg-[#131b4d] p-2 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="/" className="bg-[#131b4d] p-2 rounded-full">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="/" className="bg-[#131b4d] p-2 rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-2xl">Quick Links</h3>
          <ul className="pt-5 space-y-2 text-[#b5b3bc] font-semibold">
            <li>What is ico?</li>
            <li>Whitepaper</li>
            <li>Roadmap</li>
            <li>Social Network</li>
            <li>Join Us Now</li>
          </ul>
        </div>

        {/* Column 3: Supports */}
        <div>
          <h3 className="font-bold text-2xl">Supports</h3>
          <ul className="pt-5 space-y-2 text-[#b5b3bc] font-semibold">
            <li>Setting & Privacy</li>
            <li>Help & Support</li>
            <li>Roadmap</li>
            <li>Terms & Conditions</li>
            <li>24/7 Supports</li>
            <li>On Point FAQ</li>
          </ul>
        </div>

        {/* Column 4: News & Post */}
        <div>
          <h3 className="font-bold text-2xl">News & Post</h3>

          {/* First post */}
          <div className="flex gap-4 pt-7">
            <Image
              src="/footerImage.webp"
              alt="news-1"
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <p className=" space-y-2 text-[#b5b3bc] font-semibold">
                Laboris nisi aliquip dium exiuliym commo cons...
              </p>
              <p className="flex gap-1 items-center space-y-2 text-[#b5b3bc] font-semibold mt-1">
                <Calendar className="w-4 h-4" />
                Aug 21, 2024
              </p>
            </div>
          </div>

          {/* Second post */}
          <div className="flex gap-4 pt-5">
            <Image
              src="/footerImage1.webp"
              alt="news-2"
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <p className="space-y-2 text-[#b5b3bc] font-semibold">
                Laboris nisi aliquip dium exiuliym commo cons...
              </p>
              <p className="flex gap-1 items-center space-y-2 text-[#b5b3bc] font-semibold text-sm mt-1">
                <Calendar className="w-4 h-4" />
                Aug 21, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
       <div className="py-10">
          <hr className="border-t border-gray-700 my-8" />
          <p className="text-center text-[#b5b3bc] font-semibold">
            © Crypto - All Rights Reserved, Crafted by Next.js Templates
          </p>
      </div>
    </div>
  );
};

export default Footer;
