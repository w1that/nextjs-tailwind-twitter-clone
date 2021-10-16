import React from 'react'
import Agenda from './Agenda'
import ExploreAgenda from './ExploreAgenda'
import SearchBar from './SearchBar'

function ExploreContent() {
    return (
        <div className="w-1/2  border-gray-800 border-l border-r">
        <div className="flex justify-between items-center">
          <div className="w-full pl-5 pr-10 mb-2">
            <SearchBar/>
          </div>
          <span className="mr-3">
            <img width="30px" src="/settings.png" />
          </span>
        </div>

        <div className="w-full relative ">
        <img className="w-full " src="https://pbs.twimg.com/semantic_core_img/1255910073831788550/xm0-QtpW?format=jpg&name=small" />
        <div className="absolute z-10 backdrop-filter backdrop-brightness-50 w-full bottom-0 text-white p-4 ">
        <h4 >Covid-19-CANLI</h4>
        <h4 className="text-2xl">Türkiye'de Covid-19 ile ilgili güncel gelişmeler</h4></div>
        </div>

        <ExploreAgenda/>
        
      </div>
    )
}

export default ExploreContent
