import React from 'react';

const Select = ({name, label,options, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                {...rest}
                name={name}
                id={name}
                className="form-control">
                <option value=""></option>
                {options.map(option=>(
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}

            </select>
            {error && <p className = "some-class" >{error} </p>}
        </div>

    );
};

export default Select;
