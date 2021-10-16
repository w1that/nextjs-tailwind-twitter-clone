{/* <TweetItem user={{username:"CelineSymbioss", name:"Celine Symbiosis", userImage:"https://pbs.twimg.com/profile_images/819597221142364161/zsT1J0zh_400x400.jpg"}} tweet={{title:"Sanatın tek amacının zevk olduğu doğru değildir, çünkü zevk bir hedef değildir; kendisinden başka bir amacının olmadığı doğru değildir, çünkü her şey birbirine bağlanır, her şey bağlantılıdır, insanlık ve doğada her şeyin bir amacı vardır.~Pierre-Joseph Proudhon", imagePath:"", comments:2, retweets:0, likes:23, date:6}}/>
<TweetItem user={{username:"aslanon", name:"⚡️ Onur Aslan", userImage:"https://pbs.twimg.com/profile_images/1409238347218890760/ZUzzbcY0_400x400.jpg"}} tweet={{title:"son dakika: Istanbul'da akilalmaz olay. webpack bir developer'i kör etttii!!", imagePath:"https://pbs.twimg.com/media/FBvtlP0XEAsTUZ0?format=png&name=small", comments:0, retweets:0, likes:11, date:1}}/>
<TweetItem user={{username:"dan_abramov", name:"Dan", userImage:"https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"}} tweet={{title:"I see how the axiom of regularity forbids a self-containing set. If A contains A, you can take {A} and show its only element intersects with {A}, which contradicts the axiom.But how do you forbid mutually containing set loops like on the right picture?", imagePath:"https://pbs.twimg.com/media/FBv7ChDXoAQ-pE1?format=jpg&name=large", comments:2, retweets:1, likes:11, date:15}}/> */}


export const users = [
    {
        id:1,
        username:"CelineSymbioss", 
        name:"Celine Symbiosis", 
        userImage:"https://pbs.twimg.com/profile_images/819597221142364161/zsT1J0zh_400x400.jpg"
    },
    {
        id:2,
        username:"aslanon", 
        name:"⚡️ Onur Aslan", 
        userImage:"https://pbs.twimg.com/profile_images/1409238347218890760/ZUzzbcY0_400x400.jpg"
    },
    {
        id:3,
        username:"dan_abramov", 
        name:"Dan", 
        userImage:"https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
    }
]

export const tweets = [
    {
        id:1,
        title:"Sanatın tek amacının zevk olduğu doğru değildir, çünkü zevk bir hedef değildir; kendisinden başka bir amacının olmadığı doğru değildir, çünkü her şey birbirine bağlanır, her şey bağlantılıdır, insanlık ve doğada her şeyin bir amacı vardır.~Pierre-Joseph Proudhon",
        imagePath:"", 
        comments:2, 
        retweets:0, 
        likes:23, 
        date:6,
        userId:1
    },
    {
        id:2,
        title:"son dakika: Istanbul'da akilalmaz olay. webpack bir developer'i kör etttii!!", 
        imagePath:"https://pbs.twimg.com/media/FBvtlP0XEAsTUZ0?format=png&name=small", 
        comments:0, 
        retweets:0, 
        likes:11, 
        date:1,
        userId:2,
    },
    {
        id:3,
        title:"I see how the axiom of regularity forbids a self-containing set. If A contains A, you can take {A} and show its only element intersects with {A}, which contradicts the axiom.But how do you forbid mutually containing set loops like on the right picture?", 
        imagePath:"https://pbs.twimg.com/media/FBv7ChDXoAQ-pE1?format=jpg&name=large", 
        comments:2, 
        retweets:1, 
        likes:11, 
        date:15,
        userId:3,
    }
]