import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

export default ({ level, charging }) => (
  <div className="flex flex-col items-center">
    <div className="relative border border-gray-500 border-b-0 w-20 h-8 bg-gray-300">
      <div
        style={{ height: `${level > 0.9 ? ((level - 0.9) * 100) / 0.1 : 0}%` }}
        className="absolute bottom-0 left-0 right-0 bg-green-500"
      ></div>
    </div>
    <div
      className={`flex flex-col items-center justify-center relative border border-gray-500 h-64 w-40 bg-gray-300 ${level >
        0.9 && "border-t-0"}`}
    >
      <div className="z-10">
        {charging && <AiFillThunderbolt className="text-yellow-500" size="50px" />}
      </div>
      <h2 className="z-10 text-white text-2xl">{(level * 100).toFixed(0)}%</h2>
      <div
        style={{ height: `${level > 0.9 ? 100 : (level * 100) / 0.9}%` }}
        className={`absolute bottom-0 left-0 right-0 ${
          level > 0.3 ? "bg-green-500" : "bg-yellow-500"
        } `}
      ></div>
    </div>
  </div>
);
