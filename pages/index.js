import Head from "next/head";
import Image from "next/image";
import ContentSide from "../components/ContentSide";
import LeftSideMenu from "../components/LeftSideMenu";
import RightSideMenu from "../components/RightSideMenu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto mr-1/2 flex">
      <LeftSideMenu></LeftSideMenu>
      <ContentSide></ContentSide>
      <RightSideMenu></RightSideMenu>
    </div>
  );
}
