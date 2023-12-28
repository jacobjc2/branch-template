import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const ContactPage = () => {
    return (
        <Container fluid>
            <Row>
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="text-danger">Contact Us</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Contact us regarding our Products and Services!<br/></p>
                </Row>
            </Row>
            <Row className="w-75 m-auto">
                <Col sm={6}>
                    <form className="text-start w-75">
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name*:</label>
                            <input type="email" class="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputCompany1" class="form-label">Company*:</label>
                            <input type="company" class="form-control" id="exampleInputCompany1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email Address*:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPhone1" class="form-label">Phone:</label>
                            <input type="phone" class="form-control" id="exampleInputPhone1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputMessage1" class="form-label">Message:</label>
                            <textarea type="message" class="form-control" id="exampleInputMessage1"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}