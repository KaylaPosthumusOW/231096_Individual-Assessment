import NavBar from "../components/NavBar"
import '../styles/homepage.css'
import HeroImg from "../assets/Hero-img.png"
import PrimaryBtn from "../components/PrimaryBtn";
import '../styles/Buttons.css'


function Homepage() {
  return (
    <div className="homepage-bg">
        <NavBar />
        <div className="hero-section">
            <img className="hero-img" src={HeroImg} alt="Purrfect Pets" />
            <h1 className="heading">Purrrfect</h1>
            <h1 className="heading-2">Pets</h1>
            <p className="text">At Purrrfect Pets, we believe that pets are more than just animals—they're family. Our mission is to provide you with everything you need to keep your furry, feathered, or finned friends happy and healthy.</p>
            
        </div>
            <div className="rectangle" style={{marginTop: "40px"}}></div>
        <div className="container details">
            <h1 style={{color: "transparent"}}>Here's How it Works</h1>
        </div>
    </div>
  );
}

export default Homepage;