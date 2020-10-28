import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact bg-black">
                <Header pos="sticky" bg="black" />
                <Container>
                    <Row className="border-top border-grey pt-5 justify-content-center">
                        <Col
                            xs={12}
                            className="text-white pri-font text-center"
                        >
                            <h1>
                                Contact <span className="green-color">Me</span>
                            </h1>
                        </Col>
                    </Row>
                    <Form method="POST" action="https://formspree.io/f/xwkwbkkk">
                        <Row className="justify-content-center p-5">
                            <Col className="my-3" xs={10} md={6} lg={5}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="my-3" xs={10} md={6} lg={5}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        placeholder="Mobile No."
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="my-3" xs={10} md={6} lg={5}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="my-3" xs={10} md={6} lg={5}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="my-3" xs={10} md={12} lg={10}>
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        name="message"
                                        placeholder="Message"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} className="d-flex justify-content-center my-3">
                                <Button type="submit" variant="outline-light" className="pri-font p-3">Send Message</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Contact;
