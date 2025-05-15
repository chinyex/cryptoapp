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
    <div className="bg-[#14102c] py-16">
      <div className="text-center justify-center items-center p-6">
        <h3 className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
          TESTIMONIALS
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          What Our Client Say's
        </h2>
        <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl md:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-[#131b4d] p-10 rounded-xl shadow-md h-auto ">
            <div className="flex items-center gap-2 mb-4 ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-xl leading-tight">{testimonial.name}</h3>
                <p className="font-medium">{testimonial.position}</p>
              </div>
            </div>
            <p className="mt-4 text-[#b5b3bc] text-md md:text-lg ">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
