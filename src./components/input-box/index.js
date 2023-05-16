import { useState } from "react"

const VARIANTS = {
  default: 'max-w-[32rem] sm:w-[32rem]',
  auto: ''
}

export default function InputBox({
  title,
  name,
  type = 'text',
  placeholder,
  variant = 'default',
  value = '',
  required,
  className,
  onChange,
  contact = false
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className={`${VARIANTS[variant]} mt-5  p-1 my-4 ${className}`}>
      <label id={name} className='text-gray-500 text-sm font-bold pb-2'>{title}
      </label>
      <div className="relative mx-auto">
        {contact && 
          <select
            className="absolute inset-y-0 left-0 flex items-center px-4 text-gray-600 cursor-pointer border rounded-l-md mt-2 h-[2.5rem] border-gray-300"
                // id={id??name??'id'}
                // name={name??'name'}
                // value={value??''}
                // onChange={onChange}
                // disabled={disabled}
                // className={className + " focus:ring-blue-800 focus:border-blue-800 flex-1 block w-full rounded-sm sm:text-sm border-gray-300 placeholder-gray-400"}
                // placeholder={placeholder??''}
                // autoComplete={autoComplete??''}
                // style={{border: errorState ? '2px solid tomato' : ''}}
            >
            {[+41, +42, +43, +44].map((co, i) => (
              <option key={i} value={co}>{co}</option>
            ))}
            </select>
        }
        <input
          onChange={onChange}
          className={`w-full h-[2.5rem] p-[1rem] ${contact && 'pl-20'} border border-gray-300 rounded-md mt-2`}
          type={isPasswordVisible ? "text" : type}
          name={name || ''}
          value={value}
          required={required}
          placeholder={placeholder} />
        {type === "password" &&
          <span
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ?
              <span className="underline underline-offset-1">Hide</span>
              :
              <span className="underline underline-offset-1">Show</span>
            }
          </span>
        }
      </div>
    </div>
  )
}