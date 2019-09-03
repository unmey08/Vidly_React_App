import React from 'react';

const Filters = ({ genres, onGenreChange, currentGenre, textProperty, valueProperty }) => {
    return (
        <ul className="list-group">
            {genres.map(genre => <li className={currentGenre === genre ? "list-group-item active clickable" : "list-group-item clickable"} key={genre[valueProperty]} onClick={() => onGenreChange(genre)}>{genre[textProperty]}</li>)}

        </ul>
    );
}

Filters.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default Filters;