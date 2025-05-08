import {Navbar, Nav, Container} from 'react-bootstrap';
import './Navigation.scss';

const Navigation = ({title, navItems}) => {
    
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navItems.map((item, index) => (
                                <Nav.Link 
                                href={`#${item.toLowerCase()}`} 
                                key={index}>
                                {item}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;