import Card from 'react-bootstrap/Card';
import PrimaryBtn from './PrimaryBtn';

function ItemCards({ name, description, price, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <PrimaryBtn label="Buy Now" />
      </Card.Body>
    </Card>
  );
}

export default ItemCards;
