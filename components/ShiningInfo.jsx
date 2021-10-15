import React from 'react'

function ShiningInfo() {
    return (
        <span className="bg-black w-4/5 absolute right-0 cursor-default z-10 p-2 border border-gray-600">
        <div className="flex justify-center">
          <img  src="/shinings.png" />
        </div>
        <h3 className="text-center text-xl font-bold text-gray-twitter pb-1 border-b border-gray-600">Anasayfada önce en popüler Tweetler gösterilir</h3>
        <div className="text-left text-sm ">
          <div className="cursor-pointer p-3 hover:bg-gray-600 ">
            <h3 className="text-gray-twitter">Bunun yerine en son Tweetleri gör</h3>
            <h3 className="text-gray-500">Gönderilen en son tweetleri görürsün.</h3>
          </div>
          <h3 className="text-gray-twitter cursor-pointer p-3 hover:bg-gray-600">
            İçerik tercihlerini görüntüle
          </h3>
        </div>
        </span>
    )
}

export default ShiningInfo
