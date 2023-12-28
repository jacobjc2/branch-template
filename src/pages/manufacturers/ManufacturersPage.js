import React, { useState, useEffect } from 'react';
import { Container, Row } from "react-bootstrap";


export const ManufacturersPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/test?prod=prod_bearings&branch=Template')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

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
          <Row className="w-75 justify-content-start">
            {data ? <ul className="text-start">
            {data.map(({name}) => (
              <li>{name}</li>
            ))}
            </ul> : 'Loading...'}
          </Row>
        </Row>
        
      </Container>
    );
}