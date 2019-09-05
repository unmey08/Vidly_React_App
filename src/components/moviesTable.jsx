import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/table';
import Likes from '../common/likes';


class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`} className="text-primary"><strong>{movie.title}</strong></Link> },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'Like', content: movie => <Likes lState={movie.liked} onClick={() => this.props.onLike(movie)} /> },
        { key: 'Delete', content: movie => <i className="fa fa-trash clickable" onClick={() => this.props.onDelete(movie)}><button className="btn btn-link"></button></i> }
    ]

    render() {
        const { movies, sortColumn, onSort } = this.props;
        return (
            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
        );
    }
}

export default MoviesTable;