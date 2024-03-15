import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./header.css"
function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand ><Link to={"/"} style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:'35px'}}>BookShelf.</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link className='link' to={"/home"} style={{textDecoration:"none",color:"white"}} >Home</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:"none",color:"white"}}  to={"/favorites"}>Favourites</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:"none",color:"white"}}  to={"/wanttoread"}>Want to Read</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header