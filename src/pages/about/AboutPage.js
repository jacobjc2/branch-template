import React from "react";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import WBTMap from '../../assets/WBTMap.jpg'


export const AboutPage = () => {
    return (
        <Container fluid>
            <Row className="mt-5 mb-5 justify-content-center">
                <h2 className="text-dark">THE WEIMER DIFFERENCE</h2>
                <div>
                    <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                </div>
                <p className="w-50">Weimer Bearing has grown since its inception in 1926 from a one man industrial engineering firm to a multi-location, solution provider for all your mechanical, electrical, pneumatic and hydraulic needs. We are the premier family owned and operated provider of industrial products and solutions in the Midwest and will continue to grow and adapt with the changing needs of our customer base.<br/></p>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <img src={WBTMap}></img>
                </Col>
                <Col className="text-start m-auto">
                    <ul>
                        <li>Privately held</li>
                        <li>One of the Midwest's largest independent suppliers</li>
                        <li>27+ stocking locations in 9 states</li>
                        <li>ISO 9001:2015 certified</li>
                        <li>Founding member of IDC-USA (Independent Distributors Cooperative) – Over 80 members and 300 locations nationally</li>
                        <li>24-hour emergency service and Saturday hours</li>
                        <li>Full service in-house engineering, machining and fabrication</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}