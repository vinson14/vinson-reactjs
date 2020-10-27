import React from "react";
import { Row, Col } from "react-bootstrap";

class MySkills extends React.Component {
    render() {
        const skills = this.props.skills.map((s) => {
            return (
                <Col
                    key={s.name}
                    xs={12}
                    md={6}
                    className="pri-font text-white text-left p-3"
                >
                    <div className="d-flex justify-content-between">
                        <h5>{s.name}</h5>
                        <h5 className="green-color">{s.rating}%</h5>
                    </div>
                    <div className="progress">
                        <div
                            className="progress-percent"
                            style={{ width: `${s.rating}%` }}
                        ></div>
                    </div>
                </Col>
            );
        });

        return (
            <Row className="border-bottom border-grey p-5 justify-content-center qualifications">
                <Col xs={12} className="my-3">
                    <h1 className="text-center text-white pri-font font-weight-light">
                        My <span className="green-color">Skills</span>
                    </h1>
                </Col>
                {skills}
            </Row>
        );
    }
}

export default MySkills;
