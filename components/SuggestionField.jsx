import React from 'react'
import SuggestionItem from './SuggestionItem'

function SuggestionField() {
    return (
        <div className="w-1/4 ">
        <div className="ml-8">
          <div className="w-full bg-gray-agenda mt-4 rounded-xl">
            <h4 className="text-white px-4 py-2 font-bold text-xl">
              Kimi takip etmeli
            </h4>
            <SuggestionItem
              user={{
                username: "Kommunitycom",
                name: "Kommunity",
                image:
                  "https://pbs.twimg.com/profile_images/1262372447187275777/sDwPJwry_400x400.png",
              }}
            />
            <SuggestionItem
              user={{
                username: "r_Flutterdev",
                name: "r/FlutterDev",
                image:
                  "https://pbs.twimg.com/profile_images/971176720169660416/Rjaq-ruU_400x400.jpg",
              }}
            />
            <SuggestionItem
              user={{
                username: "react",
                name: "reactjs",
                image:
                  "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
              }}
            />
            <div className="px-6 py-4 w-full cursor-pointer hover:bg-gray-agendahover rounded-b-xl">
              <span className="text-twitterblue-default ">
                Daha fazla göster
              </span>
            </div>
          </div>
          <p className="text-gray-text py-5 px-5 text-sm">
            Hizmet Şartları Gizlilik Politikası Çerez Politikası Iletisim
            bilgileri Reklam bilgisi Daha fazla © 2021 Twitter, Inc.
          </p>
        </div>
      </div>
    )
}

export default SuggestionField
