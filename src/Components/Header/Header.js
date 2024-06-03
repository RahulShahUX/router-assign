import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const pages = ['UseState', 'UseEffect'];

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Nav className="me-auto">
                    <NavLink
                        className="nav-link"
                        to="home"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="router"
                    >
                        Router
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="hooks"
                    >
                        Hooks
                    </NavLink>
                    
                </Nav>
            </Container>
        </Navbar>
    );
}