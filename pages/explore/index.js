import React from "react";
import ExploreContent from "../../components/ExploreContent";
import LeftSideMenu from "../../components/LeftSideMenu";
import RightSideMenu from "../../components/RightSideMenu";
import SearchBar from "../../components/SearchBar";
import SuggestionField from "../../components/SuggestionField";
import SuggestionItem from "../../components/SuggestionItem";

function Explore() {
  return (
    <div className="w-4/5 mx-auto h-screen mr-1/2 flex">
      <LeftSideMenu/>
      <ExploreContent/>
      <SuggestionField/>
    </div>
  );
}

export default Explore;
