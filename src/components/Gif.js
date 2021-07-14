import React from "react"                       
import "./Gifs.css";

function Gif({gif, setIndex, index}) {
  return (
    <div>
      <img 
        className="gif-pics" 
        src={gif.images.original.url} 
        alt={gif.title} 
        onClick={()=>setIndex(index)}
      />
    </div>
  )
}


export default Gif