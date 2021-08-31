import axios from "axios"

export function doGet(url){
    return  axios.get("http://jsonplaceholder.typicode.com" + url).then(res=>{
        return res.data
    })
}