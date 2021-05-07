import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Series({ image, title, description, startYear, endYear }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Year Range: {`${startYear}-${endYear}`}</ListGroupItem>
            </ListGroup>
        </Card>
    );

}

export default Series;