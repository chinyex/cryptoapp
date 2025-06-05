"use client";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can i participate in the ICO Token sale?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
  },
  {
    question: "What is ICO crypto?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
  },
  {
    question: "How do i benefit from ICO Token?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
  },
  {
    question: "How can i purchase bitcoin?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-[#14102c] py-16">
      <div className="text-center justify-center items-center p-6">
        <h3 className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
          FAQ
        </h3>
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-3">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl md:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div>
        <div className="px-6 md:px-10 lg:w-[80%] mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-[#131b4d] p-6 shadow-md"
            >
              <div
                onClick={() => toggleOpen(index)}
                className="faq-question flex justify-between cursor-pointer"
              >
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                <span className="text-[#C5FF4A] text-xl md:text-2xl font-semibold">
                  {openIndex === index ? <ChevronUp className="bg-gray-200 rounded-md text-black justify-center items-center"/> : <ChevronDown className="bg-gray-200 rounded-md text-black w-5 flex justify-center items-center"/>}
                </span>
              </div>

              {openIndex === index && (
                <div className="faq-answer mt-4">
                  <p className="text-[#b5b3bc] text-base md:text-md">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
