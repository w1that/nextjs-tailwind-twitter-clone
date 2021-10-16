import { tweets } from "../../../data";

export default function tweetHandler({query:{id}}, res){

    const filtered = tweets.filter((t)=>t.id.toString()===id)

    if(filtered.length>0){
        res.status(200).json(filtered[0])
    }
    else{
        res.status(404).json({message:"tweet with this id not found"})
    }
}
