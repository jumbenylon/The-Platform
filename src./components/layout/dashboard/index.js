import styled from "styled-components"
import { Link } from 'react-router-dom';
import { avatarBen, logo, platformIcon } from "../../../images";
import { colors } from "../../../styles/theme";
import Footer from "../../footer";
import CopyRight from "../../copyright";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 65px);
  background: ${colors.tiltWhite};
  overflow: hidden;
  margin-top: 75px;
`

const DashboardLayout = ({ children }) => { // colors.tiltWhite for #F5F5F5
  return (
    <div className={`bg-[#F5F5F5]`}>
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
              <Link to="/" passHref={true}>
                <a className="flex items-center">
                  <p
                    className="flex items-center cursor-pointer font-bold"
                  >
                    Explore
                  </p>
                </a>
              </Link>
              <Link to="/" passHref={true}>
                <a className="flex items-center">
                  <p
                    className="flex items-center cursor-pointer font-bold"
                  >
                    Contracts
                  </p>
                </a>
              </Link>
              <Link to="/" passHref={true}>
                <a className="flex items-center">
                  <p
                    className="flex items-center cursor-pointer font-bold"
                  >
                    Community
                  </p>
                </a>
              </Link>
            </div>
          </div>

          <div className="flex justify-end items-center basis-1/2 space-x-7">
            <Link to="/" passHref={true}>
              <div className="flex items-center space-x-1">
                <img
                  className="flex items-center cursor-pointer font-bold"
                  src={platformIcon}
                  width='33.33px'
                  alt="platform"
                />
                <span className="font-bold">20</span>
              </div>
            </Link>
            <Link to="/" passHref={true}>
              <div className="relative inline-flex w-fit mt-1">
                <div
                  className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-[#F7653B] p-2.5 text-xs"></div>
                <div
                  className="flex items-center justify-center rounded-lg bg-primary-500 text-center text-white dark:text-gray-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1645_37113)">
                      <path d="M2 3H22V18H14.5L12 20.5L9.5 18H2V3Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11.5 10.5H12.5013" stroke="#333333" stroke-width="2" stroke-linecap="round" />
                      <path d="M16.5 10.5H17.4995" stroke="#333333" stroke-width="2" stroke-linecap="round" />
                      <path d="M6.5 10.5H7.49945" stroke="#333333" stroke-width="2" stroke-linecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1645_37113">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </Link>
            <Link to="/" passHref={true}>
              <div className="relative  inline-flex w-fit mt-1">
                <div
                  className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-[#F7653B] p-2.5 text-xs"></div>
                <div
                  className="flex items-center justify-center rounded-lg bg-primary-500 text-center text-white dark:text-gray-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1645_37115)">
                      <path d="M2 19H22M5 19V9C5 5.134 8.134 2 12 2C15.866 2 19 5.134 19 9V19H5Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 22C13.3807 22 14.5 20.8807 14.5 19.5V19H9.5V19.5C9.5 20.8807 10.6193 22 12 22Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1645_37115">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </Link>
            <Link to="/" passHref={true}>
              <img
                className="flex items-center cursor-pointer font-bold"
                src={avatarBen}
                // width='33.33px'
                alt="platform"
              />
            </Link>
          </div>
        </div>

        {/* <div className='max-w-[95vw] xl:max-w-[90vw] flex flex-wrap items-center space-x-6 mx-auto pt-3 pb-4 xl:pl-6'>
          {HeaderFeatures?.map((feature, i) => (
            <p key={i} className={`cursor-pointer hover:bg-[${colors.dark}]`}>{feature?.name}</p>
          ))}
        </div> */}
      </nav>
      <Container className="mx-6">
        {children}
      </Container>
      <Footer />
      <CopyRight />
    </div>
  )
}

export default DashboardLayout