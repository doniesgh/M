import React from 'react'
import Apropos from './HomeComponents/Apropos'
import Products from './HomeComponents/Products'
import HomeNavbar from './HomeComponents/Homenavbar'
import Contact from './HomeComponents/Contact'
import Acctualite from './HomeComponents/Acctualite'

function HomePage() {
  return (
    <div>
      <div className="">
        <HomeNavbar/>
      </div>
      <div className="section ">
        <Apropos/>
      </div>
      <div className="section col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <Products/> 
      </div>
      <div className="">
      <Acctualite/>
            </div>

      <div className="section col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <Contact/> 
      </div>
    </div>
  )
}

export default HomePage;
