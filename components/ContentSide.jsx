import React, { useState } from "react";
import ShiningInfo from "./ShiningInfo";
import TweetField from "./TweetField";
import TweetsList from "./TweetsList";

function ContentSide() {

  const [isShining, setIsShining] = useState(false)

  function shineClickHandler(){
    setIsShining(!isShining)
  }

  return (
    <div className="w-1/2  border-gray-800 border-l border-r">
      <div className="flex justify-between px-4 pt-4 pb-2 border-b border-gray-800 cursor-pointer">
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
