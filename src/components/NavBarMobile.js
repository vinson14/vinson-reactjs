import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Image, Button, Nav } from "react-bootstrap";

import logo from "../static/logos/vinsonong.png";

class NavBarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleIcon: "fa-bars",
            navbarActive: "",
        };
    }

    toggleNavBar = () => {
        if (this.state.navbarActive) {
            this.setState({
                navbarActive: "",
                toggleIcon: "fa-bars",
            });
        } else {
            this.setState({
                navbarActive: "active",
                toggleIcon: "fa-times",
            });
        }
    };

    render() {
        const links = this.props.links.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="pri-font text-white my-3 py-3 h3"
                    exact
                >
                    {link.text}
                </NavLink>
            );
        });
        return (
            <div
                className={`navbar-mobile d-flex justify-content-between ${this.props.pos}-top bg-${this.props.bg}`}
            >
                <Link to="/" id="logo">
                    <Image src={logo} width="120" />
                </Link>
                <Button
                    variant="outline-dark"
                    className="p-5"
                    onClick={this.toggleNavBar}
                >
                    <i
                        className={`fas ${this.state.toggleIcon} fa-2x text-light`}
                    />
                </Button>
                <Nav id="navbar-mobile" className={this.state.navbarActive}>
                    {links}
                </Nav>
            </div>
        );
    }
}

export default NavBarMobile;
