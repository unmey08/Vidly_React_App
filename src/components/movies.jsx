import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import Pagination from '../common/pagination';
import { paginate } from "../utils/paginate.js";
import Filters from '../common/filters';
import _ from 'lodash';
import '../App.css';

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        sortColumn: { path: 'title', order: 'asc' }

    }

    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleGenreChange = genre => {
        this.setState({ currentGenre: genre, currentPage: 1 });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPagedData = () => {
        const { pageSize, currentPage, movies: allMovies, currentGenre, sortColumn } = this.state;
        const filtered = currentGenre && currentGenre._id ? allMovies.filter(m => m.genre._id === currentGenre._id) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: movies }
    }

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, genres, currentGenre } = this.state;

        if (count === 0)
            return <p className="mt-5 mb-5 top-line">There are no movies in the database.</p>
        const { totalCount, data } = this.getPagedData();

        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <Filters genres={genres} onGenreChange={this.handleGenreChange} currentGenre={currentGenre} />
                    </div>
                    <div className="col">
                        <p>Showing {totalCount} movies in the database</p>
                        <MoviesTable movies={data} onLike={this.handleLike} onDelete={this.handleDelete} handleSort={this.handleSort} sortColumn={sortColumn} onSort={this.handleSort} />
                        <Pagination itemsCount={totalCount} pageSize={pageSize} onPageChange={this.handlePageChange} currentPage={currentPage} />
                    </div>
                </div>
            </div >
        );
    }
}

export default Movies;