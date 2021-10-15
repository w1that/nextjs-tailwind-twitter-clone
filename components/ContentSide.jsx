import React from "react";
import TweetField from "./TweetField";
import TweetsList from "./TweetsList";

function ContentSide() {
  return (
    <div className="w-1/2 border-gray-800 border-l border-r">
      <div className="flex justify-between px-4 pt-4 pb-2 border-b border-gray-800">
        <span className="text-xl text-white font-medium">Anasayfa</span>
        <img className="w-8 mr-2" src="/shine.png"></img>
      </div>
      <TweetField/>
      <TweetsList/>

      
    </div>
  );
}

export default ContentSide;
