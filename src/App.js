import { useState, useEffect } from "react";
import {MainContext} from './services/MainContext'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

import {GET} from './services/FechService'

const url = 'https://dummyjson.com/products'



function App() {
  const [radius, setRadius] = useState(10)
  const [newColor, setNewColor] = useState({
      rad: 10,
      r: 0,
      g: 0,
      b: 0
  })
  
  let x = 5
  const [step, setStep] = useState(0)



let flag;
  const [states, setStates] = useState({})
  const [mainData, setMainData] = useState([])
  const [mainDataIsReady, setMainDataIsReady] = useState(false)
  const [countFavorites, setCountFavorites] = useState(0)
  const addStates = (newStates) => {
    setStates({
      ...states,
      ...newStates
    })
  }

  const allStates = {
    countFavorites,
    setCountFavorites,
  mainData,
  mainDataIsReady,
addStates,
...states
  }

  useEffect(()=>{
    localStorage.setItem("ashion-selected", localStorage.getItem('ashion-selected'))
      setCountFavorites(localStorage.getItem('ashion-selected').split(',').length-1)
   
  },[])
  useEffect(()=>{
    
    GET(url,{
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
    .then(res=>res.data)
    .then(res=>{
        setMainData(res.products)
        return res
    })
    .then((res)=>{
      setMainDataIsReady(true)
      return res
    })
    .then(res => {
      document.querySelector('.starter').classList.add('display-none')
          cancelAnimationFrame(flag)
    })
    // .then(res=>console.log(res.products))
    

},[])

const animation = ()=>{
  setStep(step+1)
      setRadius(prev =>prev<200?prev+5:10) 
      setNewColor({
          rad: radius,
          r: Math.ceil(Math.random() * 255 -1),
          g: Math.ceil(Math.random() * 255 -1),
          b: Math.ceil(Math.random() * 255 -1),
      })
    

 
  console.log(step)
  

}
flag = requestAnimationFrame(animation)

  

     
      if(step>=500){
          document.querySelector('.starter').classList.add('display-none')
          cancelAnimationFrame(flag)
      }
  

  return (

    <MainContext.Provider value = {allStates}>
        <div className="App">
    
    <div className='starter'>
        <div className='circle' style={{border: `2px solid rgb(${newColor.r},${newColor.g},${newColor.b})`, width: `${newColor.rad}px`, height: `${newColor.rad}px`}}></div>


</div>

<Header/>
<Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/page1" element = {<Home/>}/>
  <Route path="/page2" element = {<Home/>}/>
  <Route path="/shop" element = {<Shop/>}/>
  <Route path="/page4" element = {<Home/>}/>
  <Route path="/page5" element = {<Home/>}/>
</Routes>

<Footer/>
</div>
    </MainContext.Provider>
  
  );
}

export default App;
