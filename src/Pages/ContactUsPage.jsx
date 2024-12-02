import React from 'react'
import Banner from '../components/common/Banner'
import ContactForm from '../components/ContactForm'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Topbar from '../components/common/Topbar'
import ScrollToTop from '../components/common/ScrollToTop'

function ContactUs() {
  return (
    <>
      <ScrollToTop/>
      <Topbar/>
      <Header/>
      <Banner text={"Contact Us"} />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default ContactUs