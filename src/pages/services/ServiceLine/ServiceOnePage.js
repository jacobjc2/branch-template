import React from "react";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

export const ServiceOnePage = () => {
    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="text-dark">Service One</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing offers a number of custom repair services, including way cover, ball screw, gearbox, slide, spindle and electrical components. Custom product repairs can save you money and costly downtime. Contact Weimer today for all your custom repair needs.<br/></p>
                </Row>
            </Row>

            <Row className="mt-3 justify-content-center">
                <Row className="w-75">
                    <Col>
                        <img alt="Testing Image"></img>
                    </Col>
                    <Col sm={5}>
                        <h2 className="pt-4 pb-2">
                            Way Cover
                        </h2>
                        <p className="mb-5 text-center">
                        Complete repair or replacement<br/>Reverse engineered OEM covers<br/>Full dent removal, box and wiper replacement, and cycle testing<br/>Special 24-hour delivery services available</p>
                        <div>
                            <hr class="m-auto" style={{ width: 100 }} />
                        </div>
                    </Col>
                    <Col>
                        <img alt="Testing Image"></img>
                    </Col>
                </Row>
            </Row>

            <Row className="mt-3 justify-content-center">
                <Row className="w-75">
                    <Col>
                        <img alt="Testing Image"></img>
                    </Col>
                    <Col sm={5}>
                        <h2 className="pt-4 pb-2">
                            Way Cover
                        </h2>
                        <p className="mb-5 text-center">
                        Complete repair or replacement<br/>Reverse engineered OEM covers<br/>Full dent removal, box and wiper replacement, and cycle testing<br/>Special 24-hour delivery services available</p>
                        <div>
                            <hr class="m-auto" style={{ width: 100 }} />
                        </div>
                    </Col>
                    <Col>
                        <img alt="Testing Image"></img>
                    </Col>
                </Row>
            </Row>

            <Row className="mt-5 mb-5 justify-content-center">
                <Row className="w-75">
                    <Col>
                        <img alt="Testing Image"></img>
                    </Col>
                    <Col sm={5}>
                        <h2 className="pt-4 pb-2">
                            Way Cover
                        </h2>
                        <p className="mb-5 text-center">
                        Complete repair or replacement<br/>Reverse engineered OEM covers<br/>Full dent removal, box and wiper replacement, and cycle testing<br/>Special 24-hour delivery services available</p>
                        <div>
                            <hr class="m-auto" style={{ width: 100 }} />
                        </div>
                    </Col>
                    <Col>
                        <img alt="Testing Image"></img>
                    </Col>
                </Row>
            </Row>

            <Row className="bg-light">
                <Row className="mt-5 justify-content-center">
                    <h3>Ready for a Quote? Call Us</h3>
                    <p className="mt-1">Hard to Source Products? Call us, we can find or make.<br/></p>
                    <Button className="mb-5 w-25" variant="dark">Contact Us</Button>
                </Row>
            </Row>
        </Container>
    );
}