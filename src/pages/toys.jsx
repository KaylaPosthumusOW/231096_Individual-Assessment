// src/components/PopularToys.jsx
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCards from "../components/itemCard";
import { getAllToys } from "../services/getPurrfectPetsData";
import { updateToyById } from "../services/updatePurrfectPetsData";
import { deleteToyById } from "../services/deletePurrfectPetsData"

function PopularToys() {
  const [toys, setToys] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllToys()
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  const handleUpdateToy = (id, updatedToy) => {
    updateToyById(id, updatedToy)
      .then((data) => {
        console.log("Toy updated successfully:", data);
        const updatedToys = toys.map((toy) => (toy._id === id ? data : toy));
        setToys(updatedToys);
      })
      .catch((error) => console.error("Error updating toy:", error));
  };

  const handleDeleteToy = (id) => {
    deleteToyById(id)
      .then(() => {
        console.log("Toy deleted successfully:", id);
        const updatedToys = toys.filter((toy) => toy._id !== id);
        setToys(updatedToys);
      })
      .catch((error) => console.error("Error deleting toy:", error));
  };

  return (
    <div className="homepage-bg">
      <div className="container">
        <h1 className="my-4" style={{ color: "#4A3A28" }}>
          Popular Toys
        </h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <Row>
          {toys.length > 0 ? (
            toys.map((toy) => (
              <Col xs={12} md={6} lg={3} key={toy._id} className="mb-4">
                <ItemCards
                  id={toy._id}
                  name={toy.name}
                  description={toy.description}
                  price={toy.price}
                  image={toy.image}
                  onUpdate={handleUpdateToy}
                  onDelete={() => handleDeleteToy(toy._id)}
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

export default PopularToys;
