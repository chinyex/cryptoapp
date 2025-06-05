import Image from "next/image";
import React from "react";

const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO & Founder @ Dreampeet.",
    testimonial:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
    image: "/M00.webp",
  },
  {
    name: "Jane Smith",
    position: "CEO & Founder @ Betex.",
    testimonial:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
    image: "/M01.webp",
  },
  {
    name: "Alice Johnson",
    position: "Investor, Crypto Inc.",
    testimonial:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
    image: "/M02.webp",
  },

  {
    name: "Charlie Davis",
    position: "Developer, Tech Solutions.",
    testimonial:
      "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.",
    image: "/M03.webp",
  },
];
const TestimonialSection = () => {
  return (
    <>
    
      <div className="bg-[#14102c] py-16">
        <div className="text-center justify-center items-center p-6">
          <h3 className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
            TESTIMONIALS
          </h3>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-3">
            What Our Client Say's
          </h2>
          <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl md:w-[60%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#131b4d] p-10 rounded-xl shadow-md h-auto "
            >
              <div className="flex items-center gap-2 mb-4 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div >
                  <h3 className="font-semibold text-xl leading-tight text-white">
                    {testimonial.name}
                  </h3>
                  <p className=" text-[#b5b3bc]">{testimonial.position}</p>
                </div>
              </div>
              <p className="mt-4 text-[#b5b3bc] text-md md:text-lg ">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* App section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-8 lg:gap-0">
        {/* Left Section */}
        <div className="bg-[#14102c] p-6 md:p-10 lg:w-1/2 flex flex-col justify-center rounded-lg">
          <h2 className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
            Download Our App
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            The choice is yours, we've got you covered
          </h3>
          <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl lg:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et
            pretium quam mi a eros sed molestie est.
          </p>
          <div className="flex flex-row gap-4 mt-8 flex-wrap">
            <button className="text-xl font-medium rounded-full px-5 py-3 bg-[#2D2947]/90 flex items-center gap-2 mt-4 text-white">
              <span className="rounded-full text-base font-semibold">
                <Image
                  src="/apple-logo.jpeg"
                  alt="apple"
                  width={40}
                  height={24}
                  className="rounded-full bg-[#C5FF4A] p-2"
                />
              </span>
              App store
            </button>
            <button className="text-xl font-medium rounded-full px-5 py-3 border-[0.5px] border-[#b5b3bc] flex items-center gap-2 mt-4 text-white hover:bg-[#2D2947]/90">
              <span className="rounded-full ">
                <Image
                  src="/apple-logo.jpeg"
                  alt="apple"
                  width={40}
                  height={24}
                  className="rounded-full bg-white p-2"
                />
              </span>
              Play store
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2 w-full">
          <Image
            src="/crypto-image.png"
            alt="crypto"
            width={1200}
            height={1000}
            className="rounded-lg object-cover w-full h-full max-h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
