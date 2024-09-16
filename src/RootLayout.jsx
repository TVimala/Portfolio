import React from 'react'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import { Outlet ,useLocation} from 'react-router-dom'
function RootLayout() {
  const location=useLocation();
  return (
    <div>
    <Navbar></Navbar>
    <Body></Body>
    <div style={{ minHeight:'100vh'}}>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}
export default RootLayout