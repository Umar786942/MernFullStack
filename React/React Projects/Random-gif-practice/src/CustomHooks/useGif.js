import { useEffect, useState } from "react";
import axios from "axios";

// const API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

// console.log(API_KEY)
const API_URL=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif=(tag)=>{
    const[loading,setLoading]=useState(false)
    const[gif,setGif]=useState("")

    async function getGifUrl(gifname) {
        setLoading(true)
        const {data}=await axios.get(gifname?`${API_URL}&tag=${gifname}`:API_URL);
        console.log(data)
        const imgsource=data.data.images.downsized_large.url;
        setGif(imgsource)
        setLoading(false)
    }
       useEffect(()=>{getGifUrl(tag)},[])
    
    return {loading,gif,getGifUrl}
}

export default useGif