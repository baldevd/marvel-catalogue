import React, { useState } from 'react';

function RadioButtons(props) {
    const [value, setValue] = useState("");

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleResultTypeChange = (e) => {
        props.change(e.target.value);
    }
    
    return (
        <div className='radioButtons' onChange={handleValueChange}>
            <input type='radio' value='characters' name='search' onClick={handleResultTypeChange} /> Characters
            <input type='radio' value='creators' name='search' onClick={handleResultTypeChange} /> Creators
            <input type='radio' value='comics' name='search'onClick={handleResultTypeChange} /> Comics
            <input type='radio' value='series' name='search' onClick={handleResultTypeChange} /> Series
            <input type='radio' value='events' name='search' onClick={handleResultTypeChange} /> Events
            <input type='radio' value='movies' name='search' onClick={handleResultTypeChange} /> Movies
            <input type='radio' value='tvshows' name='search' onClick={handleResultTypeChange} /> TV Shows
        </div>
    )
}

export default RadioButtons;