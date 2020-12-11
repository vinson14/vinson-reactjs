import React from "react";

import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

const MOBILEWIDTH = 992;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            links: [
                { id: 1, text: "Home", path: "/" },
                { id: 2, text: "About Me", path: "/about" },
                { id: 3, text: "My Experience", path: "/experience" },
                { id: 4, text: "Contact Me", path: "/contact" },
                { id: 5, text: "Explore", path: "/explore" },
            ],
        };
    }

    handleWindowResize = () => {
        this.setState({
            isMobile: window.innerWidth < MOBILEWIDTH,
        });
    };

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < MOBILEWIDTH,
        });
        window.addEventListener("resize", this.handleWindowResize);
    }

    render() {
        if (this.state.isMobile) {
            return (
                <NavBarMobile
                    links={this.state.links}
                    pos={this.props.pos}
                    bg={this.props.bg}
                />
            );
        }
        return (
            <NavBar
                links={this.state.links}
                pos={this.props.pos}
                bg={this.props.bg}
            />
        );
    }
}

export default Header;
