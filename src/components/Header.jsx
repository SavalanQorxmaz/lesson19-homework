import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png.webp'
import { MainContext } from '../services/MainContext'

const Header = () => {
    const [sidebarContentShow, setSidebarContentShow] = useState('none')
    const [sidebarSubContentShow, setSidebarSubContentShow] = useState('none')
    const {countFavorites}= useContext(MainContext)



    const sidebarHideF = (e)=>{
        const sidebar = e.currentTarget
        if(e.target===e.currentTarget){
                sidebar.children[0].classList.remove('sidebar-show')
                sidebar.children[0].classList.add('sidebar-left-0')
                    sidebar.children[0].classList.add('sidebar-hide')
                    setTimeout(() => {
                        sidebar.classList.add('display-none')
                        sidebar.children[0].classList.remove('sidebar-hide')
                        sidebar.children[0].classList.remove('sidebar-left-0')
                    }, 500);  

        }
    }

    const sidebarHideButtonF = (e) => {
        const sidebarBack = document.querySelector('.sidebar-back')
        sidebarBack.children[0].classList.remove('sidebar-show')
        sidebarBack.children[0].classList.add('sidebar-left-0')
            sidebarBack.children[0].classList.add('sidebar-hide')
            setTimeout(() => {
                sidebarBack.classList.add('display-none')
                sidebarBack.children[0].classList.remove('sidebar-hide')
                sidebarBack.children[0].classList.remove('sidebar-left-0')
            }, 500);   

    }

    const sidebarShowF = (e) => {
        const sidebarBack = document.querySelector('.sidebar-back')

        sidebarBack.classList.remove('display-none')
        setTimeout(()=>{
            sidebarBack.children[0].classList.add('sidebar-show')
        },50)
        
    }


const sidebarContentShowF = (e) => {
    const sideContent = e.currentTarget.parentNode.parentNode.children[1]
    if(sidebarContentShow ==='none'){
        sideContent.classList.remove('display-none')
        setSidebarContentShow('show')
       
    }
    else if(sidebarContentShow === 'show'){
        sideContent.classList.add('display-none')
        setSidebarContentShow('none')
    }
    

}

const sidebarSubContentShowF = (e) => {
    const sideSubContent = e.currentTarget.nextSibling.children[0]
    if(sidebarSubContentShow ==='none'){
        sideSubContent.classList.remove('display-none')
        setSidebarSubContentShow('show')
    }
    else if(sidebarSubContentShow=== 'show'){
        sideSubContent.classList.add('display-none')
        setSidebarSubContentShow('none')
    }
    

}


    return (
        <div className='header-back'>
            <div className='sidebar-back display-none' onClick={sidebarHideF}>
                <div className='sidebar'>
                    <div className='sidebar-close-frame'>
                        <i onClick={sidebarHideButtonF} className="sidebar-close-button fa-regular fa-circle-xmark"></i>
                    </div>
                <div className='sidebar-advanced'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-cart-plus"></i>
                    </div>
                    <div className='sidebar-logo-frame'>
                        <img src={logo} alt="" />
                        </div>
                    <div className='sidebar-navbar'>
                        <div className='sidebar-navbar-header'>
                        <span onClick={sidebarContentShowF} className='sidebar-navbar-header-button'>MENU<i className="menu-icon fa-solid fa-bars"></i></span>
                        </div>
                        <ul className='sidebar-navbar-content display-none'>
                            <li>Home</li>
                            <li>Women's</li>
                            <li>Men's</li>
                            <li>Shop</li>
                            <li onClick={sidebarSubContentShowF}><span>Pages</span> <i className="fa-solid fa-caret-right"></i></li>
                            <li>
                           
                                <ul className='sidebar-navbar-subcontent display-none'>
                                <li>Product Details</li>
                                <li>Shop Cart</li>
                                <li>Checkout</li>
                                <li>Blog Details</li>
                                </ul>
                            </li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                  

                </div>
            </div>
            <div className='header'>
                <img src={logo} alt="" />
                <ul className='navbar'>
                    <li>
                        <Link to={'/'}>Home</Link>
                        <div className='underline'></div>

                    </li>
                    <li>
                        <Link to={'/page1'}>Women's</Link>
                        <div className='underline'></div>
                    </li>
                    <li>
                        <Link to={'/page2'}>Men's</Link>
                        <div className='underline'></div>
                    </li>
                    <li>
                        <Link to={'/shop'}>Shop</Link>
                        <div className='underline'></div>
                    </li>
                    <li>
                        <Link to={'/page4'}>Pages</Link>
                        <div className='underline'></div>
                    </li>
                    <li>
                        <Link to={'/page5'}>Blog</Link>
                        <div className='underline'></div>
                    </li>
                    <li>
                        <Link to={'/page5'}>Contact</Link>
                        <div className='underline'></div>
                    </li>
                </ul>
                <div className='menu'>
                    <div className='menu-login-register'>
                        <input type="button" value="Login" />
                        &nbsp;/&nbsp;
                        <input type="button" value="Register" />
                    </div>
                    <div className='menu-advanced'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-heart"></i>
                       <div className='relative-basket'> <i className="fa-solid fa-cart-plus " ></i><span>{countFavorites}</span></div>
                    </div>

                    <i onClick={sidebarShowF} className="menu-icon fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}


export { Header }