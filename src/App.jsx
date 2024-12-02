import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import ContactUs from './Pages/ContactUsPage'
import Quotation from './Pages/QuotationPage'
import Agencies from './Pages/AgenciesPage'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import HvandUhvChambers from './Pages/HvAndUhvChambers'
import CFnFittings from './Pages/CFnFittings'
import E_Rava from './Pages/E_Rava'
import LinearZ from './Pages/LinearZ'
import FeedThrough from './Pages/FeedThrough'
import HybridAdaptor from './Pages/HybridAdaptor'
import Klfittings from './Pages/klfittings'
import ISO from './Pages/ISO'
import Values from './Pages/Values'
import Motion from './Pages/Motion'
import Custmize from './Pages/Custmize'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/getquotation' element={<Quotation/>} />
          <Route path='/agencies' element={<Agencies/>} />
          <Route path='/aboutus' element={<AboutPage/>} />
          <Route path='/services' element={<ServicePage/>} />
          <Route path='/products/hv&uhv' element={<HvandUhvChambers/>} />
          <Route path='/products/cfnfittings' element={<CFnFittings/>} />
          <Route path='/products/erava' element={<E_Rava/>} />
          <Route path='/products/linearz' element={<LinearZ/>} />
          <Route path='/products/feedthrough' element={<FeedThrough/>} />
          <Route path='/products/hybrid-adaptor' element={<HybridAdaptor/>} />
          <Route path='/products/klFnFittings' element={<Klfittings/>} />
          <Route path='/products/iso' element={<ISO/>} />
          <Route path='/products/valves' element={<Values/>} />
          <Route path='/products/motion' element={<Motion/>} />
          <Route path='/products/custmize' element={<Custmize/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App