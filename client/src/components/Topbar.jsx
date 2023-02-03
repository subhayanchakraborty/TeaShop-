import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'; 
const Topbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className="text-light"><MdLocalOffer className="text-warning"/>FREE HOME DELIVERY</h6>
            <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName=''>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName=''>
                <Nav.Link>About us</Nav.Link>
            </LinkContainer><LinkContainer to="/contact" activeClassName=''>
                <Nav.Link>Contact us</Nav.Link>
            </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default Topbar