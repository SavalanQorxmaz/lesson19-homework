
import React, {useState} from 'react'

const Shop = () => {

    const [iconPosition, setIconPosition] = useState(false)

    const iconVisibleF = (e) => {
        const parent = e.currentTarget.children[0]
        const firstChildClasslist = parent.children[0].classList
        const secondChildClasslist = parent.children[1].classList
       
                 parent.classList.remove('hidden-position') 
                parent.classList.add('visible-position')
            setTimeout(()=>{
                firstChildClasslist.add("move-up-icon")
               setTimeout(()=>{
                firstChildClasslist.remove('move-down-icon')
                setTimeout(()=>{
                    secondChildClasslist.add("move-up-icon")
                    setTimeout(()=>{
                secondChildClasslist.remove('move-down-icon')
                    },10)
                }, 200)
               })
            },10)   
    }

    const iconHiddenF = (e)=>{
        const frame = e.currentTarget.children[0]
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
                },400)
                    },10)
                }, 200)
               })
            },10)   
    }
        
    

  return (
    <div className='shop-page'onMouseOver={iconVisibleF} onMouseLeave = {iconHiddenF} >
        <div className='card-hover hidden-position'  >
        <i className="fa-solid fa-heart move-down-icon"></i>
                        <i className="fa-solid fa-cart-plus move-down-icon"></i>
        </div>
    </div>
  )
}


export  {Shop}