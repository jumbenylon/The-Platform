import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SearchIcon } from "../../images";
import Button from '../button';

const Wrapper = styled.div`
  background: #FCB400;
  overflow: hidden;
  margin-top: 60px;
  height: auto;
  ${'' /* background-image: url(${clientHeaderBg}); */}
  background-size: 130% 100%;
  background-repeat: no-repeat;

  @media (max-width: 992px) {
    ${'' /* background-image: url(${clientHeaderBg}); */}
    background-size: 100% 110%;
    margin-top:0;
  }  
`

const Container = styled.div`
  ${'' /* max-width: 1200px; */}
  display: flex;
  flex-direction: row;
  justfify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;


  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    ${'' /* height: 80vh; */}
  }
`

const HeaderText = styled.div`
  margin: auto;
  ${'' /* padding: 10% 20px; */}
  height: 100%;

  @media (max-width: 992px) {
    flex: 100%;
  }
`


const HowItWorksHeader = ({ text1, heading, subheading, image }) => {
    const location = useLocation()
    const route = location.pathname.split('/').splice(-1)[0]
    return (
        <Wrapper>
            <Container>
                <HeaderText className='flex-1 flex gap-4 md:gap-0 flex-col lg:flex-row item h-full w-full lg:items-center'>
                    <div className="lg:w-1/2 py-7 px-4 flex-1 md:px-16 flex flex-col gap-2 text-[#333333]">
                        <p className='text-base'>{text1}</p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 md:leading-[72px] md:pr-12">{heading}</h1>
                        <p className='mb-4 text-lg'>{subheading}</p>
                        <div className='md:pr-12 md:w-5/6'>
                            {route !== "enterprise" && <label className="relative block">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center px-4">
                                    <SearchIcon />
                                </span>
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for talent" type="text" name="search" />
                            </label>}
                        </div>
                    </div>
                    {route !== "enterprise" && <div className="lg:w-1/2 flex-1 flex">
                        <img src={image} alt='working' className='flex-1' />
                    </div>}
                    {route === "enterprise" && <div className='lg:w-1/2 flex-1 flex min-h-content'>
                        <div className='bg-white lg:min-h-content lg:max-w-[704px] lg:mx-auto mt-6 rounded-t-3xl flex flex-col p-5 gap-5'>
                            <h4 className='font-bold text-2xl lg:py-4'>Enquire about platform enterprise</h4>
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 pb-3 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Name
                                </span>
                                <input type="text" name="name" class="mt-1 px-4 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />
                            </label>
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 pb-3 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Business Email
                                </span>
                                <input type="email" name="email" class="mt-1 px-4 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                            </label>
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 pb-3 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Contact Phone
                                </span>
                                <input type="tel" name="phone" class="mt-1 px-4 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+2348012739287" />
                            </label>
                            <Button variant='secondary' className='text-base py-4 self-stretch'>Continue</Button>
                            <p className='text-sm text-[#757575] lg:pr-3'>By continuing you agree to share your contact details with our sales representative for further enquiry</p>
                        </div>
                    </div>}
                </HeaderText>
            </Container>
        </Wrapper>
    )
}

export { HowItWorksHeader };

