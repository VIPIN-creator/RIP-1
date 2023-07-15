import React from 'react';
import { connect } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav, Navbar, Button, NavDropdown} from 'react-bootstrap';
import { logout } from '../actions/users';

const LogoutButton = ({auth, logout})=>{
    if(auth.isSignedIn){
        console.log(auth.type);
        return <Button variant="dark" onClick={ ()=>{ logout() } }>Logout</Button>
    } else{
        return <></>;
    }
}

const AuthNav = ({auth}) => {
    if (auth.isSignedIn) {
        return  (
            <Nav className="me-auto">
                <LinkContainer to="/sessions">
                    <Nav.Link>Interviews</Nav.Link>
                </LinkContainer>
                {
                    auth.type == 'admin' && 
                    <LinkContainer to="/questions">
                        <Nav.Link>Questions</Nav.Link>
                    </LinkContainer>
                }
                {
                    auth.type == 'admin' && 
                    <NavDropdown title="Admin Actions" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <LinkContainer to="/user/create">
                                <Nav.Link>Create User</Nav.Link>
                            </LinkContainer>
                        </NavDropdown.Item>
                    </NavDropdown>
                }
            </Nav>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <>
                <Navbar expand="lg" className="back"  bg="dark" data-bs-theme="dark">
                    <Container>
                    <img alt="logo" src="../../rbbn.png"
                        style={{
                        height: 40,
                        width: 40
                        }}
                    />
                        <LinkContainer to="/">
                            <Navbar.Brand className = "ps-3">
                                 Ribbon Interview Platform
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <AuthNav auth={this.props.auth}/>
                        <Nav>
                            <LogoutButton auth={this.props.auth} logout={this.props.logout}/>
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

export default connect(mapStateToProps,{logout})(Header);