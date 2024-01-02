import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BearingsProduct from '../../assets/ProductCategories/BearingsProduct.png';


export const ServicesPage = () => {
    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="text-danger">Services</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing & Transmission offers a variety of customized industrial services and innovative solutions to help save valuable time and resources. These value added services include, custom repair, industrial assembly, machining, and custom tailored inventory solutions.<br/></p>
                </Row>
            </Row>
            <Row className="justify-content-center bg-light">
                <Row className="mt-3 w-50 justify-content-between" >
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="services/serviceone">Custom Repair</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer Bearing offers a number of custom repair services, including way cover, ball screw, gearbox, slide, spindle and electrical components
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Machining & Assembly</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer Bearing & Transmission offers a full service machining and assembly facility to help fulfill all of your product needs
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Value Added Services</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer provides a number of in-house services, including 24-hour emergency support , engineering assistance, 3D printing, computerized drive design, vendor managed inventory, and product training.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Row>
        </Container>
    );
}