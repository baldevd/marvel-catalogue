import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Autocomplete from 'react-autocomplete';
import mcu from './mcu.json';

function AutoCompletedSearchMovies(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSelect = (val) => {
    setSearchValue(val);
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
    <Form onSubmit={callSearchFunction} >
      <Form.Row controlid="search">
        <Col>
          <Autocomplete
            getItemValue={(item) => item["title"]}
            items={mcu.movies}
            shouldItemRender={(item, value) => item["title"].toLowerCase().indexOf(value.toLowerCase()) > -1}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item["title"]}
              </div>
            }
            value={searchValue}
            onChange={handleSearchInputChanges}
            onSelect={handleSelect}
          />
        </Col>
        <Col>
          <Button size="lg" type="submit">Search</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default AutoCompletedSearchMovies;