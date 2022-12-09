import Image from "next/image";
import React from "react";
import Deposit from "../public/images/background/bg-9.jpg";
import style from "../styles/process.module.css";

const Process = () => {
  const process = [
    {
      image: "",
      title: "Deposit",
      description:
        "Deposit funds into your real account and start earning, we support several payment methods and accept bitcoin.",
    },
    {
      image: "",
      title: "Trade",
      description:
        "Trade on several assets upto 200 stocks and also crypto trading.",
    },
    {
      image: "",
      title: "Withdraw",
      description:
        "Get instant withdraw of profits processed to your accounts within 2 business days.",
    },
  ];

  // console.log(process);
  return (
    <div className={`flex gap-5 -mt-[1rem] w-[70%] mx-auto`}>
      {process.map((data, index) => (
        <div
          key={index}
          className={`flex-1 bg-white p-7 rounded-lg  border-solid border-2 border-#eaeef1] `}
        >
          <Image src="" alt="Deposit" width={50} height={50} />
          <h2>{data.title}</h2>
          <p> {data.description} </p>
        </div>
      ))}
    </div>
  );
};

export default Process;
