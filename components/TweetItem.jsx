import React, { useEffect, useState } from "react";



function TweetItem({ userId, tweet, users }) {
  const [isDots, setIsDots] = useState(false);
  const [user, setUser] = useState({});
  function dotsHandler() {
    setIsDots(!isDots);
  }

  useEffect( async () => {
    const res = await fetch('http://localhost:3000/api/user')
    const users = await res.json()
    users.map(user => {
      if(user.id===userId){
        setUser(user)
        return ' '
      }
    });
  }, [])

  return (
    <div className="px-0 pr-3 pl-3 sm:px-3  pt-3 pb-1 flex border-b border-gray-700 w-full relative">
      <img className="rounded-full w-12 h-12 " src={user.userImage}></img>
      <div className="sm:px-4 px-0 cursor-pointer pb-4">
        <span className="flex justify-between">
          <div>
            <label className="font-normal text-white text-lg">
              {user.name}s
            </label>
            <label className="font-normal text-white text-gray-text px-1">
              @{user.username}s
            </label>
            <label className="font-normal text-white text-gray-text px-1">
              · {tweet.date}s
            </label>
          </div>
          <span
            onClick={dotsHandler}
            className="flex justify-center items-center px-2 rounded-full hover:bg-buttons-commentHover "
          >
            <img className="w-4 h-4" src="/dots.png" />
          </span>
        </span>
        <div>
          <label className="cursor-pointer text-white ">{tweet.title}</label>
          <img className="rounded-2xl" src={tweet.imagePath}></img>
        </div>
        <div className="pt-4">
          <span className="flex justify-between pr-0 sm:pr-20 ">
            <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-commentHover">
              <img className="mx-auto w-5 rounded-full " src="/comment.png" />{" "}
              {tweet.comments && (
                <label className="text-gray-text">{tweet.comments}</label>
              )}
            </span>
            <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-retweetHover">
              <img className="mx-auto w-5 rounded-full " src="/retweet.png" />{" "}
              {tweet.retweets && (
                <label className="text-gray-text">{tweet.retweets}</label>
              )}
            </span>
            <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-likeHover">
              <img className="mx-auto w-5 rounded-full " src="/like.png" />{" "}
              {tweet.likes && (
                <label className="text-gray-text">{tweet.likes}</label>
              )}
            </span>
            <span className="w-12 h-10 cursor-pointer transition duration-300 flex items-center rounded-full hover:bg-buttons-commentHover">
              <img className="mx-auto w-5 rounded-full " src="/share.png" />
            </span>
          </span>
        </div>
      </div>

      {isDots && (
        <div
          contentEditable
          className="absolute right-5 top-5 w-2/3 z-10 filter bg-black border-gray-text border rounded cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
              Bu tweet ilgimi çekmiyor
            </h3>
            <span
              onClick={dotsHandler}
              className="text-gray-twitter px-3 cursor-pointer hover:bg-gray-900 py-2"
            >
              x
            </span>
          </div>
          <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
            @{user.username} adlı kişiyi takibi bırak
          </h3>
          <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
            @{user.username} kullanıcısını listelere ekle / listelerden kaldır
          </h3>
          <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
            @{user.username} adlı kişiyi sessize al
          </h3>
          <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
            @{user.username} adlı kullanıcıyı engelle
          </h3>
          <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
            Tweeti katıştır
          </h3>
          <h3 className="text-gray-twitter py-3 px-5 w-full hover:bg-gray-darkhover">
            Tweeti bildir
          </h3>
        </div>
      )}
    </div>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://localhost:3000/api/user')
//   const users = await res.json()
//   console.log(users)
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       users,
//     },
//   }
// }

export default TweetItem;
