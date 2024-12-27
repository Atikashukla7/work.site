import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="bg-light text-white py-3"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          {/* Empty space for alignment */}
          <Col xs={6} lg={8} className="d-none d-lg-block"></Col>
          {/* Buttons */}
          <Col
            xs={12}
            lg={4}
            className="d-flex justify-content-center justify-content-lg-end gap-2"
          >
            <Button variant="primary">Call</Button>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#action1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#action2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#action3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
