import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MyExperience from "../components/MyExperience";
import data from "../static/data/data.json";

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience bg-black">
                <Header bg="black" pos="sticky" />
                <Container>
                    <MyExperience experiences={data.experiences}/>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Experience;
