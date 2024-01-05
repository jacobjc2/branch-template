import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BearingsProduct from '../../assets/ProductCategories/BearingsProduct.png';

export const IndustriesPage = () => {

    const industries = [
        {
            id: 1,
            name: "Aggregate & Mining",
            desc: "Keep your operations running smoothly with the help of Weimer Bearing’s material handling experts",
            img: BearingsProduct,
            link: "/"
        },
        {
            id: 2,
            name: "Agriculture",
            desc: "Weimer offers a full line of critical components that can be found hard at work in the harshest agriculture and lawn & garden applications",
            img: BearingsProduct,
            link: "/"
        },
        {
            id: 3,
            name: "Food & Beverage",
            desc: "Weimer Bearing offers a complete range of food and beverage duty products that increase cost savings, reduce downtime and improve operational efficiency",
            img: BearingsProduct,
            link: "/"
        },
        {
            id: 4,
            name: "Machine Tool Industry",
            desc: "Machine tools assist in many manufacturing processes, including CNC machining, laser or plasma cutting, screw machining, milling, drilling and boring",
            img: BearingsProduct,
            link: "/"
        },
        {
            id: 5,
            name: "Packing Equipment",
            desc: "Weimer Bearing is a leading supplier of electro-mechanical components used in the packaging equipment industry",
            img: BearingsProduct,
            link: "/"
        },
        {
            id: 6,
            name: "Waste & Recycling",
            desc: "Weimer Bearing supplies high quality, durable solutions for all your waste processing and recycling applications",
            img: BearingsProduct,
            link: "/"
        }
    ]


    return (
        <Container fluid>
            <Row className="">
                <Row className="mt-5 mb-5 justify-content-center">
                    <h2 className="page-head">Industries</h2>
                    <div>
                        <hr className=" m-auto mt-2 mb-2 w-50"></hr>
                    </div>
                    <p className="w-50">Weimer Bearing offers a complete line of products for a vast number of industries, including aggregate & mining, agriculture, food & beverage, foundries, logistics & distribution, lumber & wood, machine tool, medical equipment, metal fabricating & machining, packaging equipment, paper & pulp, plastic technologies, printing, wastewater and recycling. Let our team of dedicated experts help solve all of your industrial component needs. Check out a few of our industry spotlights below!<br/></p>
                </Row>
            </Row>
            <Row className="justify-content-center">
                <Row className="mt-3 w-50 justify-content-between" >
                    {industries.map(({id, name, desc, img, link}) => (
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