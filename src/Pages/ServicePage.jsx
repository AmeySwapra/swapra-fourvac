import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'
import Services from '../components/Services'
import Banner from '../components/common/Banner'
function Home() {
  return (
    <>
     <ScrollToTop/>
     <Topbar/>
     <Header/>
     <Banner text={" Our Services"}/>
     <Services/>
     <Footer/>
    </>
  )
}

export default Home