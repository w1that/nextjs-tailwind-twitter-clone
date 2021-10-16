import { users } from "../../../data";

export default function userHandler({query:{id}}, res){

    const filtered = users.filter((u)=>u.id.toString()===id)

    if(filtered.length>0){
        res.status(200).json(filtered[0])
    }
    else{
        res.status(404).json({message:"user with this id not found"})
    }
}