import React from 'react'
import NavBar from '../components/Navigation bar/NavBar'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Offer from '../components/Offer/Offer'
import Footer from '../components/Footer/Footer'

const HomeScreen = () => {
  return (
    <>
     <NavBar />
     <Banner/>
     <Products/>
     <Offer />
     <Footer />
    </>
  )
}

export default HomeScreen