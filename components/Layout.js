import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Particle from "./Particle";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title ? title + " - Alphfxtrading" : "Alphafxtrading"} </title>
        <meta name="description" content="Crypto Investment Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between  z-50 relative ">
        <Nav />

        {children}

        <footer className="w-[80%] mx-auto mt-[100vp] h-auto z-50">
          <Footer></Footer>
        </footer>
      </div>
      <Particle />
    </>
  );
};

export default Layout;
