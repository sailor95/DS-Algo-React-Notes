import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const MyNavbar = () => (
    <Navbar className="mb-3" bg="dark" variant="dark" expand="sm">
        <LinkContainer to="/">
            <Navbar.Brand>
                <FontAwesomeIcon icon={faReact} />
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/">
                    <Nav.Link>
                        Home
                    </Nav.Link>
                </LinkContainer>
                {/* no 'exact' keyword here to show active
                     effect when drop items is active */}
                <LinkContainer to="/react">
                    <NavDropdown title="React">
                        <LinkContainer exact to="/react/form-control">
                            <NavDropdown.Item>Form Control</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/react/context">
                            <NavDropdown.Item>Context</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/react/util-hooks">
                            <NavDropdown.Item>Util Hooks</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/redux">
                    <NavDropdown title="Redux">
                        <LinkContainer exact to="/redux/boilerplate">
                            <NavDropdown.Item>Redux Boilerplate</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/redux/redux-form">
                            <NavDropdown.Item>Redux Form</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/utils">
                    <NavDropdown title="Utils">
                        <LinkContainer exact to="/utils/form">
                            <NavDropdown.Item>Form Control</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/utils/http" >
                            <NavDropdown.Item>HTTP</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/utils/ui-comp" >
                            <NavDropdown.Item>UI Components</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/utils/css" >
                            <NavDropdown.Item>CSS</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default MyNavbar;