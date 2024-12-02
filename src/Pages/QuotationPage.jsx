import React from 'react'
import Banner from '../components/common/Banner'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Topbar from '../components/common/Topbar'
import GetQuotationForm from '../components/GetQuotationForm'
import ScrollToTop from '../components/common/ScrollToTop'

function Quotation() {
  return (
    <>
      <ScrollToTop/>
      <Topbar/>
      <Header/>
      <Banner text={"Get Quotation"} />
      <GetQuotationForm/>
      <Footer/>
    </>
  )
}

export default Quotation