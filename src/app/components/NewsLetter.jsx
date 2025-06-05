import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#131b4d] py-10 px-6 md:px-10 rounded-2xl shadow-md flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
      {/* Left Side */}
      <div className="w-full md:w-5/6">
        <h2 className="text-white text-3xl  md:text-3xl font-bold mb-2">
          Newsletter
        </h2>
        <p className="text-white text-base md:text-xl">
          Stay updated with the latest crypto trends, market insights, and app
          updates. Subscribe to our newsletter and never miss a beat!
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-5/6 flex flex-col justify-center items-center">
        <form className="w-full max-w-md mx-auto">
          {/* Wrapper */}
          <div className="flex flex-col gap-3 md:relative">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="md:w-[500px] w-full px-5 py-6 max-w-7xl bg-white text-sm text-black outline-none rounded-full shadow-md"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#C5FF4A] text-white px-6 py-3 text-sm font-medium rounded-full md:absolute md:right-[-40px] md:top-1/2 md:-translate-y-1/2 w-[150px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
