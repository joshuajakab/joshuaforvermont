import React from 'react';
import './input.css';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='formRow-input'>
            {label && (
                <label>
                    <h3 className='label'>{label}</h3>
                </label>
            )}

            <input className='formInput' onChange={handleChange} {...otherProps} />
        </div>

    );
}

export default FormInput;
