import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import header_image from '../assets/header_image.png';

export const Header = () => {

    return (
        <div>
            <a href="/">
                <img style={{ maxWidth: "100%" }} src={header_image}>
                </img>
            </a>
        </div>
        
    );
}
