import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCards from "../components/itemCard";
import { getAllBeds } from "../services/getPurrfectPetsData"; // Assuming this function is defined similarly to getAllToys

function ComfyBeds() {
  const [beds, setBeds] = useState([]);
  const [defaultAllBeds, setDefaultAllBeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBeds()
      .then((data) => {
        setBeds(data);
        setDefaultAllBeds(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="homepage-bg">
      <div className="container">
        <h1 className="my-4" style={{color: "#4A3A28"}}>Comfy Beds</h1>
        <Row>
          {beds.length > 0 ? (
            beds.map((bed) => (
              <Col xs={12} md={6} lg={3} key={bed._id} className="mb-4">
                <ItemCards
                  name={bed.name}
                  description={bed.description}
                  price={bed.price}
                  image={bed.image}
                />
              </Col>
            ))
          ) : (
            <div>
              <h4 className="font-body mb-2">No beds available.</h4>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}

export default ComfyBeds;
