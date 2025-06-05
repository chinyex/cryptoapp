"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const info = [
  {
    title: "Our location",
    location: "401 Broadway, 24th Floor",
    street: "Orchard Cloud View, London",
  },
  {
    title: "Email Address",
    email: "info@yourdomain.com",
    email2: "contact@yourdomain.com",
  },
  {
    title: "Phone Number",
    number: "+990 846 73644",
    number2: "+550 9475 4543",
  },
  {
    title: "How Can We Help?",
    description: `Tell us your problem we will get back to you ASAP.`,
  },
];

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("/api/contact", formData);

      if (res.status === 200) {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => setStatus(""), 3000);
      } else {
        toast.dismiss();
        toast.error("Server error. Please try again later.");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error sending message.");
      setTimeout(() => setStatus(""), 3000);
    }
  };
  return (
    <section className="px-7 bg-[#14102c] py-36 pt-20 md:pt-0">
      <div className="max-w-8xl py-20 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h2 className="font-semibold text-[#C5FF4A] text-xl md:text-2xl ">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Let's talk about your problem.
          </h3>
          {/* Two per row on md screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-3/4">
            {info.map((item, index) => (
              <div key={index} className="">
                <h3 className="font-bold text-white text-lg md:text-xl mt-5">
                  {item.title}
                </h3>
                {item.location && (
                  <>
                    <p className="text-base font-semibold text-[#b5b3bc] mt-2">
                      {item.location}
                    </p>
                    <p className="text-base font-semibold text-[#b5b3bc]">
                      {item.street}
                    </p>
                  </>
                )}
                {item.email && (
                  <>
                    <p className="text-base font-semibold text-[#b5b3bc] mt-2">
                      {item.email}
                    </p>
                    <p className="text-base font-semibold text-[#b5b3bc]">
                      {item.email2}
                    </p>
                  </>
                )}
                {item.number && (
                  <>
                    <p className="text-base font-semibold text-[#b5b3bc] mt-2">
                      {item.number}
                    </p>
                    <p className="text-base font-semibold text-[#b5b3bc]">
                      {item.number2}
                    </p>
                  </>
                )}
                {item.description && (
                  <p className="text-base font-semibold text-[#b5b3bc] w-[50%] md:w-[90%]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#131b4d] text-white p-6 rounded-xl mt-12 w-full lg:max-w-xl max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold">Full Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name "
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded text-white bg-transparent border outline-none border-[#b5b3bc]"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email Address*</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded text-white bg-transparent border outline-none border-[#b5b3bc]"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message*</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full  p-3 rounded text-white bg-transparent border outline-none border-[#b5b3bc]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4  cursor-pointer w-full bg-white text-black font-semibold py-3 rounded-full"
            >
              Send Message
            </button>
            <p className="text-sm mt-2">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
