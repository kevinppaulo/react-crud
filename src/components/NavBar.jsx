import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isEditPage = location.pathname.startsWith("/edit") ||
    location.pathname.startsWith("/new");

  return (
    <Navbar bg="light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> <Navbar.Collapse id="basic-navbar-nav">
        {!isEditPage &&
          (
            <Nav className="justify-content-center" style={{ flex: 1 }}>
              <Link to="/" className="nav-link">Início</Link>
              <Link to="/list" className="nav-link">Lista</Link>
            </Nav>
          )}

        {isEditPage &&
          (
            <Nav>
              <Button
                variant="light"
                style={{ marginLeft: "1rem" }}
                onClick={() => window.history.back()}
              >
              <i className="fa-solid fa-arrow-left-long" style={{marginRight: "1rem"}}></i> Voltar
              </Button>
            </Nav>
          )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
