import React from "react";
import { useDispatch,useSelector } from "react-redux";

const Calculator =()=>{
    const result = useSelector(state => state.Calculator.value)
    const dispatch = useDispatch
}
const buttons = [
  ["AC", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
];

export default function Calculator() {
  return (
    <div className="w-[240px] mx-auto mt-10 bg-gray-800 rounded-xl overflow-hidden">
      <div className="text-white text-right text-4xl p-4 bg-gray-900">0</div>
      <div className="grid grid-cols-4 gap-[1px] bg-gray-700">
        {/* First 4 rows */}
        {buttons.slice(0, 4).flat().map((btn, i) => (
          <button
            key={i}
            className={`text-white text-xl h-16 ${
              ["÷", "×", "−", "+"].includes(btn)
                ? "bg-orange-500"
                : "bg-gray-600"
            }`}
          >
            {btn}
          </button>
        ))}

        {/* Last row with wide 0 button */}
        <button className="col-span-2 bg-gray-600 text-white text-xl h-16">0</button>
        <button className="bg-gray-600 text-white text-xl h-16">,</button>
        <button className="bg-orange-500 text-white text-xl h-16">=</button>
      </div>
    </div>
  );
}
