import SecondaryBtn from "../components/SecondaryBtn"
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import AdoptCard from "../components/adoptCard";
import { useEffect, useState } from "react";
import { getAllAdoptions } from "../services/getPurrfectPetsData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Adopt() {
    const [adopt, setAdopts] = useState([]);
    const [defaultAllAdopts, setDefaultAllAdopts] = useState([])

    useEffect(() => {
        getAllAdoptions()
        .then((data) => {
            setAdopts(data);
            setDefaultAllAdopts(data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);


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
        
        <Row>
          {adopt.length > 0 ? (
            adopt.map((adopt) => (
              <Col xs={12} md={6} lg={3} key={adopt._id} className="mb-4">
                <AdoptCard
                  id={adopt._id}  // Pass the id prop here
                  name={adopt.name}
                  age={adopt.age}
                  breed={adopt.breed}
                  description={adopt.description}
                  image={adopt.image}
                />
              </Col>
            ))
          ) : (
            <div>
              <h4 className="font-body mb-2">No toys available.</h4>
            </div>
          )}
        </Row>

        </div>
      </div>
    );
  }
  
  export default Adopt;