
import React, { useContext, useState, useEffect } from 'react'
import { MainContext } from '../services/MainContext';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Section5Home = () => {
  const [dataIsReady, setDataIsReady] = useState(false)
  const [data, setData] = useState([])
  const { mainData, mainDataIsReady } = useContext(MainContext)


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
    //   .catch(err => console.log(err))
    // setData(mainData)
  }, [mainData])




  // COUNT DOWN 


  let countDownTime = new Date(2024, 2, 20, 6, 7);
  let countDownTimeMs = countDownTime.getTime()
  const [currentTime, setCurrentTime] = useState(new Date().getTime())
  const [countDownString, setCountDownString] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })
  const interv = setInterval(() => {
    setCurrentTime(new Date().getTime())
  }, 1000)

  useEffect(() => {
    let now = currentTime
    let distance = countDownTimeMs - now;
    if (distance < 0) {
      setCountDownString("vaxt bitdi")
      clearInterval(interv)
    }
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDownString({
      days,
      hours,
      minutes,
      seconds,
    })

  }, [currentTime])


  if (dataIsReady) {
    return (
      <div className='container'>

        <div className='section5-home'>
          <div className='section5-home-image' style={{ backgroundImage: `url(${data[25].images[0]})` }}></div>
          <div className='section5-home-advanced'>
            <span>{data[25].title}</span>
            <p><span> {countDownString.days}</span>D<span > {countDownString.hours}</span>H <span>{countDownString.minutes}</span>M <span>{countDownString.seconds}</span>S</p>

            <span>{data[25].price}$</span>

            <p>{data[25].description}</p>
            <span>{countDownTime.toDateString()}</span>
            {/* <span>{countDownTime.seconds.toString()+ 100}</span> */}
          </div>

        </div>
      </div>

    )
  }

}

export { Section5Home }