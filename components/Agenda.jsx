import React from "react";
import AgendaItem from "./AgendaItem";

function Agenda({title,tweet}) {
  return (
    <div className="w-full bg-gray-agenda mt-4 rounded-xl">
      <span className="flex justify-evenly items-center">
        <h1 className="text-white font-bold text-lg px-4 py-4">
          İlgini çekebilecek gündemler
        </h1>
        <span className="w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-500 transition duration-400 rounded-full">
          <img width="25px" src="/settings.png" />
        </span>
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
  );
}

export default Agenda;
