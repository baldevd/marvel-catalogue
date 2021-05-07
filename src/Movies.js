import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Movies({ image, title, overview, phase, saga, release, duration }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {overview}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Phase: {phase}</ListGroupItem>
                <ListGroupItem>Saga: {saga}</ListGroupItem>
                <ListGroupItem>Release: {release}</ListGroupItem>
                <ListGroupItem>Duration: {duration}</ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default Movies;