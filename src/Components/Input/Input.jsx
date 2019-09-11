import React from "react";

function Input({ placeholder, value, name, label, inputType, onChange, className}) {


    return(
        <div className="input-container">
                { label && (
                    <label htmlFor="">{label}</label>
                    )
                }
                <input
                    className={''}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={inputType}
                    name={name}
                    value={value}
                />
        </div>
    )
}

export default Input;