import { useContext, useState } from "react";
import {MainContext} from './services/MainContext'
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  const [states, setStates] = useState({})

  const addStates = (newStates) => {
    setStates({
      ...states,
      ...newStates
    })
  }

  const allStates = {
addStates,
...states
  }

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
