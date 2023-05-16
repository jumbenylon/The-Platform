
import styled from 'styled-components'
import { checkIcon, clientImg } from '../../images'

const Wrapper = styled.div`
  ${'' /* background: #000000; */}
  overflow: hidden;
  display: flex;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ListContainer = styled.ul`
 margin-top: 20px;
 padding-right: 20px;
 width: 80%;

//  h4, p {
//   color: #333333;
//  }

 h4 {
  font-size: 14px;
 }

 p {
  font-size: 14px;
  line-height: 1.5rem
 }

 li {
  margin-top: 20px;
 }
`

const ImageContainer = styled.div`
  width: 100%;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: auto;


  // @media (max-width: 992px) {
  //   background-position: 50% 20%;
  //   background-size: 100%;
  //   flex: 100%;
  // }

  // @media (max-width: 768px) {
  //   background-position: 100% 100%;
  //   background-size: 110%;
  //   flex: 100%;
  // }
`

const ClientFreelance = () => {
  return (
    <Wrapper>
      <div className='bg-[#ffffff]  text-white flex-1 lg:w-[50%]'>
        <div className='bg-black py-20 pl-8 sm:pl-12 my-8 ml-6 space-y-8'>
          <h4 className=''>Clients</h4>
          <h2 className='text-4xl font-bold my-8 w-[70%]'>Project execution at your comfort</h2>
          <ListContainer className='space-y-16'>
            <li>
              <div className='flex items-center'>
                <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div>
                <h4 className='font-bold'>List your Project</h4>
              </div>
              <p className='pr-2'>List projects and accept bids from our diverse rich pool of talents. </p>
            </li>
            <li>
              <div className='flex items-center'>
                <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div>
                <h4 className='font-bold'>Hire Pros</h4>
              </div>
              <p className='pr-2'>With our platform Identity verification, past projects showcase and reviews, you can be sure to find the best.</p>
            </li>
            <li>
              <div className='flex items-center'>
                <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div>
                <h4 className='font-bold'>Execute your projects, securely</h4>
              </div>
              <p className='pr-2'>Collaborate and manage your hires worry-free with our talent conflict management system. Learn more. </p>
            </li>
          </ListContainer>
          <div className='mt-5'>
            <button className='bg-[#fff] hover:bg-[#EBEBEB] text-black py-3 px-8 text-xs rounded-md'>
              I am hiring
            </button>
          </div>
        </div>
      </div>
      <img src={clientImg} alt='Client' className='lg:w-[50%] ' />
      {/* <ImageContainer imageUrl={clientImg} className='bg-[#F2F2F2] flex-1' /> */}
    </Wrapper>
  )
}

export default ClientFreelance;