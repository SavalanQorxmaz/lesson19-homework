
import React, { useEffect } from 'react'
import {GET, POST, axios} from '../services/FechService'
import { Section1Home } from '../components/Section1Home'



export const Home = () => {



  return (
    <div className='home'>
      <Section1Home />
    </div>
  )
}

