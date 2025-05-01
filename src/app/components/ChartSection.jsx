"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Financial Overhead", value: 73 },
  { name: "Bonus & Found", value: 55 },
  { name: "IT Infrastructure", value: 38 },
  { name: "Gift Code Inventory", value: 20.93 },
];

const dataInfo = [
  { percentage: "73%", label: "Financial Overhead", iconColor: "#F7931A" }, // Orange
  { percentage: "55%", label: "Bonus & Found", iconColor: "#4CAF50" }, // Green
  { percentage: "38%", label: "IT Infrastructure", iconColor: "#2196F3" }, // Blue
  { percentage: "20.93%", label: "Gift Code Inventory", iconColor: "#9C27B0" }, // Purple
];

const COLORS = ["#2347B9", "#8696CA", "#3363FF", "#0088FE"];

// Function to show percentage labels
const renderCustomizedLabel = ({ percent }) => {
  return `${(percent * 100).toFixed(0)}%`;
};

const ChartSection = () => {
  return (
    <>
    <section className="px-6 md:px-10 lg:px-16 py-16">
      <div className="bg-[#14102c] rounded-lg max-w-7xl mx-auto px-6 py-10 md:px-10 md:py-14 lg:px-20 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Chart Section */}
        <div className="w-full max-w-md">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Text Section */}
        <div className="text-white lg:text-left max-w-xl">
          <span className="font-semibold text-[#C5FF4A] text-xl md:text-2xl">
            TOKEN
          </span>
          <h3 className="text-3xl md:text-4xl font-bold">Token Sale </h3>
          <p className="mt-4 text-[#b5b3bc] text-lg md:text-xl">
            We’ve carefully allocated our token distribution to prioritize
            financial operations, bonuses for early supporters, robust IT
            infrastructure, and a reliable gift code inventory.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            {dataInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: item.iconColor }}
                ></div>
                <p className="text-white font-medium">
                  {item.percentage} - {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h4>Feb 25, 2025</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel</p>
        <button></button>
      </div>
    </section>
    </>
  );
};

export default ChartSection;
