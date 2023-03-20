
import React, {useState, useContext, useEffect} from 'react';
import { MainContext } from '../services/MainContext';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Section4Card = ({category, brand,image, price})=> {
    const theme = useTheme();
    return (
        <Card sx={{ display: 'flex', height: 120, overflow: 'hidden', margin: '10px', border: '2px solid green' }}>
              <CardMedia
          component="img"
          sx={{ width: 151}}
          image={`${image}`}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
              {category}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {brand}
            </Typography>
            <Typography variant="subtitle1" color="text.primary" component="div">
              {price}$
            </Typography>
          </CardContent>
        
        </Box>
      
      </Card>
    )
}

const Section4Home = () => {

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

    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    // setData(mainData)
  


  }, [mainData])

 if(dataIsReady){
  return (
    <div className='container'>

        <div className='section4-home'>
            <div className='hot-trend'>
                <h2>HOT TREND</h2>
                {
                    data.map((item, index)=>{
                        if(index%7===3){
                            return(
                                <Section4Card key={item.id} category={item.category} brand={item.brand}  image={item.images[0]} price = {item.price}/>
                            )
                        }
                    })
                }

               
            </div>
            <div className='best-seller'>
                <h2>BEST SELLER</h2>
                {
                    data.map((item, index)=>{
                        if(index%7===5){
                            return(
                                <Section4Card key={item.id} category={item.category} brand={item.brand}  image={item.images[0]} price = {item.price}/>
                            )
                        }
                    })
                }

            </div>
            <div className='feature'>
                <h2>FEATURE</h2>
                {
                    data.map((item, index)=>{
                        if(index%7===2){
                            return(
                                <Section4Card key={item.id} category={item.category} brand={item.brand}  image={item.images[0]} price = {item.price}/>
                            )
                        }
                    })
                }

            </div>
        </div>
        
    </div>
  )}
}


export {Section4Home}