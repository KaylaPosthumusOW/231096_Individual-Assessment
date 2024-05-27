import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import PrimaryBtn from "../components/PrimaryBtn";
import "../styles/AddAdoption.css";
import axios from "axios";

function AddPetAdoption() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(""); // Define 'message' state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/adopt/addAdoption', {
        name,
        age,
        breed,
        gender,
        description,
        image,
      });
      setSuccess(true);
      setMessage('Adoption Added Successfully!');
    } catch (error) {
      setError('Error adding Adoption');
    }
  }

  return (
    <div style={{ backgroundColor: "#97461B", height: "100vh" }}>
      <NavBar />
      <form className="form-styling" onSubmit={handleSubmit}>
        <h2 className="mb-3" style={{ color: "#4A3A28" }}>
          Add Dog's Information
        </h2>
        {/* Dog Name */}
        <Form.Group controlId="dogName">
          <Form.Label>Dog Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        {/* Dog Age */}
        <Form.Group controlId="dogAge">
          <Form.Label>Dog Age</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        {/* Dog Breed */}
        <Form.Group controlId="dogBreed">
          <Form.Label>Dog Breed</Form.Label>
          <Form.Control
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </Form.Group>
        {/* Dog Gender */}
        <Form.Group controlId="dogGender">
          <Form.Label>Dog Gender</Form.Label>
          <Form.Control
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        {/* Description */}
        <Form.Group controlId="dogDescription">
          <Form.Label>
            Description: Brief description of the dog's personality,
            temperament, and any special needs
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        {/* Image URL */}
        <Form.Group controlId="dogImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        {error && <div className="text-danger mb-3">{error}</div>}
        {success && (
          <div className="text-success mb-3">Adoption added successfully.</div>
        )}
        <div className="submit-btn">
          <PrimaryBtn label="Add Dog To Adoption List" type="submit" />
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPetAdoption;
