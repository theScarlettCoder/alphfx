import Image from "next/image";
import React from "react";
import style from "../styles/support.module.css";

const Support = () => {
  return (
    <section className={style.support}>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full max-h-[200px]">
        <Image src="" width={100} alt="support bg" />
      </div>
      <div className="container flex  w-[70%] mx-auto">
        <div className="flex-1">
          <h2>We are with you , every step of the way</h2>
          <p>
            Our platforms are fast and our signals are accurate, we give you
            live data on the market.
            <b>
              Our approach to brokage isn&apos;t fixed, we grow our business to
              suit you.
            </b>
            Simplicity is key, that&apos;s why we have done all the hard job so
            you can trade without stress.
          </p>
          <p>
            <button className={style.support_button}>start with us now</button>
          </p>
        </div>
        <div className="flex-1">Hover Div</div>
      </div>
    </section>
  );
};

export default Support;
