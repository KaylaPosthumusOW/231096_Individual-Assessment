import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import PrimaryBtn from "../components/PrimaryBtn";
import "../styles/AddAdoption.css";
import { addNewAdoption } from "../services/createPurrfectPetsData";

function AddPetAdoption() {
  const [newAdopt, setNewAdopt] = useState({
    name: "",
    age: "",
    breed: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setNewAdopt({
      ...newAdopt,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewAdoption(newAdopt);
      setMessage("Dog added to adoption list successfully!");
      setError(null);
      // Reset form fields after successful submission
      setNewAdopt({
        name: "",
        age: "",
        breed: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.error("Error adding dog to adoption list:", err);
      setError("Error adding dog to adoption list. Please try again.");
      setMessage("");
    }
  };

  return (
    <div style={{ backgroundColor: "#97461B", height: "100vh" }}>
      <NavBar />
      <form className="form-styling" onSubmit={handleSubmit}>
        <h2 className="mb-3" style={{ color: "#4A3A28" }}>
          Add Dog's Information
        </h2>
        <Form.Group controlId="name">
          <Form.Label>Dog Name</Form.Label>
          <Form.Control
            type="text"
            value={newAdopt.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Dog Age</Form.Label>
          <Form.Control
            type="text"
            value={newAdopt.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="breed">
          <Form.Label>Dog Breed</Form.Label>
          <Form.Control
            type="text"
            value={newAdopt.breed}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Dog Gender</Form.Label>
          <Form.Control
            type="text"
            value={newAdopt.gender}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>
            Description: Brief description of the dog's personality,
            temperament, and any special needs
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newAdopt.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            value={newAdopt.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="submit-btn">
          <PrimaryBtn label="Add Dog To Adoption List" type="submit" />
        </div>
        {message && <p className="text-success">{message}</p>}
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
}

export default AddPetAdoption;
