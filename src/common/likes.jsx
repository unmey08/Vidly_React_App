import React from 'react'

const Likes = ({ lState, onClick }) => {
    return (
        <i className={lState ? "fa fa-heart clickable" : "fa fa-heart-o clickable"} aria-hidden="true" onClick={onClick}></i>
    );
}

export default Likes;
