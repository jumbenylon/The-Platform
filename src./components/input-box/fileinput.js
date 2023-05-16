import React from 'react';
import styled from "styled-components"

const File = styled.div`
  cursor: pointer;

  label {
    position: relative;
    overflow: hidden;
  }

  label + input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
`

export default function FileInput({
    label, 
    id,
    name, 
  type = 'file',
    accept='*',
    value, 
    onChange=()=>{}, 
    placeholder, 
    autoComplete,
    disabled=false, 
    className,
    size,
    errorState
}) {

    return (
        <div className="flex space-y-1 col-span-6 sm:col-span-3 cursor-pointer">
        <File><label htmlFor={name ?? 'file_upload'} className='underline'>{ label}</label><input type={type} id={id} name={name ?? 'file_upload'} accept={accept} /></File>
        <span className="text-xs text-[#999CA0]">({size}mb max)</span>
        </div>
    )
}
