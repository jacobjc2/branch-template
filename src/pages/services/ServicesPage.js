import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BearingsProduct from '../../assets/ProductCategories/BearingsProduct.png';


export const ServicesPage = () => {

    const services = [
        {
            id: 1,
            name: "Custom Repair",
            desc: "Weimer Bearing offers a number of custom repair services, including way cover, ball screw, gearbox, slide, spindle and electrical components",
            img: BearingsProduct,
            link: "/products/productone"
        },
        {
            id: 2,
            name: "Machining & Assembly",
            desc: "Weimer Bearing & Transmission offers a full service machining and assembly facility to help fulfill all of your product needs",
            img: BearingsProduct,
            link: "/products/producttwo"
        },
        {
            id: 3,
            name: "Value Added Services",
            desc: "Weimer provides a number of in-house services, including 24-hour emergency support , engineering assistance, 3D printing, computerized drive design, vendor managed inventory, and product training.",
            img: BearingsProduct,
            link: "/"
        }
    ]

    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="page-head">Services</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing & Transmission offers a variety of customized industrial services and innovative solutions to help save valuable time and resources. These value added services include, custom repair, industrial assembly, machining, and custom tailored inventory solutions.<br/></p>
                </Row>
            </Row>
            <Row className="justify-content-center">
                <Row className="mt-3 w-50 justify-content-between" >
                    {services.map(({id, name, desc, img, link}) => (
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