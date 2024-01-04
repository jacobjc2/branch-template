import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import AlphabetList from 'react-alphabet-list';
import { AlphaList } from '../../components/AlphaList';


export const ManufacturersPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/test?branch=Template')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    // const onChange = (event) => {
    //   if(event.target.value = "") {
    //     fetch('http://localhost:5000/test?branch=Template')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    //     .catch(error => console.error(error));
    //   }
    //   else {
    //     fetch('http://localhost:5000/test?prod=' + event.target.value + 'branch=Template')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    //     .catch(error => console.error(error));
    //   }
    // };

    return (
      <Container fluid>
        <Row className="">
            <Row className="mt-5 justify-content-center">
                <h2 className="text-danger">Manufacturers</h2>
                <div>
                    <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                </div>
                <p className="w-50">Weimer Bearing & Transmission supplies over 150 of the largest industrial power transmission manufacturers in the world. As a leader in industrial distribution, Weimer is consistently adding new and innovative product lines in order to further respond to our customer's changing needs.<br/></p>
            </Row>
            <Row className="mb-5 justify-content-center">
              <p className="w-50">Contact Weimer today to learn more about the broad range of manufacturers and products represented.</p>
            </Row>
        </Row>
        <Row className="justify-content-center">
          <Row className="w-50 text-start">
            <span>Manufacturers by Product:</span>
            <hr className="mb-1 m-auto"></hr>
            <select className="mb-3">
              <option value="">All</option>
              <option value="prod_bearings">Bearings</option>
              <option value="prod_electrical">Electrical</option>
            </select>
          </Row>
          
          <Row className="mb-2 mt-2 w-75 justify-content-center">
            {data ?  
            <AlphaList data={data} alphaClass="mfg-alpha-list"></AlphaList>
            : 'Loading...'}
          </Row>
          <Row className="bg-light">
              <Row className="mt-5 justify-content-center">
                  <h3>Ready for a Quote? Call Us</h3>
                  <p className="mt-1">Hard to Source Products? Call us, we can find or make.<br/></p>
                  <Button className="mb-5 w-25" variant="dark">Contact Us</Button>
              </Row>
          </Row>
        </Row>
      </Container>
    );
    // <ul className="text-start">
    //         {data.map(({name}) => (
    //           <li>{name}</li>
    //         ))}
    //         </ul>
}