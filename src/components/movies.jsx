import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Likes from '../common/likes';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    likeHandler = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    render() {
        return (
            <div>
                <p className="mt-5 mb-5">{this.state.movies.length === 0 ? 'There are no movies in the database' : 'Showing ' + this.state.movies.length + ' movies in the database'}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie, current) => {
                            return (
                                <tr key={current}>
                                    <td key={movie.title}>{movie.title}</td>
                                    <td key={movie.genre.name}>{movie.genre.name}</td>
                                    <td key={movie.numberInStock}>{movie.numberInStock}</td>
                                    <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                                    <td><Likes lState={movie.liked} onClick={() => this.likeHandler(movie)} /></td>
                                    <td><button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Movies;