import React from "react";

function SuggestionItem({ user }) {
  return (
    <div className="w-full cursor-pointer py-2 px-4 hover:bg-gray-agendahover transition duration-150">
        <div className="px-2 flex items-center">
            <span><img className="rounded-full" width="48px" src={user.image} /></span>
            <div className="flex items-center justify-between px-2 w-full">
                <span>
                    <h3 className="text-white  font-medium">{user.name}</h3>
                    <h3 className="text-white text-gray-text">@{user.username}</h3>
                </span>
                <span>
                    <button className="text-black font-medium px-4 py-1 rounded-full bg-gray-buttonbg">Takip et</button>
                </span>
            </div>
        </div>

    </div>
  );
}

export default SuggestionItem;
