/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { logo, InternationalIcon, arrowDownWhite } from '../../images';
import { Link } from 'react-router-dom';
import { HeaderFeatures } from '../../data';
import { DesktopHeaderDropdown } from './dropdown/desktopdropdown';
import PrimaryButton from '../button/button.primary';
import { colors } from '../../styles/theme';


const how_it_works_items = [
  {
    title: "Clients",
    href: "/how-it-works/clients"
  },
  {
    title: "Freelancer",
    href: "/how-it-works/freelancers"

  },
  {
    title: "Enterprise",
    href: "/how-it-works/enterprise"

  },
]

const language_items = [
  {
    title: "ENG",
  },
  {
    title: "FRA"
  },
  {
    title: "ESP"
  },
  {
    title: "GER"
  },
  {
    title: "POR"
  },

]



const DesktopNavbar = () => {
  const [selected, setSelected] = useState(language_items[0]?.title);
  const [input, setInput] = useState({
    search: '',
  })
  const [showSearchBtn, setShowSearchBtn] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    input.search !== '' && setShowSearchBtn(true)
    input.search === '' && setShowSearchBtn(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.search])

  const handleChange = (e) => {
    setInput({ ...input, search: e.target.value })
  }

  const handleLanguageSelect = (e) => {
    setSelected(e.target.value)
  }

  return (
    <>
      <nav className="bg-white border-gray-200 fixed w-full z-20 top-0 left-0">
        <div className="max-w-[95vw] xl:max-w-[90vw] flex items-center justify-between mx-auto p-4">
          <div className='flex basis-1/2 items-center'>
            <Link to="/">
              <img src={logo} alt="platform-logo" className='h-8 mr-3' />
            </Link>
            <div className="xl:pl-20 flex justify-between items-center space-x-7">
              <Link to="/" passHref={true}>
                <a className="flex items-center">
                  <p
                    className="flex items-center cursor-pointer font-bold"
                  >
                    Home
                  </p>
                </a>
              </Link>
              <DesktopHeaderDropdown
                width="213px"
                button={() => (
                  <div className="flex items-center cursor-pointer font-bold space-x-3"
                    // onMouseEnter={() => setDropdown(true)}
                    // onMouseLeave={() => setDropdown(false)}
                  >
                    <p
                    >
                      How it works
                    </p>
                    <img src={arrowDownWhite} alt="" />
                    {/* {dropdown ? (
                      <img src={arrowUpYellowIcon} alt="" />
                    ) : (
                      <img src={arrowDownWhite} alt="" />
                    )} */}
                  </div>
                )}
                items={how_it_works_items}
              />
              <DesktopHeaderDropdown
                width="170px"
                button={() => (
                  <div
                    className=" flex items-center justify-center cursor-pointer mt-2 font-bold"
                  >
                    <img
                      src={InternationalIcon}
                      alt="International"
                      className="mr-3"
                    />
                    <div className='flex items-center space-x-2'>
                      <p className=''>{selected}</p>
                      <img src={arrowDownWhite} alt="" />
                    </div>
                  </div>
                )}
                items={language_items}
                handleLanguageSelect={handleLanguageSelect}
                selected={selected}
              />
            </div>
          </div>

          <div className="flex items-center basis-1/2 space-x-3">
            <div className="relative md:block basis-3/4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={input.search} onChange={(e) => handleChange(e)} className="block py-3 pl-10 text-sm w-full text-gray-500 border border-gray-300 rounded-lg  focus:outline-none" placeholder='Search "react”' />
              {showSearchBtn && <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none focus:pointer-events-auto"> <PrimaryButton bg={colors.dark} color={colors.white} p={'7px 16px'} className='my-3 p-2 mx-2 cursor-pointer pointer-events-auto' hoverBg={colors.darkGrey}>Search</PrimaryButton></div>}
            </div>
            <div className='flex basis-1/4 space-x-3'>
              <Link to={`/signin`}>
                  <PrimaryButton className='text-dark py-3 border min-w-[76px]' hoverBg={colors.lightAsh}>
                    Log in
                  </PrimaryButton>
              </Link>

              <Link to={`/signup`}>
                  <PrimaryButton className='text-dark py-3 min-w-[89px]' bg={colors.yellow} hoverBg={colors.lightYellow}>
                    Sign up
                  </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>

        <div className='max-w-[95vw] xl:max-w-[90vw] flex flex-wrap items-center space-x-6 mx-auto pt-3 pb-4 xl:pl-6'>
          {HeaderFeatures?.map((feature, i) => (
            <p key={i} className={`cursor-pointer hover:bg-[${colors.dark}]`}>{feature?.name}</p>
          ))}
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
