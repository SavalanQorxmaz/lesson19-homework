

import React, { useEffect, useState, useContext } from 'react'
import { MainContext } from '../services/MainContext'


// Card funksiyasi

const Section1Card = ({ image, brand, category }) => {

  return (
    <div className=" flex flex-col justify-center p-5 " style={{ backgroundImage: `url(${image})` }}>
      <h2 className="font-bold text-3xl mb-2 ">{brand}</h2>
      <p className="text-2xl ">{category}</p>
    </div>
  )
}

const Section1Home = () => {

  const [dataIsReady, setDataIsReady] = useState(false)
  const [data, setData] = useState([])

  const { mainData, mainDataIsReady } = useContext(MainContext)

  // mainDatanin hazir olmasini gozlemek ucun funksiya

 


  const getMainData = () => {
    return new Promise((res, rej) => {
      if (mainData.length > 0) {
        res(mainData)
      }
      else {
        rej('data gelmedi')
      }
    })
      .then(res => {
        setData(mainData)
        return res
      })
      .then(res => {
        setDataIsReady(true)
        return res
      })

  }

  useEffect(() => {

    getMainData()

      .then(res => console.log(res))
      .catch(err => console.log(err))
    setData(mainData)
  


  }, [mainData])






  if (dataIsReady) {

    return (

      <div className='section1-home'>


        <Section1Card image={data[0].images[0]} category={data[0].category} brand={data[0].brand} />
        <Section1Card image={data[1].images[0]} category={data[1].category} brand={data[1].brand} />
        <Section1Card image={data[2].images[0]} category={data[2].category} brand={data[2].brand} />
        <Section1Card image={data[3].images[0]} category={data[3].category} brand={data[3].brand} />
        <Section1Card image={data[4].images[0]} category={data[4].category} brand={data[4].brand} />


      </div>
    )
  }
}


export { Section1Home }