import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BearingsProduct from '../../assets/ProductCategories/BearingsProduct.png';

export const IndustriesPage = () => {
    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="text-danger">Industries</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing offers a complete line of products for a vast number of industries, including aggregate & mining, agriculture, food & beverage, foundries, logistics & distribution, lumber & wood, machine tool, medical equipment, metal fabricating & machining, packaging equipment, paper & pulp, plastic technologies, printing, wastewater and recycling. Let our team of dedicated experts help solve all of your industrial component needs. Check out a few of our industry spotlights below!<br/></p>
                </Row>
            </Row>
            <Row className="justify-content-center bg-light">
                <Row className="mt-3 w-50 justify-content-between" >
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Aggregate & Mining</a></Card.Title>
                            <Card.Text className="text-start" >
                            Keep your operations running smoothly with the help of Weimer Bearing’s material handling experts
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Agriculture</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer offers a full line of critical components that can be found hard at work in the harshest agriculture and lawn & garden applications
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Food & Beverage</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer Bearing offers a complete range of food and beverage duty products that increase cost savings, reduce downtime and improve operational efficiency
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Machine Tool Industry</a></Card.Title>
                            <Card.Text className="text-start" >
                            Machine tools assist in many manufacturing processes, including CNC machining, laser or plasma cutting, screw machining, milling, drilling and boring
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Packing Equipment</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer Bearing is a leading supplier of electro-mechanical components used in the packaging equipment industry
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Waste & Recycling</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer Bearing supplies high quality, durable solutions for all your waste processing and recycling applications
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Row>
        </Container>
    );
}