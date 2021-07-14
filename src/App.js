import axios from 'axios';
import './App.css';
import SelectedGif from "./components/SelectedGif"
import GifList from "./components/GifList"
import {useEffect, useState} from 'react'

function App() {

  const [arrOfGifs, setArrOfGifs] = useState([])
  const [index, setIndex] = useState(-1)

  const getData = () => {
    const randomNum = Math.floor(Math.random()* 4995)
    axios.get(`http://api.giphy.com/v1/gifs/trending?offset=${randomNum}&api_key=${process.env.REACT_APP_API_KEY}&limit=5&rating=pg-13`)
    .then((response)=>{
      setArrOfGifs(response.data.data)
     })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  
  return (
    <div className="main-container">

      {index === -1 
        ? <SelectedGif />
        : <SelectedGif url={arrOfGifs[index].images.original.url} />
      }
      
      {arrOfGifs.length > 0 && <GifList gifs={arrOfGifs} setIndex={setIndex} />}
      
    </div>
  );
}

export default App;

// NAMES
// Alex
// Nat 
// G
// Victor
// Peter 
// Pallavi
// Lorianne
// Salvo



// api.giphy.com/v1/gifs/trending?api_key=UgXNfmN31uJY6ZbSwD4Vw3GvT2mpyoAm&limit=5&rating=pg-13

// images -- original -- url
