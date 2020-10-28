import React from "react";
import { Row, Col } from "react-bootstrap";

import Flipcard from "../components/Flipcard";

class MyExperience extends React.Component {
    render() {
        const experiences = this.props.experiences.map((e) => {
            return <Flipcard experience={e} key={e.role} />;
        });

        return (
            <Row className="border-top border-bottom border-grey p-5 justify-content-center">
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
