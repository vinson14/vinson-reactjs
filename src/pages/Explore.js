import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Header from "../components/Header";

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }

    randomize = () => {
        var element = document.querySelector("#choice");
        var count = 0;
        var id = setInterval(frame, 10);
        var words = [
            "Explore",
            "Exploit",
            "Lalalal",
            "wdkjei#*)fads",
            "fjkl;1230asdf",
        ];
        function frame() {
            if (count === 100) {
                clearInterval(id);
                var rand = Math.random();
                if (rand >= 0.5) {
                    element.innerHTML = "Explore";
                } else {
                    element.innerHTML = "Exploit";
                }
            } else {
                var r = Math.floor(Math.random() * words.length);
                element.innerHTML = words[r];
                count++;
            }
        }
    };

    render() {
        return (
            <div className="Home">
                <Header pos="fixed" bg="transparent" />
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <Row>
                        <Col className="translucent-black p-5 d-flex flex-column align-items-center">
                            <h1
                                className="pri-font green-color font-weight-bold text-center"
                                id="choice"
                            >
                                <span className="text-white font-weight-light">
                                    Life is a constant decision between
                                    exploration and exploitation.
                                    <br /> Should you
                                </span>{" "}
                                explore or exploit{" "}
                                <span className="text-white font-weight-light">
                                    at this moment?
                                </span>
                            </h1>
                            <Button
                                variant="outline-light"
                                className="pri-font p-3 my-3"
                                onClick={this.randomize}
                            >
                                Random
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Explore;
