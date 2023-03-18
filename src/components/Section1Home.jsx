

import React, { useEffect, useState } from 'react'
// import { MainContext} from '../services/MainContext'
// import { Section1Card } from './Section1Card'
import {GET} from '../services/FechService'

const url = 'https://dummyjson.com/products'


const Section1Card =  ({image, brand, category})=>{
 

    return (
        <div className=" flex flex-col justify-center p-5 " style={{backgroundImage: `url(${image})`}}>
        <h2 className="font-bold text-3xl mb-2 ">{brand}</h2>
        <p className="text-2xl ">{category}</p>
      </div>
    )
  }
  






const Section1Home = () => {

   
    const [data, setData] = useState([])

    const [dataIsReady,setDataIsReady] = useState(false)

  // const {setMainDataIsReady, mainData} = useContext(MainContext)
  
  useEffect(()=>{

    GET(url,{
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
    .then(res=>res.data.products)
    .then(res=>{
        setData(res)
        return res
    })
    .then(res=>{
        setDataIsReady(true)
    })
    
    

},[])






if(dataIsReady){
    
  return (

    <div className='section1-home'>
    
    
    <Section1Card image = {data[0].images[0]} category = {data[0].category} brand = {data[0].brand}/>
    <Section1Card image = {data[1].images[0]} category = {data[1].category} brand = {data[1].brand}/>
    <Section1Card image = {data[2].images[0]} category = {data[2].category} brand = {data[2].brand}/>
    <Section1Card image = {data[3].images[0]} category = {data[3].category} brand = {data[3].brand}/>
    <Section1Card image = {data[4].images[0]} category = {data[4].category} brand = {data[4].brand}/>
       
    
    </div>
  )
}
}


export {Section1Home}