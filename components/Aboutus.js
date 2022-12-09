import React from "react";
import style from "../styles/aboutus.module.css";
import * as Data from "../utils/data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
// import { AdvancedChart } from "react-tradingview-embed";

const Aboutus = () => {
  const { Legend } = Data.Data;

  const [counterOn, setCounterOn] = useState(false);

  console.log(Legend);
  return (
    <div className={`${style.aboutus} relative  `}>
      <div className="w-[70%] mx-auto py-[50px]">
        <div className="flex gap-[2rem] justify-center items-center ">
          <div className="chart flex-1 w-[20vh]">
            {/* <AdvancedChart widgetProps={{ style: { height: "400px" } }} /> */}
          </div>
          <div className="about_text flex-1 text-white">
            <div className=" flex flex-col text-right gap-[1rem] ">
              <h3 className="text-base mb-[.5rem] font-medium">
                alphfxtrading
              </h3>
              <h2 className="text-6xl text-[#ffc107] font-semibold mb-[.5rem]">
                more about us
              </h2>
              <p className="mb-[2rem] text-[14px] ">
                With our all New strategy on bitcoin and forex trades, we make
                up to 98% daily wins, we also have a bitcoin mining team working
                with our platform. We generate a profit of 3BTC daily which
                equals $47,686 in today's market. Our company is SEC registered,
                fully licensed and Insured, your initial capital invest is 100%
                insured
              </p>
            </div>
            <div className="legend_count flex flex-row">
              {Legend.map((legend, index) => (
                <div key={index} className="flex-1 max-w-[33.33%]">
                  <div className="flex justify-end items-center gap-[.5rem]">
                    <span className="text-[36px] text-[#ffeb3b] font-bold">
                      <ScrollTrigger
                        onEnter={() => setCounterOn(true)}
                        onExit={() => setCounterOn(false)}
                      >
                        {counterOn && (
                          <CountUp start={0} end={legend.number} duration={3} />
                        )}
                      </ScrollTrigger>
                    </span>
                    {legend.image}
                  </div>
                  <h6 className="text-right uppercase"> {legend.details} </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
