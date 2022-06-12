import React from 'react';
import { signOut } from 'firebase/auth';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
                    <Container>
                        <Navbar.Brand to="/"> <img height={30} src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="service"> Services</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link to="about">  About</Nav.Link>
                                {
                                    user ? <button onClick={handleSignOut} >Signout</button>
                                     :
                                        <Nav.Link as={Link} to="login">
                                            Login
                                        </Nav.Link>
                                }



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>



            </>
        );
    };

 export default Header;