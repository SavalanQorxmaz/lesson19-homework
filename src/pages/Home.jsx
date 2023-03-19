
import React from 'react'
import { Section1Home } from '../components/Section1Home';
import { Section2Home } from '../components/Section2Home';
import { Section3Home } from '../components/Section3Home';



export const Home = () => {



  return (
    <div className='home'>
      <Section1Home />
      <Section2Home/>
      <Section3Home/>
      
    </div>
  )
}

