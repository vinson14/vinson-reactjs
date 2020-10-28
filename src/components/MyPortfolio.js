import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import data from "../static/data/data.json";

class MyPortfolio extends React.Component {
    render() {
        const photos = [];

        for (let i = 1; i <= data.photoPortfolio; i++) {
            let photo = (
                <Col
                    className="my-3 justify-content-center d-flex"
                    xs={12}
                    lg={6}
                >
                    <Image
                        src={`${process.env.PUBLIC_URL}/img/portfolio/${i}.jpg`}
                        fluid
                    />
                </Col>
            );
            photos.push(photo);
        }

        return (
            <Row className="border-bottom border-grey p-5 justify-content-center">
                <Col xs={12}>
                    <h1 className="text-center text-white pri-font font-weight-light">
                        My <span className="green-color">Portfolio</span>
                    </h1>
                </Col>
                {photos.map((photo) => photo)}
            </Row>
        );
    }
}

export default MyPortfolio;
