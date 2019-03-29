import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Likes from './likes';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    render() {
        return (
            <div>
                <h2 className="mt-5 mb-5">{this.state.movies.length === 0 ? 'There are no movies in the database' : 'Showing ' + this.state.movies.length + ' movies in the database'}</h2>
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
                                    <td><Likes /></td>
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