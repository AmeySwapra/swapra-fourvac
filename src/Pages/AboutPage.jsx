import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Banner from '../components/common/Banner'
import ScrollToTop from '../components/common/ScrollToTop'
import Welcome from '../components/common/Welcome'
import CommanAgencies from '../components/common/CommanAgencies'
import Founder from '../components/common/Founder'

function AboutPage() {
  return (
    <>
    <ScrollToTop/>
     <Topbar/>
     <Header/>
     <Banner text={"About Us"}/>
     <Welcome/>
     <Founder/>
     <CommanAgencies/>
     <Footer/>
    </>
  )
}

export default AboutPage