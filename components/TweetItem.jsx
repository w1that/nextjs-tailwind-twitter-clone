import React from "react";

function TweetItem({ user, tweet }) {
  return (
    <div className="px-3 pt-3 pb-1 flex border-b border-gray-700 ">
      <img
        className="rounded-full w-12 h-12 "
        src={user.userImage}
      ></img>
      <div className="px-4 cursor-pointer pb-4">
        <span>
          <label className="font-normal text-white text-lg">{user.name}s</label>
          <label className="font-normal text-white text-gray-text px-1">@{user.username}s</label>
          <label className="font-normal text-white text-gray-text px-1">· {tweet.date}s</label>
        </span>
        <div>
            <label  className="cursor-pointer text-white ">
                {tweet.title}
            </label>
            <img className="rounded-2xl" src={tweet.imagePath}></img>
        </div>
        <div className="pt-4">
        <span className="flex justify-between pr-20 ">
        <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-commentHover"><img className="mx-auto w-5 rounded-full " src="/comment.png"/></span>
        <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-retweetHover"><img className="mx-auto w-5 rounded-full " src="/retweet.png"/></span>
        <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-likeHover"><img className="mx-auto w-5 rounded-full " src="/like.png"/></span>
        <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-commentHover"><img className="mx-auto w-5 rounded-full " src="/share.png"/></span>
        </span>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
