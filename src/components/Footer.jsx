
import React from 'react'
import logo from '../assets/images/logo.png.webp'
import payment1 from '../assets/images/footer/payment-1.png.webp';
import payment2 from '../assets/images/footer/payment-2.png.webp';
import payment3 from '../assets/images/footer/payment-3.png.webp';
import payment4 from '../assets/images/footer/payment-4.png.webp';
import payment5 from '../assets/images/footer/payment-5.png.webp';





const Footer = () => {
  return (
  <div className='container'>
      <div className='footer'>
       <div className='ashion'>
        {/* <img src={logo} alt="" /> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Inventore mollitia hic harum repellendus quis!</p>
        <div>
          <img src={payment1} alt="" />
          <img src={payment2} alt="" />
          <img src={payment3} alt="" />
          <img src={payment4} alt="" />
          <img src={payment5} alt="" />
        </div>
       </div>
       <div className='quick-links'>
        <h2>Quick Links</h2>
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
       </div>
       <div className='account'>
        <h2>Account</h2>
        <ul>
          <li>My Account</li>
          <li>Orders Tracking</li>
          <li>Checkout</li>
          <li>Wishlist</li>
        </ul>
       </div>
       <div className='news-letter'>
        <h2>Newsletter</h2>

        <div>
          <input type="text" placeholder='Email'/>
          <input type="button" value="Subscribe" />
        </div>
        <div>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-tiktok"></i>

        </div>
       </div>
    </div>
  </div>
  )
}


export {Footer}




