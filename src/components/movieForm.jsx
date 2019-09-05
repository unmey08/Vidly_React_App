import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from '../services/fakeMovieService';

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(100).required().label('Number in stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Daily Rental Rate'),
    };

    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.history.push('/movies');
    }

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if (movieId === 'new') return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace('/not-found');
        this.setState({ data: this.mapToState(movie) });
    }

    mapToState = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Movie Form</h1>
                <form className="d-flex align-items-center flex-column " onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', 'Genre', this.state.genres)}
                    {this.renderInput('numberInStock', 'Number in Stock', 'number')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>
                {/* <button className="btn btn-primary" onClick={this.handleSave}>Save</button> */}
            </div >
        );

    }
}

export default MovieForm;