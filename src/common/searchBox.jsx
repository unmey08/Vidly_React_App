import React from 'react';

const SearchBox = props => {
    return (
        <input type="text" placeholder="Search..." className="mt-2 mb-4 col form-control" onChange={(event) => props.onChange(event.currentTarget.value)} value={props.value} name="query"/>
    )
}

export default SearchBox;