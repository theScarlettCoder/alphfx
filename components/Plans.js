import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import style from "../styles/plans.module.css";
import { Data } from "../utils/data";

const Plans = () => {
  const [plan, setPlan] = useState("forex");

  const { Plans } = Data;

  const isPackage = (plans) => {
    return plans.package === plan;
  };

  return (
    <div className="flex flex-col justify-between my-[7rem] w-[70%] mx-auto">
      <h1 className=" flex flex-col text-[#33334d] text-[24px] text-center capitalize mt-[1rem] ">
        Check out Awesome Plans, and order now
        <span className="text-[15px] text-[#88a1ad] text-center capitalize mt-[1rem] font-bold ">
          choose which package is best for you.
        </span>
      </h1>

      <div className="flex flex-col justify-between">
        <div className="selection-tab flex flex-row  bg-[#f3f2f8] p-[.3rem] w-[30%] mx-auto my-[4rem] text-[#b4c3ca] ">
          {["forex", "crypto"].map((data, index) => (
            <div
              key={index}
              className={`text-center p-4 w-[50%] font-bold capitalize ${
                plan === data && style.active
              }`}
              onClick={() => setPlan(data)}
            >
              {data}
            </div>
          ))}
        </div>

        <div className={`plans flex gap-[1rem] justify-between`}>
          {Plans.filter((plans) => isPackage(plans)).map((data, index) => (
            <div
              key={index}
              className={`${index === 2 ? style.plan_last : style.plan}
               flex flex-col`}
            >
              <h2 className="text-[1.3rem] mb-[.8rem] "> {data.plan}</h2>
              <h1 className="text-[2rem] z-10 ">
                ${data.amount}
                <span className="text-[14px] opacity-50 font-normal ">
                  /min
                </span>
              </h1>
              <button
                className={`${
                  index === 2 ? style.button_last : style.button
                } z-10`}
              >
                Choose
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
