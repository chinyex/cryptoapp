"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    try {
      const response = await axios.post("/api/register", formData);
      alert(response.data.message || "Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreeToTerms: false,
      });
      // Optionally reset form or redirect user here
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        alert(error.response.data.message || "Registration failed");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
  const [signupMode, setSignupMode] = React.useState("magic");
  return (
    <div className="min-h-screen bg-[#080321] text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-between px-4 py-40 md:py-52">
        {/* Card */}
        <div className="bg-[#131b4d] rounded-2xl shadow-lg max-w-md w-full p-8 text-center ">
          <h2 className="text-2xl font-bold mb-7">Create your account</h2>
          <p className=" text-[#b5b3bc] mb-6">
            It&apos;s totally free and super easy
          </p>
          {/* Sign up with Google */}
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full gap-3 bg-[#1f2656]  font-semibold py-2 rounded-full  mb-5"
          >
            <Image
              src="/Google.png"
              alt="Google Icon"
              width={30}
              height={30}
              className="text-2xl bg-[#1f2656] rounded-full"
            />
            <span>Sign up with Google</span>
          </button>
          <p className="text-[#b5b3bc] mb-4">Or, register with your email</p>

          <div className="bg-transparent border outline-none border-[#b5b3bc] rounded-xl p-3 flex justify-between items-center mb-6 gap-2">
            <button
              className={`w-1/2 py-2 font-semibold rounded-md transition ${
                signupMode === "magic"
                  ? "bg-[#C5FF4A] text-[#080321]"
                  : "bg-[#1f2656] text-white"
              }`}
              onClick={() => setSignupMode("magic")}
            >
              Magic Link
            </button>
            <button
              className={`w-1/2 py-2 font-semibold rounded-md transition ${
                signupMode === "password"
                  ? "bg-[#C5FF4A] text-[#080321]"
                  : "bg-[#1f2656] text-white"
              }`}
              onClick={() => setSignupMode("password")}
            >
              Password
            </button>
          </div>

          {signupMode === "magic" ? (
            <>
              {/* Magic link signup */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 text-white bg-transparent border outline-none border-[#b5b3bc] rounded-full"
              />
              <button className="w-full bg-[#C5FF4A] text-[#080321] font-semibold py-4 rounded-full mt-8">
                Send Magic Link
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Password signup */}

              <p className="flex flex-start text-white font-semibold ml-2 pb-2">
                First name
              </p>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-white bg-transparent border outline-none border-[#b5b3bc] rounded-full"
              />
              <p className="flex flex-start text-white font-semibold ml-2 pb-2">
                Last name
              </p>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-white bg-transparent border outline-none border-[#b5b3bc] rounded-full"
              />
              <p className="flex flex-start text-white font-semibold ml-2 pb-2">
                email
              </p>
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-white bg-transparent border outline-none border-[#b5b3bc] rounded-full"
              />
              <p className="flex flex-start text-white font-semibold ml-2 pb-2">
                Password
              </p>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-white bg-transparent border outline-none border-[#b5b3bc] rounded-full"
              />
              <div className="flex items-start space-x-2 text-sm text-[#b5b3bc] mb-4">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p>
                  By creating an account, you agree to the{" "}
                  <a href="#" className="underline text-[#C5FF4A]">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline text-[#C5FF4A]">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {error && (
                <p className="mb-4 text-red-500 font-semibold text-center">
                  {error}
                </p>
              )}
              {successMsg && (
                <p className="mb-4 text-green-500 font-semibold text-center">
                  {successMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C5FF4A] text-[#080321] font-semibold py-4 rounded-full"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          )}
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
