import React from 'react';
import Card from 'react-bootstrap/Card';
import PrimaryBtn from './PrimaryBtn';

function AdoptCard({ id, name, age, breed, description, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><h4 style={{color: "#4A3A28"}}>{name}</h4></Card.Title>
        <Card.Text style={{color: "#97461B", fontSize: "20px", fontWeight: "500"}}>{breed}</Card.Text>
        <Card.Text style={{marginTop: "-15px", fontSize: "16px", fontWeight: "400"}}>{age}</Card.Text>
        <Card.Text>
          {description}
        </Card.Text>
        <div style={{ marginLeft: "23%" }}>
            <PrimaryBtn label="Adopt Now" />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AdoptCard;
