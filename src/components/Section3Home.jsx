
import React, { useEffect, useState, useContext } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MainContext } from '../services/MainContext'

const Section3Home = () => {
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

      // .then(res => console.log(res))
      // .catch(err => console.log(err))
  


  }, [mainData])

  if (dataIsReady) {
    return (
        <div  className='section3-home'>
            <div className='container'>
               <Carousel className='carousel'>

                {
                    data.map((item)=>(
                        <div key={item.id}>
                        <img src={`${item.images[0]}`}  />
                        <p className="legend"></p>
                    </div>
                    ))
                }
             
                </Carousel>
        </div>
        </div>
      )
  }

 
}


export {Section3Home}
