import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Banner from '../components/common/Banner'
import Agencies from '../components/Agencies'
import ScrollToTop from '../components/common/ScrollToTop'

function AgenciesPage() {
  return (
    <>
    <ScrollToTop/>
     <Topbar/>
     <Header/>
     <Banner text={"Agencies"}/>
     <Agencies/>
     <Footer/>
    </>
  )
}

export default AgenciesPage