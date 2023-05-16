import React from 'react'
import Button from '../button'

const Features = ({ reverse, image, heading, buttonText, text1, text2 }) => {
    return (
        <div className={`w-100 bg-white px-5 md:px-10 min-h-[546px] gap-3 lg:gap-0 flex py-6 lg:py-0 flex-col-reverse ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
            <div className="lg:w-1/2 grow flex justify-center">
                <img src={image} alt='People working and laughing' className='object-center object-contain w-5/6 grow lg:grow-0' />
            </div>
            <div className='lg:w-1/2 flex lg:pl-16 grow flex-col gap-2 lg:gap-5 lg:px-16'>
                <h2 className='text-xl lg:text-4xl font-extrabold'>{heading}</h2>
                <p className='text-sm md:text-lg text-[#757575] lg:pr-24'>{text1}</p>
                <p className='text-sm md:text-lg text-[#757575] lg:pr-24'>
                    {text2}
                </p>
                <div className='w-2/4'>
                    <Button variant='secondary' className='py-4 font-bold w-1/4 lg:w-max'>{buttonText}</Button>
                </div>
            </div>
        </div>
    )
}

export { Features }