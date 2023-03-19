
import React, {useState, useContext, useEffect} from 'react'
import { MainContext } from '../services/MainContext';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
<Box
component="span"
sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
•
</Box>
);


const Section2Card = ({category, brand, description, image, price})=>{

  return (
    <Card className='section2-home-card' style={{background: `linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${image})`}} >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       {category}
      </Typography>
      <Typography variant="h5" component="div">
        {brand}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {description}
      </Typography>
      <Typography variant="body2">
       {price}
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

const Section2Home = () => {

  const [dataIsReady, setDataIsReady] = useState(false)
  const [data, setData] = useState([])
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
    // setData(mainData)
  


  }, [mainData])

 if(dataIsReady){
  return (


    <div>
      <div className='section2-home-frame'>
            <Box className= 'box' sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="smartphones" value="2" />
            <Tab label="laptops" value="3" />
            <Tab label="fragrances" value="4" />
            <Tab label="skincare" value="5" />
            <Tab label="home-decoration" value="6" />
          </TabList>
        </Box>
        <TabPanel className='tab-panel' value="1">
            {data.map((item) => (
             
              <Section2Card key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
             
            ))}
        </TabPanel>
        <TabPanel className='tab-panel' value="2">
        {data.map((item) => {
             
            if(item.category === 'smartphones'){
            return  <Section2Card key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
            }
            
          })}
        </TabPanel>
        <TabPanel className='tab-panel' value="3">
        {data.map((item) => {
             
             if(item.category === 'laptops'){
             return  <Section2Card key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
             }
             
           })}
        </TabPanel>
        <TabPanel className='tab-panel' value="4">
        {data.map((item) => {
             
             if(item.category === 'fragrances'){
             return  <Section2Card key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
             }
             
           })}
        </TabPanel>
        <TabPanel className='tab-panel' value="5">
        {data.map((item) => {
             
             if(item.category === 'skincare'){
             return  <Section2Card key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
             }
             
           })}
        </TabPanel>
        <TabPanel className='tab-panel' value="6">
        {data.map((item) => {
             
             if(item.category === 'home-decoration'){
             return  <Section2Card key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
             }
             
           })}
        </TabPanel>
      </TabContext>
    </Box>
    </div>
    </div>
  )
 }
}


export {Section2Home}