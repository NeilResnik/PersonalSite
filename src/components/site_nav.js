import React from 'react';
import { Link } from 'gatsby';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function SiteNav({ pageInfo }) {
    return (
        <Container>
            <Navbar variant='dark' bg='dark'>
                <Link to="/" className="link-no-style">
                    <Navbar.Brand as="span">Neil Resnik</Navbar.Brand>
                </Link>
                <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
                    <Link to="/about" className="link-no-style">
                        <Nav.Link as="span" eventKey="about">About</Nav.Link>
                    </Link>
                    <Link to="/work_history" className="link-no-style">
                        <Nav.Link as="span" eventKey="work_history">Work History</Nav.Link>
                    </Link>
                    <NavDropdown title="External Sites">
                        <NavDropdown.Item href="https://github.com/NeilResnik">Github</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/neilresnik/">LinkedIn</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default SiteNav;
