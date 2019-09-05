import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
    return (
        <div className="form-group col-4">
            <label htmlFor={name}>{label}</label>
            <select className="form-control" id={name} {...rest} name={name}>
                <option value=""></option>
                {options.map(option => <option value={option._id} key={option._id}>{option.name}</option>)}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Select;