// itemCard.jsx
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';

function ItemCards({ id, name, description, price, image, onUpdate, onDelete, updateToyById, setToys }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleUpdate = () => {
    const updatedToy = {
      name: updatedName,
      description: updatedDescription,
      price: updatedPrice,
      image: image,
    };
    onUpdate(id, updatedToy); // Pass id and updatedToy to onUpdate
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <Card style={{ width: '18rem', cursor: 'pointer' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {isEditing ? (
          <>
            <input 
              type="text" 
              value={updatedName} 
              onChange={(e) => setUpdatedName(e.target.value)} 
            />
            <input 
              type="text" 
              value={updatedDescription} 
              onChange={(e) => setUpdatedDescription(e.target.value)} 
            />
            <input 
              type="number" 
              value={updatedPrice} 
              onChange={(e) => setUpdatedPrice(e.target.value)} 
            />
            <PrimaryBtn label="Save" onClick={() => handleUpdate(id)} />
            <SecondaryBtn label="Cancel" onClick={() => setIsEditing(false)} />
          </>
        ) : (
          <>
            <Card.Title><h4 style={{color: "#4A3A28"}}>{name}</h4></Card.Title>
            <Card.Text style={{color: "#97461B", fontSize: "20px", fontWeight: "500"}}>R{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <SecondaryBtn label="Update" onClick={() => setIsEditing(true)} />
                </div>
                <div className='col-6'>
                  <PrimaryBtn label="Delete" onClick={handleDelete} />
                </div>
              </div>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemCards;
