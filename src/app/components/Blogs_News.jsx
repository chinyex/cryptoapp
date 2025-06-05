import React from "react";
import { UserRound, CalendarDays } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    image: "/Bitcoin.jpeg",
    author: "Chinenye Cyprian",
    date: "May 30, 2025",
    title: "How I Built My First Crypto Wallet App",
    description:
      "A simple walkthrough of creating a secure authentication system for a crypto wallet using Next.js and MongoDB.",
  },

  {
    image: "/macbook3.jpeg",
    author: "Julian Alvarez",
    date: "Dec 12, 2029",
    title: "Understanding Web3 Authentication",
    description:
      "Learn how crypto apps use MetaMask and other wallets for login without email or passwords.",
  },

  {
    image: "/macbook1.jpeg",
    author: "Patrick Smith",
    date: "Jan 23, 2028",
    title: "Tracking Real-Time Crypto Prices",
    description:
      "Here, you will learn the usage of APIs to fetch and display live crypto prices in your frontend app built with Next.js.",
  },
];

const Blogs_News = () => {
  return (
    <div className=" py-16">
      <div className="text-center justify-center items-center p-6">
        <h3 className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
          LATEST NEWS
        </h3>
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-3">
          Recent News & Blogs
        </h2>
        <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl md:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#131b4d] rounded-xl shadow-md overflow-hidden  flex flex-col gap-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="rounded-lg object-cover max-h-[200px] w-full"
              />
              <div className="p-4">
                <div className="flex items-center gap-4 mt-4 text-sm text-white">
                  <div className="flex items-center gap-1">
                    <UserRound className="w-5 h-5" />
                    <span className="text-lg leading-loose text-[#b5b3bc]">{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-5 h-5" />
                    <span className="text-lg leading-loose text-[#b5b3bc]">{blog.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold sm:text-2xl lg:text-lg xl:text-2xl  text-white hover:text-[#C5FF4A] mt-3">
                  {blog.title}
                </h3>
                <p className=" mt-3 text-base leading-loose font-medium text-[#b5b3bc]">{blog.description}</p>
                <button className="mt-4 w-fit bg-white text-black px-8 py-3 text-base text-center font-semibold rounded-full transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs_News;
