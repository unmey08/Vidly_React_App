import React from 'react';

const MovieForm = ({ match, history }) => {

    const handleSave = () => {
        history.push('/movies');
    }

    return (
        <>
            <h1>Movie Form {match.params.id}</h1>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </>
    );
}

export default MovieForm;