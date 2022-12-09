import Head from "next/head";
import Image from "next/image";
import Aboutus from "../components/Aboutus";
import Layout from "../components/Layout";
import Plans from "../components/Plans";
import Process from "../components/Process";
import Support from "../components/Support";
import Video from "../components/Video";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="flex flex-col gap-[3rem] min-h-full z-10 mt-[10%]">
        <Video />
        <Process />
        <Plans />
        <Aboutus />
        <Support />
      </div>
    </Layout>
  );
}
