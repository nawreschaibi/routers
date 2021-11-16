import React, { useState } from 'react'
import Moviecard from './Moviecard'
import Filter from './Filter'

function Movielist() {

  const [list, setlist] = useState( [
        {
          title: "Game of thrones",
          description: "Genre : Fantasy",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
          rate: "3",
        },
        {
          title: "Breaking bad",
          description:
            "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
          posterUrl:
            "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
          rate: "4",
        },
        {
          title: "hunter x hunter",
          description:
            "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
          posterUrl:
            "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
          rate: "5",
        },
  
      ])
      const [text, settext] = useState("")
      const [rate, setrate] = useState("")
      const filtertext=(newtext)=>{
        settext(newtext)
      }
      const ratingChanged = (newRating) => {
       setrate(newRating)
      };
    return (
      <div>
        <Filter filtertext={filtertext} ratingChanged={ratingChanged}/>
        <div className="app">
          
         { list.filter(el=>el.title.toLowerCase().includes(text.toLowerCase()) && el.rate>=rate).map(el=><Moviecard movie={el}/>)}
        </div>
        </div>
    )  };

    

export default Movielist
