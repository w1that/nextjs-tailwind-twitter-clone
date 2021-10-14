import React from 'react'

function LeftSideItem({title}) {
    return (
        <div>
            <h2 className="cursor-pointer text-2xl text-gray-twitter py-3 font-normal rounded-full" ><span className=" py-2 px-4 rounded-full hover:bg-menuItem-hover">{title}</span></h2>
            {/** seçiliyse font-bold */}
        </div>
    )
}

export default LeftSideItem
