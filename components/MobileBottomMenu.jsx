import React from 'react'
import Link from 'next/link'
function MobileBottomMenu() {
    return (
        <div className="fixed bottom-0 text-white w-full h-12 sm:hidden border-t border-gray-500 bg-black flex items-center justify-around">
            <span className="bg-gray-600 rounded-full p-1"><img width="30px" src="/home.png"/></span>
            <Link href="/explore"><a><span><img width="30px" src="/search.png"/></span></a></Link >
            <span><img width="30px" src="/bell.png"/></span>
            <span><img width="30px" src="/mail.png"/></span>
        </div>
    )
}

export default MobileBottomMenu
