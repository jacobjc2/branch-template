import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import TBWoods from '../assets/TBWoods.png';
import Repairhome from '../assets/Repairhome.jpg';
import OPTN from '../assets/OPTN.png';
import Aggregate from '../assets/Aggregate.jpg';
import Conveyor from '../assets/Conveyor.jpg';
import { Container, Row, Col } from "react-bootstrap";

export const HomePage = () => {
    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item>
                    <img src={slider1} alt="Second slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider2} alt="Second slide" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider3} alt="Second slide" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className="bg-light">
                <Row className="mt-3 justify-content-center">
                    {/* <h3>Weimer Bearing & Transmission</h3> */}
                    <Button className="w-25" variant="dark">Request a Quote Now</Button>
                    <p className="fw-bold mt-1">If you are experiencing stock outs, we can help find a suitable alternative!<br/></p>
                    <p className="w-50">Specializing in high-tech electrical motion control, mechanical power transmission and fluid control products, Weimer Bearing & Transmission offers in-house engineering support, complete machining and fabrication services, as well as product repair and custom tailored inventory solutions. Weimer is now positioned as one of the largest independent, privately held, family owned businesses of its kind, spanning four generations. Weimer has steadily added new and innovative products to its offering, while heavily investing in highly skilled employees and state-of-the-art equipment. Weimer has expanded its geographical reach to nine states, allowing Weimer to better serve the midwest marketplace.<br/></p>
                </Row>
                <Row className="mt-3 mb-5 justify-content-center">
                    <Button className="w-25" variant="dark">See our Popular Products</Button>
                </Row>
            </Row>
            <Row className="mt-3 justify-content-center">
                <Row className="w-75">
                    <Col>
                        <img src={TBWoods}></img>
                    </Col>
                    <Col>
                        <h1 className="pb-2 text-danger">
                            Products
                        </h1>
                        <p className="mb-5 text-start">
                        Weimer Bearing & Transmission offers a wide range of products for a variety of industries. Weimer consistently adds new and innovative products, in order to maintain it's position as a leading distributor of mechanical, electrical and pneumatic components. Contact Weimer today to learn more about their expanding product offering.
                        </p>
                        <div>
                            <hr class="w-25 m-auto border-danger" />
                        </div>
                        <img className="mt-5" src={OPTN}></img>
                    </Col>
                </Row>
            </Row>
            <Row className="mt-3 justify-content-center">
                <Row className="w-75">
                    <Col>
                        <h1 className="pb-2 text-danger">
                            Services
                        </h1>
                        <p className="mb-5 text-start">
                        Weimer Bearing & Transmission offers a variety of customized industrial services and innovative solutions to help save OEM and MRO customers both time and money. These custom tailored industrial services help add value and allow for single sourcing.
                        </p>
                        <div>
                            <hr class="w-25 m-auto border-danger" />
                        </div>
                    </Col>
                    <Col xs={8}>
                        <img src={Repairhome}></img>
                    </Col>
                </Row>
            </Row>
            <Row className="mt-5 mb-5 justify-content-center">
                <Row className="w-75">
                    <Col>
                        <img src={Aggregate}></img>
                    </Col>
                    <Col>
                        <h1 className="pt-4 pb-2 text-danger">
                            Industries
                        </h1>
                        <p className="mb-5 text-start">
                        Weimer Bearing services a number of industries, offering world-class motion control products that keep your applications running smoothly. Weimer continuously adds new and innovative products to their offering in order to remain at the forefront of emerging technologies.                        </p>
                        <div>
                            <hr class="w-25 m-auto border-danger" />
                        </div>
                    </Col>
                    <Col>
                        <img src={Conveyor}></img>
                    </Col>
                </Row>
            </Row>
            <Row className="bg-light">
                <Row className="mt-5 justify-content-center">
                    <h3>Contact Your Nearest Location</h3>
                    <p className="mt-1">30+ Stocking Locations Throughout the Midwest & National Distribution Centers in Indianapolis and Reno - Find a Location Nearest You!.<br/></p>
                    <Button className="mb-5 w-25" variant="dark">Find Your Location</Button>
                </Row>
            </Row>
            
            
        </Container>
    );
}