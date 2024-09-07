import React from 'react'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
    <Navbar></Navbar>
    <div style={{minHeight:'100vh'}}>
      <Body></Body>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default RootLayout