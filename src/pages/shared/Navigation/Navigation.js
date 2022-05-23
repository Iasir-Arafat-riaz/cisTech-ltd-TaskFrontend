import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const user = { user: "user" };

  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark" expand="lg">
        {/* <Container> */}
        {/* <Navbar.Brand className="mx-3" href="#home"></Navbar.Brand> */}
        {/* <NavLink id="com" to="/"><b>SoftzinoTechnologies</b></NavLink> */}
        <h4 id="com">CIS Tech LTD</h4>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <b>Home</b>
            </NavLink>
            <NavLink to="/addInfo">
              <b>Add Info</b>
            </NavLink>
            <NavLink to="/customerList">
              <b>Customer List</b>
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        {/* </Container> */}
        {/* <h6  className="text-light">{user.displayName}</h6> */}
        {user?.displayName ? (
          <button className="logoutButton">
            <b>Logout</b>
          </button>
        ) : (
          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
