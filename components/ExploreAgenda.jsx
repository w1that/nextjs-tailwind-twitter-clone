import React from 'react'
import AgendaItem from './AgendaItem'

function ExploreAgenda() {
    return (
        <div className="w-full pt-1 rounded-xl">
        <div className="w-full border-t border-gray-700">

        </div>
        <span className="flex justify-start items-center px-5">
          <h1 className="text-white font-bold text-lg py-4">
            İlgini çekebilecek gündemler
          </h1>
        </span>
  
        <AgendaItem title="Ece Mumay" tweet={1447} />
        <AgendaItem title="benzin" tweet={1451} />
        <AgendaItem title="BitcoinETF" tweet={3462} />
        <AgendaItem title="DolarTL" tweet={23,6} />
  
        <div className="px-6 py-4 w-full cursor-pointer hover:bg-gray-agendahover rounded-b-xl">
            <span className="text-twitterblue-default ">Daha fazla göster</span>
        </div>  
  
        {/* <div className="w-full cursor-pointer py-2 px-4 hover:bg-gray-agendahover">
          
        </div> */}
      
      </div>
    )
}

export default ExploreAgenda
