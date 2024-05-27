import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo.png'

function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">
            <div className="flex content-center">
                <img className="h-2" src={Logo} alt="Home" />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="font-body mx-3">Home</Nav.Link>
            <Nav.Link href="/browse" className="font-body mx-3">Browse Items</Nav.Link>
            <Nav.Link href="/adopt" className="font-body mx-3">Adoptions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;