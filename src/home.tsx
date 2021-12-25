import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function App() {
    return (
        <body className="bodyhome">
            <Card className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/I/61A2S6i93-L._SX3000_.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Card>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4" style={{ margin: 0, }} >
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>Amazon Gifts</Card.Title>
                                    <Card.Img height={300} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/EPL21_PreP/EPL_2021_BRAND_Dashboard_Card_Hi_Res_XSite_758x608_PV_UK._SY608_CB653195588_.jpg" />
                                    <Button variant="link">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4" style={{ margin: 0, }} >
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>Amazon Gifts</Card.Title>
                                    <Card.Img height={300} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/EPL21_PreP/EPL_2021_BRAND_Dashboard_Card_Hi_Res_XSite_758x608_PV_UK._SY608_CB653195588_.jpg" />
                                    <Button variant="link">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4" style={{ margin: 0, }} >
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>Amazon Gifts</Card.Title>
                                    <Card.Img height={300} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/EPL21_PreP/EPL_2021_BRAND_Dashboard_Card_Hi_Res_XSite_758x608_PV_UK._SY608_CB653195588_.jpg" />
                                    <Button variant="link">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </body>
    );
}

export default App;