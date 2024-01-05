import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BearingsProduct from '../../assets/ProductCategories/BearingsProduct.png';



export const ProductsPage = () => {

    const products = [
        {
            id: 1,
            name: "Bearings",
            desc: "Weimer offers a wide variety of plain, naked, housed and linear bearings for any industrial application",
            img: BearingsProduct,
            link: "/products/productone"
        },
        {
            id: 2,
            name: "Electronic Motion Control",
            desc: "Weimer has a complete offering of electrical components, including motors, brakes, inverters, controls and sensors",
            img: BearingsProduct,
            link: "/products/producttwo"
        },
        {
            id: 3,
            name: "Fluid Power",
            desc: "Weimer supplies a full range of pneumatic and hydraulic components, consisting of air prep, cylinders, valves, vacuum and other fluid power accessories",
            img: BearingsProduct,
            link: "/"
        },
        {
            id: 4,
            name: "Material Handling",
            desc: "Weimer's product offering contains material handling components and complete conveyor systems, including belting, pulleys, bearings, and conveyors",
            img: BearingsProduct,
            link: "/"
        }
    ]

    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="page-head">Products</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing & Transmission offers a wide range of products for a variety of industries. Weimer consistently adds new and innovative products, in order to maintain it's position as a leading distributor of mechanical, electrical, hydraulic and pneumatic components. Contact Weimer today to learn more about their expanding product offering.<br/></p>
                </Row>
            </Row>
            <Row className="justify-content-center">
                <Row className="mt-3 w-50 justify-content-between" >
                    {products.map(({id, name, desc, img, link}) => (
                        <Card id={id} className="mb-3 bg-light border-0 rounded-0" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title><a className="card-head" href={link}>{name}</a></Card.Title>
                                <Card.Text className="text-start" >
                                {desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Row>
        </Container>
    );
}