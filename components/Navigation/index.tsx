import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';

interface IProps {
  defaultActiveKey?: string;
}

const Navigation: React.FC<IProps> = (({ defaultActiveKey }) => {
  const route = useRouter();

  return (
    <Container>
      <Navbar variant="dark" className="pr-0 pl-0">
        <Nav variant="tabs" className="mr-auto" defaultActiveKey={defaultActiveKey || '/'}>
          <Nav.Item>
            <Nav.Link
              active={route.pathname === '/'}
              role="tab"
              onClick={() => {
                route.push('/');
              }}
            >
              Search Movie
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={route.pathname === '/myFavourite'}
              role="tab"
              onClick={() => {
                route.push('/myFavourite');
              }}
            >
              My Favourite
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-end">
          <Navbar.Brand href="#home">IMovie</Navbar.Brand>
        </Nav>
      </Navbar>
    </Container>
  );
});

export default Navigation;
