import React from "react";
import axios from "axios";
import Gif from "./Gif"

function GifList({gifs, setIndex}) {
    return (
      <div className="gif-list">
        {gifs.map((gif,index)=> <Gif gif={gif} setIndex={setIndex} index={index}/>)}
      </div>
    )
}


export default GifList