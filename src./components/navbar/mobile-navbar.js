import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiChevronDown, FiX } from "react-icons/fi";
import PrimaryButton from "../button/button.primary";
import { colors } from "../../styles/theme";
import { MobileHeaderDropdown } from "./dropdown/mobiledropdown";
import { DesktopHeaderStyle } from "./styles";
import { InternationalIcon, logo } from "../../images";

const how_it_works_items = [
  {
    title: "Clients",
    href: "/"
  },
  {
    title: "Freelancer",
    href: "/"

  },
  {
    title: "Enterprise",
    href: "/"

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


const HeaderDropDown = ({ expanded, setExpanded }) => {
  const [dropDownToShow, setDropDownToShow] = useState("none");

  const toggleDropDownToShow = (dropdown) => {
    if (dropdown === dropDownToShow) {
      setDropDownToShow("none");
    } else {
      setDropDownToShow(dropdown);
    }
  };

  useEffect(() => {
    setDropDownToShow("none");
    return () => {
      setDropDownToShow("none");
    };
  }, []);

  return (
    <div>
      <div>
        {expanded && (
          <div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              // height: "fit-content",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white px-10 pt-9 shadow overflow-y-auto min-h-[95vh] w-screen flex flex-col"
          >
            <div className="flex justify-between w-full mx-auto">
              <PrimaryButton bg={colors.white} color={colors.dark} p="12px 24px" className="border w-[47%]">
                <Link to={'/signin'}>
                  Log in
                </Link>
              </PrimaryButton>

              <PrimaryButton bg={colors.yellow} className="w-[47%]">
                <Link to={'/signup'}>

                  Sign up
                </Link>
              </PrimaryButton>
            </div>

            <Link href={"/"} passHref>
              <a>
                <p
                  fontSize="14px"
                  fontWeight="700"
                  fontFamily="montserrat-semi"
                  color={colors.dark}
                  className="flex items-center mt-8 mb-4 cursor-pointer"
                >
                  Home
                </p>
              </a>
            </Link>
            <p
              fontSize="14px"
              fontWeight="700"
              fontFamily="montserrat-semi"
              color={colors.black}
              className="flex items-center justify-between my-4 cursor-pointer"
              onClick={() => toggleDropDownToShow("how_it_works")}
            >
              How it works <FiChevronDown size={14} className="ml-2" />
            </p>
            {dropDownToShow === "how_it_works" && (
              <MobileHeaderDropdown items={how_it_works_items} />
            )}

            <p
              fontSize="14px"
              fontWeight="700"
              fontFamily="montserrat-semi"
              color={colors.black}
              className="flex items-center justify-between my-4 cursor-pointer"
              onClick={() => toggleDropDownToShow("language")}
            >
              <div className="flex">
                <img
                  src={InternationalIcon}
                  alt="International"
                  className="mr-3"
                />
                Language</div> <FiChevronDown size={14} className="ml-2" />
            </p>
            {dropDownToShow === "language" && (
              <MobileHeaderDropdown items={language_items} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const HeaderSearch = ({ search, setSearch }) => {
  const [input, setInput] = useState({
    search: '',
  })
  const [showSearchBtn, setShowSearchBtn] = useState(false);



  useEffect(() => {
    input.search !== '' && setShowSearchBtn(true)
    input.search === '' && setShowSearchBtn(false)
  }, [input.search]);

  const handleChange = (e) => {
    setInput({ ...input, search: e.target.value })
  }

  return (
    <div>
      <div>
        {search && (
          <div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              // height: "fit-content",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white px-10 pt-9 shadow overflow-y-auto min-h-[95vh] w-screen flex flex-col"
          >
            <div className="flex items-center space-x-3">
              <div className="relative w-full">
                <input type="text" value={input.search} onChange={(e) => handleChange(e)} className="block py-3 pl-10 text-sm w-full text-gray-500 border border-gray-300 rounded-lg  focus:outline-none" placeholder='Search "react”' />
                {showSearchBtn && <div className={`absolute inset-y-0 right-0 flex items-center pointer-events-none focus:pointer-events-auto p-3 bg-[${colors.dark}] rounded-lg m-1 justify-center`}>
                  <FiSearch
                    color={colors.white}
                    // onClick={() => setExpanded(true)}
                    className="lg:hidden"
                  /> </div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState(false);

  const checkPosition = () => {
    if (window && window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window && window.addEventListener("load", checkPosition);
    window && window.addEventListener("scroll", checkPosition);
    return () => {
      window && window.removeEventListener("load", checkPosition);
      window && window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return (
    <>
      <DesktopHeaderStyle
        bg={colors.white}
        isScrolled={isScrolled}
      >
        <div className="p-3 md:p-6 flex justify-between items-center z-30 ">
          <div className="-ml-1 md:-ml-3">
            <Link href="/" passHref={true}>
              <div className="lg:hidden cursor-pointer flex items-center space-x-3">
                <FiMenu
                  color={colors.dark}
                  onClick={() => setExpanded(true)}
                  className="lg:hidden"
                />
                <img
                  src={logo}
                  alt="Platform logo"
                  style={{
                    width: "98.5px",
                    height: "24px",
                  }}
                />
              </div>
            </Link>
          </div>

          {expanded || search ? (
            <FiX
              color={colors.dark}
              onClick={() => { setExpanded(false); setSearch(false) }}
              className="lg:hidden"
            />
          ) : (
            <FiSearch
              color={colors.dark}
              onClick={() => setSearch(true)}
              className="lg:hidden"
            />
          )}
        </div>
        <div className="relative -mx-6 -top-1">
          <HeaderDropDown expanded={expanded} setExpanded={setExpanded} />
        </div>
        <div className="relative -mx-6 -top-1">
          <HeaderSearch search={search} setSearch={setSearch} />
        </div>
      </DesktopHeaderStyle>
      {expanded && (
        <div
          style={{ background: "transparent" }}
          onAnimationStart={{ background: "#000000" }}
          className="h-screen w-screen fixed inset-0 opacity-40 -z-50"
        />
      )}
      {search && (
        <div
          style={{ background: "transparent" }}
          onAnimationStart={{ background: "#000000" }}
          className="h-screen w-screen fixed inset-0 opacity-40 -z-50"
        />
      )
      }
    </>
  );
};

export default MobileNavbar;
