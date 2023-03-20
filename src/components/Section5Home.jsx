
import React, {useContext, useState, useEffect} from 'react'
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
}, [mainData])

    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    // setData(mainData)


    // COUNT DOWN 
    
    
    let countDownTime = new Date(2024,2,20,6,7).getTime();
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const [countDownString, setCountDownString] = useState('')
    const interv = setInterval(()=>{
        setCurrentTime(new Date().getTime())
    }, 1000)

    useEffect(()=>{
        let now = currentTime
        let distance = countDownTime -now;
        if(distance<0){
            setCountDownString("vaxt bitdi")
            clearInterval(interv)
        }
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountDownString('Day: '+days+ ', Hour:'+hours+', Minute: '+ minutes+ ', Second: '+seconds )
        // console.log(countDownString)

    },[currentTime])

    if(dataIsReady){
        return (
            <div className='container'>
                 <Card sx={{ display: 'flex',flexWrap: 'wrap', height: 600, overflow: 'hidden', margin: '10px'}}>
             
             <CardMedia
              className='section5-home-image'
                  component="img"
                  sx={{ width: '50%'}}
                  image={`${data[25].images[0]}`}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column',padding: '20px' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" color='red'>
                    {countDownString}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                      {data[25].brand}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary" component="div">
                      {data[25].price}$
                    </Typography>
                  </CardContent>
                
                </Box>
              
              </Card>
            </div>
          )
    }
 
}

export {Section5Home}