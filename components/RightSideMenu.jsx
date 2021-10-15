import React from 'react'
import Agenda from './Agenda'
import SearchBar from './SearchBar'

function RightSideMenu() {
    return (
        <div className="w-1/4 ">
            <div className="ml-8">
                <SearchBar/>
                <Agenda title="Ece Mumay" tweet={1447}/>
                
            </div>
        </div>
    )
}

export default RightSideMenu
