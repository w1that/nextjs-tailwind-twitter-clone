import React from "react";

function AgendaItem({title, tweet}) {
  return (
      <div className="w-full cursor-pointer py-2 px-4 hover:bg-gray-agendahover transition duration-150">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-text">Türkiye konumunda gündemde</span>
          <span className="w-6 h-6 rounded-full hover:bg-commentHover flex items-center">
            <img width="15px" className="opacity-70 mx-auto" src="dots.png" />
          </span>
        </div>
        <div>
          <h4 className="text-gray-twitter font-bold">#{title}</h4>
        </div>
        <div>
          <h5 className="text-gray-text text-sm">{tweet} Tweet</h5>
        </div>
      </div>
  );
}

export default AgendaItem;
