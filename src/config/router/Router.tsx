import React from 'react'
import './Router.css'
import { BrowserRouter as Routers , Routes , Route , Link } from 'react-router-dom' 
import Home from '../pages/HOME/Home'
import About from '../pages/ABOUT/About'
import Services from '../pages/SERVICES/Services'
import Blog from '../pages/BLOG/Blog'
import Contact from '../pages/CONTACT/Contact'
import Schedule from '../pages/SCHEDULE/Schedule'
import Gallary from '../pages/GALLARY/Gallary'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Member from '../pages/MEMBER/Member'


export default function Router() {
  return (
    <div>
      <Routers>


<Navbar expand="lg" className="main">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo2_footer.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
        <Navbar.Collapse   id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link className=' fs-5 fw-1 mx-3  text-white'  href='/'>Home</Nav.Link>
            <Nav.Link  className=' fs-5 fw-1 mx-3 text-white' href='About'>About</Nav.Link>
            <Nav.Link  className=' fs-5 fw-1 mx-3 text-white' href='Services'>Services</Nav.Link>
            <Nav.Link  className=' fs-5 fw-1 mx-3 text-white' href='Gallary'>Gallary</Nav.Link>
            <Nav.Link  className=' fs-5 fw-1 mx-3 text-white' href='Contact'>Conatct</Nav.Link>
            <Nav.Link  className=' fs-5 fw-1 mx-3 text-white' href='Schedule'>Schedule</Nav.Link>
            
            <Nav.Link  className=' fs-5 fw-1 mx-3 text-white' href='Blog'>BLog</Nav.Link>
            
          </Nav>
          
            <Button className='btn btn-danger py-2 px-4 fs-5' >     <Nav.Link href='Member'>Bcome a Member</Nav.Link></Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


<Routes>
<Route element={<Home/>} path='/'>home</Route>
  <Route element={<About/>} path='About'>about</Route>
  <Route element={<Services/>} path='Services'>services</Route>
  <Route element={<Blog />} path='Blog'>blog</Route>
  <Route element={<Contact/>} path='Contact'>conatct</Route>
  <Route element={<Schedule/> } path='Schedule'>schedule</Route>
  <Route element={<Gallary/>} path='Gallary'>gallary</Route>
  <Route element={<Member/>} path='Member'>member</Route>



</Routes>
</Routers>
    </div>
  )
}










  

