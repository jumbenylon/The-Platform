import React from 'react';

export default function SelectInput({
    label, 
    id,
    name, 
    value, 
    onChange=()=>{}, 
    placeholder, 
    autoComplete,
    disabled=false, 
    className, 
    children,
    errorState
}) {
    return (
        <div className="space-y-1 col-span-6 sm:col-span-3">
            <label htmlFor={name??'name'} className="block text-sm">
                {label??''}
            </label>
            <select
                id={id??name??'id'}
                name={name??'name'}
                value={value??''}
                onChange={onChange}
                disabled={disabled}
                className={className + " focus:ring-blue-800 focus:border-blue-800 flex-1 block w-full rounded-sm sm:text-sm border-gray-300 placeholder-gray-400"}
                placeholder={placeholder??''}
                autoComplete={autoComplete??''}
                style={{border: errorState ? '2px solid tomato' : ''}}
            >
                {children}
            </select>
        </div>
    )
}
