import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BearingsProduct from '../../assets/ProductCategories/BearingsProduct.png';



export const ProductsPage = () => {
    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="text-danger">Products</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing & Transmission offers a wide range of products for a variety of industries. Weimer consistently adds new and innovative products, in order to maintain it's position as a leading distributor of mechanical, electrical, hydraulic and pneumatic components. Contact Weimer today to learn more about their expanding product offering.<br/></p>
                </Row>
            </Row>
            <Row className="justify-content-center bg-light">
                <Row className="mt-3 w-50 justify-content-between" >
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Bearings</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer offers a wide variety of plain, naked, housed and linear bearings for any industrial application
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Electronic Motion Control</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer has a complete offering of electrical components, including motors, brakes, inverters, controls and sensors
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Fluid Power</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer supplies a full range of pneumatic and hydraulic components, consisting of air prep, cylinders, valves, vacuum and other fluid power accessories
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BearingsProduct} />
                        <Card.Body>
                            <Card.Title><a href="/">Material Handling</a></Card.Title>
                            <Card.Text className="text-start" >
                            Weimer's product offering contains material handling components and complete conveyor systems, including belting, pulleys, bearings, and conveyors
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Row>
        </Container>
    );
}