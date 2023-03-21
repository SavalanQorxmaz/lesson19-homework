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
    // .then(res=>console.log(res.products))
    

},[])

  return (

    <MainContext.Provider value = {allStates}>
        <div className="App">

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
