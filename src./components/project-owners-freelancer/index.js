import styled from 'styled-components'
import { checkIcon } from '../../images'

const Wrapper = styled.div`
  background: #F2F2F2;
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

const ProjectOwners = () => {
  return (
    <Wrapper>
      <div className='bg-[#333333] py-20 pl-8 sm:pl-12 text-white flex-1 mx-auto'>
        <h4 className=''>Clients</h4>
        <h2 className='text-4xl font-bold my-8 w-[70%]'>Project execution at your comfort</h2>
        <ListContainer>
          <li>
            <div className='flex items-center'>
              <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Broadcast your Project</h4>
              </div>
              <p className='pr-2'>Our system is built to ensure you only pay for work delivered </p>
          </li>
          <li>
            <div className='flex items-center'>
              <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Hire Pros</h4>
              </div>
              <p className='pr-2'>Our system is built to ensure you only pay for work delivered </p>
          </li>
          <li>
            <div className='flex items-center'>
              <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Execute your projects</h4>
              </div>
              <p className='pr-2'>Our system is built to ensure you only pay for work delivered </p>
          </li>
        </ListContainer>
        <div className='mt-5'>
          <button className='bg-[#fff] hover:bg-[#EBEBEB] text-black py-3 px-8 text-xs rounded-md'>
            I am hiring
          </button>
        </div>
      </div>
      <div className='bg-[#F2F2F2] py-20 pl-10 flex-1 mx-auto'>
        <h4 className='text-[#0C1218]'>Freelancers</h4>
        <h2 className='text-4xl font-bold w-[70%] my-8'>Find your next freelance gig</h2>
        <ListContainer>
          <li>
            <div className='flex items-center'>
              <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Earn at your comfort</h4>
              </div>
              <p className='pr-2'>Our system is built to ensure you only pay for work delivered </p>
          </li>
          <li>
            <div className='flex items-center'>
              <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Get your next gig</h4>
              </div>
              <p className='pr-2'>Our system is built to ensure you only pay for work delivered </p>
          </li>
          <li>
            <div className='flex items-center'>
              <div className='mr-2'><img src={checkIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Stay fulfilled</h4>
              </div>
              <p className='pr-2'>Our system is built to ensure you only pay for work delivered </p>
          </li>
        </ListContainer>
        <div className='mt-5'>
          <button className='bg-[#333333] hover:bg-[#757575] py-3 px-8 text-xs text-white rounded-md'>Get Started</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProjectOwners;