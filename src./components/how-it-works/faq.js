import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '../../images'

export const FAQ = ({ faqs }) => {
    return (
        <div className='min-h-[472px] bg-[#FAFAFA] flex lg:flex-row flex-col'>
            <div className='lg:w-1/2 grow flex justify-center items-center h-4/5 my-auto px-5 lg:pr-12'><h2 className='text-xl md:text-6xl font-bold'>Frequently Asked Questions</h2></div>
            <div className='lg:w-1/2 grow flex justify-center items-center my-auto'>
                <div className="w-full max-w-3xl rounded-2xl">
                    {faqs?.map((faq, i) => (<Disclosure as="div" className="mt-2" key={i}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-base font-medium bg-white  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                                    <span>{faq.question}</span>
                                    <ChevronDownIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                                    No.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>))}
                </div>
            </div>
        </div>
    )
}
