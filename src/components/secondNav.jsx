// 2nd Navigation Bar for admin dashboard
import '../styles/browse.css'
import Nav from "react-bootstrap/Nav";

function SecondNav() {
  return (
    <div>
      <Nav className="nav-2" style={{alignItems: "center", justifyContent: "center"}}>
        <Nav.Link href="/browse/toys" style={{color: "white"}}>
          Popular Toys
        </Nav.Link>
        <Nav.Link href="/browse/beds" style={{color: "white"}}>
          Comfy Beds
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default SecondNav;
