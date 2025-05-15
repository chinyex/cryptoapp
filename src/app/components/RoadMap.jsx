import React from "react";
import { ArrowUp  } from "lucide-react";
import { Bitcoin } from "lucide-react";
import Image from "next/image";

const roadmapData = [
  {
    time: "Mar 23, 2024",
    title: "Launch Platform",
    description:
      "We launched our beta platform with core features ready for early users to test.",
    icon: "/img1.png",
    coinLabel: "Bitcoin",
    percentage: "4.5%",
  },
  {
    time: " Jun 9, 2028",
    title: "Expand Infrastructure",
    description:
      "Our servers were upgraded to support global users across multiple regions.",
    icon: "/img2.png",
    coinLabel: "Ethereum",
    percentage: "3.2%",
  },
  {
    time: "Apr 29, 2029",
    title: "Partnerships",
    description:
      "Partnered with fintech companies to integrate more payment gateways.",
    icon: "/img3.jpeg",
    coinLabel: "Binance",
    percentage: "5.1%",
  },
  {
    time: "Dec 4, 2025",
    title: "Mobile App",
    description:
      "Released Android & iOS apps with all platform features optimized for mobile.",
    icon: "/img4.jpeg",
    coinLabel: "Solana",
    percentage: "2.8%",
  },
  {
    time: "Sep 11, 2027",
    title: "DeFi Integration",
    description:
      "We integrated with DeFi protocols to enable decentralized transactions.",
    icon: "/img5.jpeg",
    coinLabel: "Polygon",
    percentage: "3.9%",
  },
  {
    time: "Aug 3, 2028",
    title: "Global Community",
    description:
      "Launched ambassador programs and educational content in multiple languages.",
    icon: "/img6.jpeg",
    coinLabel: "Litecoin",
    percentage: "2.2%",
  },
];

const RoadMap = () => {
  return (
    <section>
      <div className="text-center justify-center items-center p-6">
        <span className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
          ROADMAP
        </span>
        <h4 className="text-3xl md:text-4xl font-bold">The Timeline</h4>
        <p className="mt-4 text-[#b5b3bc] text-base md:text-lg md:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <section className="px-6 md:px-10 lg:px-16 py-16 relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

          <div className="flex flex-col gap-12">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`relative bg-[#131b4d]/80 text-white p-6 rounded-lg w-full md:w-[48%] ${
                  index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                }`}
              >
                {/* Dot at intersection */}
                <div
                  className="hidden md:block absolute top-6 w-4 h-4 bg-[#C5FF4A] rounded-full border-4 border-[#14102c]"
                  style={{
                    left: index % 2 === 0 ? "-1.25rem" : "auto",
                    right: index % 2 !== 0 ? "-1.25rem" : "auto",
                  }}
                ></div>

                <p className="text-sm text-[#C5FF4A] font-medium">
                  {item.time}
                </p>
                <h4 className="text-2xl font-semibold mt-1">{item.title}</h4>
                <p className="mt-2 mb-5 text-[#c9c9d1] text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Coin Button */}
                <button className="bg-white text-[#b5b3bc] text-sm px-3 py-2 flex items-center gap-2 w-fit rounded-full ">
                  <Image
                    src={item.icon}
                    alt={item.coinLabel}
                    width={16}
                    height={16}
                  />
                  <span className
                  ="text-sm">{item.coinLabel}</span>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    {item.percentage}
                    <ArrowUp className="text-[10px]" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
      <div className="text-center justify-center items-center p-6">
        <span className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
        OUT TEAM
        </span>
        <h4 className="text-3xl md:text-4xl font-bold">Meet out Team</h4>
        <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl md:w-[60%] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>
      </section>
    </section>
  );
};

export default RoadMap;
