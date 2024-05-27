import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCards from "../components/itemCard";


function PopularToys() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch("/api/toys");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched toys:", data); // Add this line
        setToys(data);
      } catch (error) {
        console.error("Error fetching toys:", error);
      }
    };

    fetchToys();
  }, []);

  return (
    <div className="homepage-bg">
      <div className="container">
        <h1 className="my-4">Popular Toys</h1>
        <Row>
          {toys.length > 0 ? (
            toys.map((toy) => (
              <Col xs={12} md={6} lg={3} key={toy._id} className="mb-4">
                <ItemCards
                  name={toy.name}
                  description={toy.description}
                  price={toy.price}
                  image={toy.image}
                />
              </Col>
            ))
          ) : (
            <div className="w-full flex flex-col justify-center items-center mt-12">
              <h4 className="font-body mb-2">No toys available.</h4>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}

export default PopularToys;
