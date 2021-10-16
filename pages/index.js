import Head from "next/head";
import Image from "next/image";
import ContentSide from "../components/ContentSide";
import LeftSideMenu from "../components/LeftSideMenu";
import MobileBottomMenu from "../components/MobileBottomMenu";
import RightSideMenu from "../components/RightSideMenu";
import styles from "../styles/Home.module.css";



export default function Home({datas}) {
  return (
    <div className="w-full mb-10 sm:mb-0 sm:w-4/5 mx-auto mr-1/2 sm:flex">
      <LeftSideMenu></LeftSideMenu>
      <ContentSide></ContentSide>
      <RightSideMenu></RightSideMenu>
      <MobileBottomMenu></MobileBottomMenu>
    </div>
  );
}

