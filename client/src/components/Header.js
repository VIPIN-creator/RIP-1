import React from 'react';
import { connect } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


class Header extends React.Component{

    render(){
        return(
            <>
                <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>Ribbon Interview Platform</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/sessions">
                                <Nav.Link>Sessions</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/questions">
                                <Nav.Link>Questions</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <NavDropdown title="User" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps,{/*logout*/})(Header);