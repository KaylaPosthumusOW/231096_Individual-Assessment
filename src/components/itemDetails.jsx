// src/components/ToyDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getToyById } from '../services/getPurrfectPetsData';

function ToyDetails() {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getToyById(id)
      .then((data) => setToy(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!toy) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{toy.name}</h1>
      <img src={toy.image} alt={toy.name} style={{ width: '100%' }} />
      <p>{toy.description}</p>
      <p>Price: {toy.price}</p>
    </div>
  );
}

export default ToyDetails;
