import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Search(props) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    } 

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <Form id='searchbar' onSubmit={callSearchFunction}>
            <Form.Row controlid="search">
                <Col>
                    <Form.Control size="lg" type="text" value={searchValue}  onChange={handleSearchInputChanges}/>
                </Col>
                <Col>
                    <Button size="lg" type="submit">Search</Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default Search;