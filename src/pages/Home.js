import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/Header";

class Home extends React.Component {
    render() {
        const roles = [
            "Financial Consultant",
            "Web Developer",
            "Hobbyist Photographer",
        ];

        return (
            <div className="Home">
                <Header pos="fixed" bg="transparent"/>
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <Row>
                        <Col className="translucent-black p-5">
                            <h1 className="text-white pri-font font-weight-light">
                                Hi there! I am{" "}
                                <span className="green-color font-weight-bold">
                                    Vinson
                                </span>
                            </h1>
                            <div className="typewriter mt-4">
                                {roles.map((role) => (
                                    <p className="typewriter-font h5 text-white my-3" key={role}>
                                        {role}
                                    </p>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
