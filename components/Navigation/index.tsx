import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface IProps {
  defaultActiveKey?: string;
}

const Navigation: React.FC<IProps> = (({ defaultActiveKey }) => (
  <Container>
    <Navbar variant="dark" className="pr-0 pl-0">
      <Nav variant="tabs" className="mr-auto" defaultActiveKey={defaultActiveKey || '/'}>
        <Nav.Item>
          <Nav.Link href="/">Search Movie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/myFavourite">My Favourite</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-end">
        <Navbar.Brand href="#home">IMovie</Navbar.Brand>
      </Nav>
    </Navbar>
  </Container>
));

export default Navigation;
