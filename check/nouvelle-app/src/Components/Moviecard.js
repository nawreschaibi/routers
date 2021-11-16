import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
function Moviecard({movie}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <ReactStars
    count={5}
    size={24}
    value={movie.rate}
    edit={false}
    activeColor="#ffd700"
  />
</Card>
        </div>
    );
}

export default Moviecard
