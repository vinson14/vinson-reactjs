import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../static/logos/vinsonong.png";

class NavBar extends React.Component {
    render() {
        const links = this.props.links.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="pri-font font-light text-white mx-3 p-3"
                    exact
                >
                    {link.text}
                </NavLink>
            );
        });

        return (
            <Navbar
                className={`bg-${this.props.bg} justify-content-between ${this.props.pos}-top`}
            >
                <Navbar.Brand href="/" className="mx-5">
                    <Image src={logo} width="180px" />
                </Navbar.Brand>
                <Nav className="mx-5">{links}</Nav>
            </Navbar>
        );
    }
}

export default NavBar;
