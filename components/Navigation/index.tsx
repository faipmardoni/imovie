import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation: React.FC = () => (
  <Container>
    <Navbar variant="dark">
      <Nav variant="tabs" className="mr-auto" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Search Movie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/my-favorite">My Favourite</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-end">
        <Navbar.Brand href="#home">IMovie</Navbar.Brand>
      </Nav>
    </Navbar>
  </Container>
);

export default Navigation;
