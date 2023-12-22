import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Weimer from '../assets/Weimer.png';

export const Navigation = () => {

  const [navImage, setnavImage] = useState(false)
  const navRef = useRef()
  navRef.current = navImage
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200
      if (navRef.current !== show) {
        setnavImage(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

    // State management to show or hide product dropdown
    const [showProd, setProdShow] = useState(false);
    const showProducts = (e)=>{
        setProdShow(!showProd);
    }
    const hideProducts = e => {
        setProdShow(false);
    }

    // State management to show or hide services dropdown
    const [showServ, setServShow] = useState(false);
    const showServices = (e)=>{
        setServShow(!showServ);
    }
    const hideServices = e => {
        setServShow(false);
    }

    // State management to show or hide industries dropdown
    const [showInd, setIndShow] = useState(false);
    const showIndustries = (e)=>{
        setIndShow(!showInd);
    }
    const hideIndustries = e => {
        setIndShow(false);
    }

    // State management to show or hide about dropdown
    const [showAb, setAbShow] = useState(false);
    const showAbout = (e)=>{
        setAbShow(!showAb);
    }
    const hideAbout = e => {
        setAbShow(false);
    }

    // State management to show or hide contact dropdown
    const [showCon, setConShow] = useState(false);
    const showContacts = (e)=>{
        setConShow(!showCon);
    }
    const hideContacts = e => {
        setConShow(false);
    }

    return (
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <img
              src={Weimer}
              width="129"
              height="46"
              // className="d-inline-block align-top"
              alt="NIS Logo"
              style={{ display: navImage?'inline':'none'}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="ml-auto justify-content-end fs-5" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Products" id="basic-nav-dropdown" className="ms-auto"
                show={showProd}
                onMouseEnter={showProducts} 
                onMouseLeave={hideProducts}
                onToggle={() => { window.location.href = '/products'}}>
                <NavDropdown.Item href="/products/product1">Product Line 1</NavDropdown.Item>
                <NavDropdown.Item href="/products/product2">Product Line 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown" className="ms-5"
                show={showServ}
                onMouseEnter={showServices} 
                onMouseLeave={hideServices}
                onToggle={() => { window.location.href = '/services'}}>
                <NavDropdown.Item href="/services/service1">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="/services/service2">Service 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Industries" id="basic-nav-dropdown" className="ms-5"
                show={showInd}
                onMouseEnter={showIndustries} 
                onMouseLeave={hideIndustries}
                onToggle={() => { window.location.href = '/industries'}}>
                <NavDropdown.Item href="/industries/industry1">Industry 1</NavDropdown.Item>
                <NavDropdown.Item href="/industries/industry2">Industry 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/manufacturers"  className="ms-5">Manufacturers</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown" className="ms-5"
                show={showAb}
                onMouseEnter={showAbout} 
                onMouseLeave={hideAbout}
                onToggle={() => { window.location.href = '/about'}}>
                <NavDropdown.Item href="/about/history">History</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contact" id="basic-nav-dropdown" className="ms-5"
                show={showCon}
                onMouseEnter={showContacts} 
                onMouseLeave={hideContacts}
                onToggle={() => { window.location.href = '/contact'}}>
                <NavDropdown.Item href="/contact/locations">Locations</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
