import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group col-4">
            <label htmlFor={name}>{label}</label>
            <input className="form-control" id={name} {...rest} name={name} autoFocus />
            {error && <div className="bg-color text-light p-2 rounded">{error}</div>}
        </div>
    );
}

export default Input;