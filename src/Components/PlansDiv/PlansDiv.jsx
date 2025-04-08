import React, { useState } from "react";
import { Check } from "lucide-react";

function PlansDiv() {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (id) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="max-w-[953px] mx-auto">

            <div className="border-2 border-gray-500 w-full h-[40px] flex items-center gap-3 px-4 mt-[20px]">
                <h1 className="text-xl font-bold">No</h1>
                <p className="flex-1">Title</p>
                <h1 className="text-xl font-bold">Archive</h1>
            </div>

            {[1, 2].map((id) => (
                <div
                    key={id}
                    className="border-2 border-gray-500 w-full h-[40px] flex items-center gap-3 px-4 mt-[10px]"
                >

                    <input
                        type="checkbox"
                        id={`checkbox-${id}`}
                        className="hidden peer"
                        checked={checkedItems[id] || false}
                        onChange={() => handleCheckboxChange(id)}
                    />
                    <label
                        htmlFor={`checkbox-${id}`}
                        className={`w-6 h-6 flex items-center justify-center border-2 rounded-md cursor-pointer ${
                            checkedItems[id] ? "bg-green-600 border-green-600" : "bg-gray-300 border-gray-400"
                        }`}
                    >
                        {checkedItems[id] && <Check size={18} className="text-white" />}
                    </label>
                    <h1 className="text-lg font-bold"> {id} </h1>
                    <p className="flex-1">Sample Title</p>
                    <h1 className="text-lg font-bold">Archive</h1>
                </div>
            ))}
        </div>
    );
}

export default PlansDiv;
