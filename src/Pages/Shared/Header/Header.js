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
                    <Navbar.Brand as={Link} to="/"> <img height={30} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services"> Services</Nav.Link>
                            <Nav.Link  as={Link}  to="blog">  blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">  About</Nav.Link>
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