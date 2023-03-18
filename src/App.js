import { useContext, useState, useEffect } from "react";
import {MainContext} from './services/MainContext'
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import {GET, axios} from './services/FechService'

const url = 'https://dummyjson.com/products'

function App() {
  const [states, setStates] = useState({})
  const [mainData, setMainData] = useState([])
  const [mainDataIsReady, setMainDataIsReady] = useState(false)
  const addStates = (newStates) => {
    setStates({
      ...states,
      ...newStates
    })
  }

  const allStates = {
  mainData,
  mainDataIsReady,
addStates,
...states
  }

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
    .then(res=>console.log(res.products))
    

},[])

  return (

    <MainContext.Provider value = {allStates}>
        <div className="App">

<Header/>
<Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/page1" element = {<Home/>}/>
  <Route path="/page2" element = {<Home/>}/>
  <Route path="/page3" element = {<Home/>}/>
  <Route path="/page4" element = {<Home/>}/>
  <Route path="/page5" element = {<Home/>}/>
</Routes>
</div>
    </MainContext.Provider>
  
  );
}

export default App;
