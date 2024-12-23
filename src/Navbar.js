import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand href="#home" style={{ fontSize: '40px' }}>
            <span className="custom-color">Ad</span>
            <span className="custom">Rol</span>
            <span
              className="custom"
              style={{ fontSize: 'larger', fontStyle: 'italic', display: 'inline-block' }}
            >
              L
            </span>
          </Navbar.Brand>
          
          {/* Navbar Toggle Button (for mobile) */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          {/* Navbar Links (collapses on smaller screens) */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">PRODUCTS</Nav.Link>
              <Nav.Link href="#link">CUSTOMERS</Nav.Link>
              <Nav.Link href="#link">GETTING STARTED</Nav.Link>
              <Nav.Link href="#link">RESOURCES</Nav.Link>
            </Nav>
            
            {/* Buttons on the right side (in the collapsed menu on smaller screens) */}
            <Nav>
              <Nav.Item>
                <Button
                  style={{
                    backgroundColor: 'rgb(255, 102, 0)',
                    borderColor: 'rgb(255, 102, 0)',
                    marginRight: '10px', // Adds spacing between buttons
                  }}
                >
                  TRY IT OUT
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  style={{
                    backgroundColor: 'rgb(247, 242, 238)',
                    color: 'black',
                    borderColor: 'rgb(247, 242, 238)',
                  }}
                >
                  LOGIN
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
