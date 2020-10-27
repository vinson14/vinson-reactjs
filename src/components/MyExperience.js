import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import img from "../static/img/portfolio/1.jpg";

class MyExperience extends React.Component {
    render() {
        const experiences = this.props.experiences.map((e) => {
            return (
                <Col key={e.role} xs={12} className="my-3">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src={img} fluid/>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                </Col>
            );
        });

        return (
            <Row>
                <Col xs={12} className="text-white pri-font text-center">
                    <h1>
                        My <span className="green-color">Experience</span>
                    </h1>
                </Col>
                {experiences}
            </Row>
        );
    }
}

export default MyExperience;
