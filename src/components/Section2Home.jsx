
import React, {useState, useContext, useEffect} from 'react'
import { MainContext } from '../services/MainContext';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const Section2Card = ({category, brand, description, image, price, id})=>{
  const [colorChange, setColorChange] = useState('black')
  const {countFavorites ,setCountFavorites} = useContext(MainContext)

  const [parentPosition, setParentPosition] = useState('hidden-position');
  const [childPosition, setChildPosition] = useState('move-down-icon')

  
const iconVisibleF = (e) => {
  e.preventDefault()
  const parent = e.currentTarget.children[0]
  const firstChildClasslist = parent.children[0].classList
  const secondChildClasslist = parent.children[1].classList
 
  parent.classList.remove('hidden-position') 
  parent.classList.add('visible-position')
       if(parentPosition==='hidden-position'&&childPosition==='move-down-icon'){
       
          setTimeout(()=>{
            firstChildClasslist.add("move-up-icon")
           setTimeout(()=>{
            firstChildClasslist.remove('move-down-icon')
            setTimeout(()=>{
                secondChildClasslist.add("move-up-icon")
                setTimeout(()=>{
            secondChildClasslist.remove('move-down-icon')
            setParentPosition('visible-position')
        setChildPosition("move-up-icon")
                },10)
            }, 100)
           },10)
        },10)
       }
      }

   


const iconHiddenF = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  const parent = e.currentTarget.children[0]
  const firstChildClasslist = parent.children[0].classList
  const secondChildClasslist = parent.children[1].classList
    setTimeout(()=>{
      firstChildClasslist.add("move-down-icon")
     setTimeout(()=>{
      firstChildClasslist.remove('move-up-icon')
      setTimeout(()=>{
          secondChildClasslist.add("move-down-icon")
          setTimeout(()=>{
      secondChildClasslist.remove('move-up-icon')
      setTimeout(()=>{
          parent.classList.add('hidden-position') 
          parent.classList.remove('visible-position')
          setParentPosition('hidden-position')
          setChildPosition("move-down-icon")
         
          
      },200)
          },10)
      }, 100)
     })
  },10)   

   
}


useEffect(()=>{
  const tempArray = [].concat((localStorage.getItem('ashion-selected')).split(','))
//  console.log(tempArray)
 tempArray.includes(`${id}`)?setColorChange('red'):setColorChange('black');
},[])

const addFavorites = ()=> {
  if(colorChange === 'black'){
    const tempArray =[].concat((localStorage.getItem('ashion-selected')).split(','),`${id}`)
    
    localStorage.setItem('ashion-selected',tempArray)
    setColorChange('red')
    setCountFavorites(countFavorites + 1)
  } else if(colorChange === 'red'){
    const tempArray =[].concat((localStorage.getItem('ashion-selected')).split(','))
    tempArray.splice(tempArray.indexOf(`${id}`),1)
    localStorage.setItem('ashion-selected',tempArray)
    setColorChange('black');
    
    setCountFavorites(countFavorites - 1)
  }
}

  return (
    <Card className='section2-home-card' style={{background: `linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${image})`}} onMouseOver={iconVisibleF} onMouseLeave = {iconHiddenF} >
     <div className='card-hover hidden-position'  >
      <i className="fa-solid fa-heart move-down-icon" ></i>
      <i className="fa-solid fa-cart-plus move-down-icon"  onClick={addFavorites} style={{color: `${colorChange}`}}></i>
    </div>
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

    const { mainData } = useContext(MainContext)

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
             
              <Section2Card id= {item.id} key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
             
            ))}
        </TabPanel>
        <TabPanel className='tab-panel' value="2">
        {data.map((item) => {
             
            if(item.category === 'smartphones'){
            return  <Section2Card id= {item.id} key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
            }
            
          })}
        </TabPanel>
        <TabPanel className='tab-panel' value="3">
        {data.map((item) => {
             
             if(item.category === 'laptops'){
             return  <Section2Card id= {item.id} key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
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
             return  <Section2Card id= {item.id} key={item.id} category={item.category} description={item.description} brand={item.brand} price={item.price} image = {item.images[0]} />
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