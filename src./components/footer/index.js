import styled from 'styled-components'
import { facebookIcon, logo, twitterIcon, instagramIcon } from '../../images'

const Wrapper = styled.div`
  background: #fff;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-size: 12.5px;
  line-height: 1.8rem;

  h4 {
    font-weight: bold;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className='flex w-full justify-center sm:justify-between flex-col sm:flex-row space-y-4 sm:space-y-0'>
          <div>
            <div>
              <img src={logo} width='100rem' alt='logo' />
            </div>
            <p>Connecting clients and freelancers</p>
            <ul className='flex space-x-2'>
              <li>
                <div className='border border-[#E0E0E0] rounded-md p-1 hover:bg-[#E0E0E0] cursor-pointer'>
                  <img src={facebookIcon} width='18px' alt='facebook' />
                </div>
              </li>
              <li>
                <div className='border border-[#E0E0E0] rounded-md p-1 hover:bg-[#E0E0E0] cursor-pointer'>
                  <img src={twitterIcon} width='18px' alt='facebook' />
                </div>
              </li>
              <li>
                <div className='border border-[#E0E0E0] rounded-md p-1 hover:bg-[#E0E0E0] cursor-pointer'>
                  <img src={instagramIcon} width='18px' alt='facebook' />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>All Categories</li>
              <li>Development & Tech</li>
              <li>Design and Graphics</li>
              <li>Writing & Translation</li>
              <li>Video & 3d Animation</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div>
            <h4>How it works</h4>
            <ul>
              <li>Client</li>
              <li>Freelancer</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li>Tips and guides</li>
              <li>Send feedback</li>
            </ul>
          </div>
          <div>
            <h4>ENG</h4>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Footer;