
import React, { useEffect } from 'react'
import {GET, POST, axios} from '../services/FechService'

const url = 'https://fakestoreapi.com/products'

export const Home = () => {




// useEffect(()=>{
//     GET(url)
//     .then(res=>console.log(res))

//     POST(`${url}`, "salam")
//     .then(res=>console.log(res))
// },[])

  return (
    <div>Home</div>
  )
}

