import React, { Component } from 'react'

class Likes extends Component {
    state = {
        likeState: false
    }

    render() {
        console.log(this.state.likeState);
        return (
            <i className={this.state.likeState ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true" onClick={this.likeHandler} ></i >
        );
    }

    likeHandler = () => {
        const currentState = this.state.likeState;
        this.setState({ likeState: !currentState });
    }

}

export default Likes;