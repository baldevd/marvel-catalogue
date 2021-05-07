import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function ComicBook({ image, title, description, pages, isbn, digital }) {
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
                <ListGroupItem>Page Count: {pages}</ListGroupItem>
                <ListGroupItem>ISBN: {isbn}</ListGroupItem>
                <ListGroupItem>Digital Availability (Y/N): {digital}</ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default ComicBook;