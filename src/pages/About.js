import React from "react";
import { Container} from "react-bootstrap";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import MyQualifications from "../components/MyQualifications";
import data from "../static/data/data.json";
import MySkills from "../components/MySkills";

class About extends React.Component {
    render() {
        return (
            <div className="About bg-black">
                <Header bg="black" pos="sticky" />
                <Container>
                    <AboutMe about={data.about}/>
                    <MyQualifications qualifications={data.about.qualifications} />
                    <MySkills skills={data.about.skills} />
                </Container>
            </div>
        );
    }
}

export default About;
