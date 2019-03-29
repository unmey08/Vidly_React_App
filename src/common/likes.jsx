import React from 'react'

const Likes = props => {
    return (
        <i className={props.lState ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true" onClick={props.onClick} style={{ cursor: 'pointer' }}></i>
    );
}

export default Likes;
