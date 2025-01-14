import React, { useEffect, useState } from 'react'
import axios from "axios"
const ContentContainer = () => {
    const [genres, setGenres] = useState([]);

    useEffect( () =>{
        axios.get('https://api.jikan.moe/v4/anime')
        .then(response =>setGenres)
    })
  return (
    <>
    </>
  )
}

export default ContentContainer