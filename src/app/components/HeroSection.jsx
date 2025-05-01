import Image from "next/image";
import React from "react";

const Images = [
  "/uideck-white.svg",
  "/TailGrids-white.svg",
  "/LineIcons-white.svg",
  "/AyroUI-white.svg",
  "/PlainAdmin-white.svg",
];
const HeroSection = () => {
  return (
    <>
      <section className="p-4 py-36 max-w-[800px] mx-auto  ">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold text-center flex flex-col items-center justify-center">
            Next.js Template and Boilerplate for Crypto, ICO and Web3
          </h1>
          <p
            className="text-center pt-6 text-lg p-8
          "
          >
            A Next.js website template for Crypto Currency, Blockchain, ICO, and
            Web3, meticulously styled with Tailwind CSS. This boilerplate
            includes essential integrations, UI components, pages, and enabling
            you to launch a comprehensive website or landing page for anything
            related to Crypto, Blockchain, and Web3.
          </p>
          <div className="flex justify-center items-center gap-4 pt-6 p-4">
            <Image
              src="/btc.jpeg"
              alt=""
              width={40}
              height={10}
              className="border border-white rounded-full  "
            />
            <Image
              src="/btc2.jpeg"
              alt=""
              width={40}
              height={10}
              className="border border-white rounded-full  "
            />
            <Image
              src="/btc3.png"
              alt=""
              width={40}
              height={10}
              className="border border-white rounded-full  "
            />
            <Image
              src="/btc4.jpeg"
              alt=""
              width={40}
              height={10}
              className="border border-white rounded-full  "
            />
            <Image
              src="/btc5.jpeg"
              alt=""
              width={40}
              height={10}
              className="border border-white rounded-full  "
            />
            <Image
              src="/btc6.jpeg"
              alt=""
              width={40}
              height={10}
              className="border border-white rounded-full  "
            />
          </div>
          <div className="flex justify-center items-center gap-4 pt-6 p-4">
            <button className="bg-[#C5FF4A] w-fit text-white rounded-full px-[32px] py-[12px]">
              Buy Tokens 47% Off
            </button>
          </div>
        </div>
        {/* Icons */}
      </section>
      <section className="pb-[80px]">
        <div className=" flex flex-col items-center justify-center px-6">
          <hr className="border-t border-gray-400 w-full mx-auto mb-16" />
          <p className="text-white text-base md:text-2xl font-semibold  ">
            Join the 20,000+ companies using the our platform
          </p>
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-8 pt-6  w-full max-w-8xl mx-auto px-4">
            {Images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={image}
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-auto "
                />
              </div>
            ))}
          </div>
          <hr className="border-t border-gray-400 w-full mx-auto mt-16" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
