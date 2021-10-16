import React, { useState } from "react";
import MobileSideMenu from "./MobileSideMenu";
import ShiningInfo from "./ShiningInfo";
import TweetField from "./TweetField";
import TweetsList from "./TweetsList";

function ContentSide() {

  const [isShining, setIsShining] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)
  function shineClickHandler(){
    setIsShining(!isShining)
  }

  function sideMenuHandler(){
    setSideMenu(!sideMenu)
  }

  return (
    <div className=" border-gray-800 border-l border-r w-full sm:w-1/2 ">
      <div className="flex justify-between  items-center px-4 pt-2 sm:pt4  pb-2 border-b border-gray-800 cursor-pointer">
      <img onClick={sideMenuHandler}
        className="rounded-full w-10 h-10 inline sm:hidden"
        src="https://pbs.twimg.com/profile_images/1322852753706639362/7djDp5aC_400x400.png"
      ></img>
      {sideMenu?<div><MobileSideMenu/><input className="z-10"></input></div>:''}
        <span className="text-xl text-white font-medium">Anasayfa</span>
        <span onClick={shineClickHandler} className="hover:opacity-60"><img className="w-8 mr-2 ml-4" src="/shine.png"></img></span>
        {isShining&&<div onBlur={()=>setIsShining(false)} className="w-full text-white relative"><ShiningInfo></ShiningInfo></div>}
        
      </div>
      
      <TweetField/>
      <TweetsList/>

      
    </div>
  );
}

export default ContentSide;
