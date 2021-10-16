import React, { useState } from 'react'

function SearchBar() {

    const [input, setInput] = useState('')
    const [focused, setFocused] = useState(false)
    
    return (
        <div className={`${focused?'bg-black border border-twitterblue-default':'bg-gray-searchbarBack'}  flex items-center rounded-full h-12 mt-2`}>
        <div className="pl-4">
            <img  width="25px" src="/search.png"></img>
        </div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} onBlur={()=>setFocused(false)} onFocus={()=>setFocused(true)} className={`${focused?'bg-black':'bg-gray-searchbarBack'} text-white py-2 px-4 w-4/6 focus:outline-none  }`}></input>
        {input&&<span className="w-5 ml-7 h-5 flex bg-twitterblue-default justify-center cursor-pointer items-center hover:bg-twitterblue-hover rounded-full" onClick={()=>setInput('')}><img width="25px" src="/cross.png"/></span>}
        </div>
    )
}

export default SearchBar
