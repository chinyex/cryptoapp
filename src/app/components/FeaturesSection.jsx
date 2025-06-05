import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/img1.png", // or you can import a React icon
    title: "Secure Platform",
    description:
      "Our platform is built with advanced encryption protocols and security audits to ensure your assets and data are fully protected from threats.",
  },
  {
    icon: "/img2.png",
    title: "Fast Transactions",
    description:   "We use cutting-edge blockchain technology to guarantee lightning-fast processing of all your crypto transactions without delays.",
  },
  {
    icon: "/img3.jpeg",
    title: "Global Access",
    description: "Trade anywhere in the world, at any time, without limits.",
  },
  {
    icon: "/img4.jpeg",
    title: "Multiple Currencies",
    description: 
    "Connect and trade with users worldwide. Our platform is accessible from anywhere, anytime—giving you true global financial freedom.",
  },
  {
    icon: "/img5.jpeg",
    title: "Real-Time Stats",
    description:
      "Stay on top of your assets with powerful dashboards that provide real-time analytics, market trends, and performance tracking.",
  },
  {
    icon: "/img6.jpeg",
    title: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any inquiries, technical issues, or account-related questions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-10">
      <div className="flex flex-col items-center justify-center p-4 text-center max-w-[650px] mx-auto">
        <span className="text-[#C5FF4A] font-semibold text-lg md:text-2xl">
          CRYPTO FEATURE
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Best Features
        </h2>
        <p className="text-[#b5b3bc] text-lg md:text-xl pt-2  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[1300px] mx-auto mt-6">
        {features.map((feature, index) => (
          <div
            className="flex flex-col items-center justify-center p-4 text-center "
            key={index}
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={80}
              height={50}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-[#b5b3bc] text-base font-medium sm:text-lg lg:text-base xl:text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
