import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        console.log(errors);
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

    }

    handleSubmit = event => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        // console.log(this.state.errors);
        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    }

    renderButton(label) {
        return <button className="btn bg-color text-light pr-4 pl-4 mt-2" disabled={this.validate()}>{label}</button>
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        return <Input name={name} value={data[name]} onChange={this.handleChange} label={label} error={errors[name]} type={type} />
    }

    renderSelect(name, label, genres) {
        const { data, errors } = this.state;
        return <Select name={name} value={data[name]} onChange={this.handleChange} label={label} error={errors[name]} options={genres} />
    }

}

export default Form;