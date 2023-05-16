import styled from 'styled-components'
import { freelanceMarketImg, protectIcon, timeIcon, circlesSevenIcom } from '../../images'
import VideoPlayer from '../video'

const Wrapper = styled.div`
  background: #E8E8E8;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justfify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  // @media (max-width: 768px) {
  //   height: 80vh;
  // }
`

const ListContainer = styled.ul`
 margin-top: 20px;
 padding-right: 20px;

 h4, p {
  color: #333333;
 }

 h4 {
  font-size: 16px;
 }

 p {
  font-size: 14px;
  line-height: 1.5rem
 }

 li {
  margin-top: 20px;
 }
`

const FreelanceMarketPlace = () => {
  return (
    <Wrapper>
      <Container>
        <div className='mb-5 pr-5'>
          <h1 className='text-4xl sm:text-5xl font-bold'>
            One-stop <br /> destination for your freelancing needs
          </h1>

          <ListContainer>
            <li>
              <div className='flex items-center'>
                <div className='mr-1'><img src={protectIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Fraud proof</h4>
              </div>
              
              <p>Our system is built to ensure you only pay for work delivered successfully, ensuring you get value for every dollar spent</p>
            </li>
            <li>
              <div className='flex items-center'>
                <div className='mr-1'><img src={timeIcon} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>24/7 support</h4>
              </div>
              <p>Do you have any questions? Our round-the-clock support team is available to help at anytime.</p>
            </li>
            <li>
              <div className='flex items-center'>
                <div className='mr-1'><img src={circlesSevenIcom} width='18px' alt='protect icon' /></div> 
                <h4 className='font-bold'>Built for eveyone</h4>
              </div>
              <p>With today's borderless technology. We provide equal opportunities for everyone regardless gender and location.</p>
            </li>
          </ListContainer>
        </div>
        <div className='w-full'>
          {/* <img src={freelanceMarketImg} alt='freelance market' /> */}
          <VideoPlayer />
        </div>
      </Container>
    </Wrapper>
  )
}

export default FreelanceMarketPlace