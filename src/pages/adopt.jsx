import SecondaryBtn from "../components/SecondaryBtn"
import NavBar from "../components/NavBar";
import ItemCards from "../components/itemCard";
import { Link } from "react-router-dom";

function Adopt() {
    return (
      <div className="homepage-bg">
        <NavBar />
        <div className="container flex justify-items-center">
          <h1 className="mt-4">Adopt a Pet</h1>
          <p style={{width: "70%", marginTop: "20px"}}>Welcome to our adoption center! Here, you can find wonderful dogs who are eagerly waiting for their forever homes. You can also give a dog up for adoption, there is no shame in realising someone else can give him a safer home.</p>
          
        <div className="row mt-4">
            <div className="col-4 mt-1">
                <h4>Want to do the responsible thing?</h4>
            </div>
            <div className="col-8">
                <Link to="/addAdoption"><SecondaryBtn label="Add a Pet for Adoption" /></Link> 
            </div>
        </div>  
          <div style={{width: "80%", height: "3px", backgroundColor: "#4A3A28", marginTop: "40px"}}></div>
        <div>
            <h2 className="mt-5">Our Pets Ready for Adoption</h2>
            <p style={{width: "73%", marginTop: "20px"}}>Below, you'll find some of the adorable dogs currently available for adoption. Each one has a unique personality and story, ready to enrich your life with love and companionship. Take your time to browse through their profiles and get to know them better.</p>
        </div>
          
        <div className="row">
            <div className="col-3">
                <ItemCards />
            </div>
            <div className="col-3">
                <ItemCards />
            </div>
            <div className="col-3">
                <ItemCards />
            </div>
            <div className="col-3">
                <ItemCards />
            </div>
        </div>

        </div>
      </div>
    );
  }
  
  export default Adopt;