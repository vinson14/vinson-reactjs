import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import parse from "html-react-parser";

import Vinson from "../static/img/vinson.png";

class AboutMe extends React.Component {
    render() {
        return (
            <Row className="border-top border-bottom border-grey p-5 justify-content-center">
                <Col xs={12} className="my-3">
                    <h1 className="text-center text-white pri-font font-weight-light">
                        About <span className="green-color">Me</span>
                    </h1>
                </Col>
                <Col xs={12} md={6} className="my-3 px-3">
                    <Image src={Vinson} fluid />
                </Col>
                <Col
                    xs={12}
                    md={6}
                    className="my-3 px-3 d-flex flex-column justify-content-center sec-font text-white"
                >
                    <p>{parse(this.props.about.profile)}</p>
                </Col>
            </Row>
        );
    }
}

export default AboutMe;
