import React from "react";
import green from "./../../img/icon-park-solid_plan.png";
import red from "./../../img/ant-design_delete-filled.png";

function PlansDay() {
    return (
        <div className="max-w-[953px] mx-auto">
            <div className="flex items-center justify-between mt-[50px]">
                {/* Plans */}
                <div>
                    <div className="bg-green-600 w-[395px] h-[5px]"></div>
                    <div className="flex items-center justify-center pt-[10px] gap-2">
                        <img src={green} alt="Plans" className="w-6 h-6" />
                        <h1 className="text-2xl font-bold">Plans</h1>
                    </div>
                </div>

                {/* Archive Plans */}
                <div>
                    <div className="bg-red-600 w-[395px] h-[5px]"></div>
                    <div className="flex items-center justify-center pt-[10px] gap-2">
                        <img src={red} alt="Archive Plans" className="w-6 h-6" />
                        <h1 className="text-2xl font-bold">Archive Plans</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlansDay;
