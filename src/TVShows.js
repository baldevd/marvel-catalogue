import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function TVShows({ image, title, overview, phase, saga, release, lastAired, seasons, episodes }){
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
                <ListGroupItem>Last Aired: {lastAired}</ListGroupItem>
                <ListGroupItem>Seasons: {seasons}</ListGroupItem>
                <ListGroupItem>Episodes: {episodes}</ListGroupItem>
            </ListGroup>
        </Card>
    );

}

export default TVShows;