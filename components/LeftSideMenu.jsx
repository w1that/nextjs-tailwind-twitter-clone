import React from 'react'
import LeftSideItem from './LeftSideItem'

function LeftSideMenu() {
    return (
        <div className=" w-1/5 ">
            <div className="bg-white w-1/5 rounded-3xl hover:opacity-15 my-4"><img src="/twitter-sign.png"></img></div>
            <div>
                <LeftSideItem title="Anasayfa"></LeftSideItem>
                <LeftSideItem title="Keşfet"></LeftSideItem>
                <LeftSideItem title="Bildirimler"></LeftSideItem>
                <LeftSideItem title="Mesajlar"></LeftSideItem>
                <LeftSideItem title="Yer İşaretleri"></LeftSideItem>
                <LeftSideItem title="Listeler"></LeftSideItem>
                <LeftSideItem title="Profil"></LeftSideItem>
                <LeftSideItem title="Daha Fazla"></LeftSideItem>
            </div>
            <div className="rounded-full bg-twitterblue-default hover:bg-twitterblue-hover cursor-pointer mr-20 mt-7 py-4"><h1 className="text-white  mx-10 font-bold  text-center ">Tweetle</h1></div>
        </div>
    )
}

export default LeftSideMenu
