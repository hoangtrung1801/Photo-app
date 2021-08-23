import React from "react";
import "./Menu.scss";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Navbar">
      <Navbar color="light">
        <NavbarBrand href="/">Photo App</NavbarBrand>
        <Nav className="mr-auto Navbar__nav" navbar>
          <NavItem className="Navbar__nav__item">
            {/* <NavLink href="/">Home</NavLink> */}
            <NavLink>
              <Link to="/" style={{ textDecoration: `none` }}>
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem className="Navbar__nav__item">
            <NavLink>
              <Link to="/new" style={{ textDecoration: `none` }}>
                Add new photo
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Menu;
