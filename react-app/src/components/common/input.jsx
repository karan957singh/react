import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                id={name}
                className="form-control"/>
            {error && <p className = "some-class" >{error} </p>}
        </div>

    );
};

export default Input;
