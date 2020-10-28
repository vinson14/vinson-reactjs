import React from "react";
import { Col, Button } from "react-bootstrap";

class Flipcard extends React.Component {
    constructor() {
        super();
        this.state = {
            flipped: "",
        };
    }

    flipCard = () => {
        if (!this.state.flipped) {
            this.setState({
                flipped: "flipped",
            });
        } else {
            this.setState({
                flipped: "",
            });
        }
    };

    render() {
        const style = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/flipcards/${this.props.experience.img})`};

        return (
            <Col key={this.props.experience.role} xs={12} className="my-3">
                <div className="flip-card">
                    <div className={`flip-card-inner ${this.state.flipped}`} style={style}>
                        <div className="flip-card-front">
                            <h1 className="pri-font text-center">
                                {this.props.experience.role}
                            </h1>
                            <h2 className="pri-font font-weight-light text-center">
                                {this.props.experience.institution}
                            </h2>
                            <h3 className="sec-font mb-5 text-center">
                                {this.props.experience.period}
                            </h3>
                            <Button
                                variant="outline-light"
                                className="sec-font"
                                onClick={this.flipCard}
                            >
                                Find out more
                            </Button>
                        </div>
                        <div className="flip-card-back p-4 text-white">
                            {this.props.experience.details
                                .split("\n")
                                .map((line) => {
                                    return (
                                        <h4
                                            className="my-2 sec-font"
                                            key={line}
                                        >
                                            {line}
                                        </h4>
                                    );
                                })}
                            <Button
                                variant="outline-light"
                                className="sec-font align-self-center mt-5"
                                onClick={this.flipCard}
                            >
                                See Less
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Flipcard;
