import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../common/input';

class LoginForm extends Component {
    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;
        const errors = {}
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    handleSubmit = event => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log('Submitted');
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    render() {
        const { username, password } = this.state.account
        const { errors } = this.state;

        return (
            <div>
                <h1 className="text-center">Login</h1>
                <form className="d-flex align-items-center flex-column" onSubmit={this.handleSubmit}>
                    <Input name="username" value={username} onChange={this.handleChange} label="Username" error={errors.username} />
                    <Input name="password" value={password} onChange={this.handleChange} label="Password" error={errors.password} />
                    <button className="btn btn-primary pr-4 pl-4 mt-2" disabled={this.validate()}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;