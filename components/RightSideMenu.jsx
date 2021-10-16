import React from 'react'
import Agenda from './Agenda'
import SearchBar from './SearchBar'

function RightSideMenu() {
    return (
        <div className="sm:w-1/4 w-full ">
            <div className="m-0 sm:ml-8">
                <SearchBar/>
                <Agenda title="Ece Mumay" tweet={1447}/>
            </div>
        </div>
    )
}

export default RightSideMenu
