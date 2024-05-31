import React from 'react';
import Button from "react-bootstrap/Button";
import "../styles/Buttons.css";

function PrimaryBtn(props) {
  const { type, label, onClick } = props; // Destructuring props

  return (
    <Button 
      type={type}
      onClick={onClick}
      className="Primary-button" // Removed unnecessary string interpolation
      style={{
        backgroundColor: "#97461B",
        border: "2px solid #97461B",
      }}
    >
      {label}
    </Button>
  );
}

export default PrimaryBtn;
