import React from "react";
import { Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

class MyQualifications extends React.Component {
    render() {
        const qualifications = this.props.qualifications.map((q) => {
            return (
                <Col
                    key={q.name}
                    xs={12}
                    md={6}
                    className="pri-font text-white text-center p-3"
                >
                    <div className="border border-grey p-3 d-flex flex-column justify-content-center align-items-center">
                        <p className="my-1">{parse(q.name)}</p>
                        <p className="text-yellow mt-3">{q.institution}</p>
                    </div>
                </Col>
            );
        });

        return (
            <Row className="border-bottom border-grey p-5 justify-content-center qualifications">
                <Col xs={12} className="my-3">
                    <h1 className="text-center text-white pri-font font-weight-light">
                        My <span className="green-color">Qualifications</span>
                    </h1>
                </Col>
                {qualifications}
            </Row>
        );
    }
}

export default MyQualifications;
