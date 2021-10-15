import React, { useState } from "react";

function TweetField() {
  const [textAreaFocus, setTextAreaFocus] = useState(false);
  const [input, setInput] = useState("")
  const [inputLength, setInputLength] = useState(0)

  function inputChangeHandler(e){
    setInput(e.target.value)
    setInputLength(e.target.value.length)
    console.log(inputLength)
  }
  return (
    <div className="px-3 pt-3 pb-1 flex border-b border-gray-700 ">
      <img
        className="rounded-full w-12 h-12 "
        src="https://pbs.twimg.com/profile_images/1322852753706639362/7djDp5aC_400x400.png"
      ></img>
      <div className="px-2 w-full">
        <textarea
          onFocus={() => setTextAreaFocus(true)}
          onChange={inputChangeHandler}
          rows="2"
          className="bg-black resize-none text-white  w-full  pt-2 px-4 text-xl outline-none"
          placeholder="Neler oluyor?"
        ></textarea>
        {textAreaFocus && (
          <span className="flex items-center border-b py-2 border-gray-700">
            <img className="w-4 h-4 mr-2" src="/worldwide.png"></img>
            <label className="text-twitterblue-default cursor-pointer">
              Herkes yanıtlayabilir
            </label>
          </span>
        )}

        <div className="text-twitterblue-default flex items-center justify-between py-2">
            <div className="flex"><span className="cursor-pointer py-1 rounded-full hover:bg-gray-hover"><img width="25px" src="/gallery.png" /></span>
            <span className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-hover"><img width="25px" src="/gif.png" /></span>
            <span className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-hover"><img width="25px" src="/questionnaire.png" /></span>
            <span className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-hover"><img width="25px" src="/emoji.png" /></span>
            <span className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-hover"><img width="25px" src="/calendar.png" /></span></div>
            <div>
            {input?<label className={(280-inputLength)<0?'text-red-600':'text-twitterblue-default'}>{(280-inputLength).toString()}</label>:''}
            <button onClick={()=>console.log("basıldı")} disabled={inputLength>280?"true":''} className={`text-white py-2 px-5 bg-twitterblue-default font-medium rounded-full ${input?'':'opacity-50'} ${(280-inputLength)<0?'opacity-50':''}`}>Tweetle</button>
       
            </div>
             </div>
      </div>
    </div>
  );
}

export default TweetField;
