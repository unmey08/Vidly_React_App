import React from 'react';

const Input = ({ name, label, value, onChange, error }) => {
    return (
        <div className="form-group col-4">
            <label htmlFor={name}>{label}</label>
            <input type={name} className="form-control" id={name} value={value} name={name} autoFocus onChange={onChange} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;