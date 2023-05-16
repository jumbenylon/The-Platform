import styled from "styled-components"
import { Link } from 'react-router-dom';
import { logo } from "../../../images";
import { colors } from "../../../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 65px);
  background: ${colors.tiltWhite};
  overflow: hidden;
`

const OnboardingLayout = ({ children }) => { // colors.tiltWhite for #F5F5F5
  return (
    <div className={`bg-[#F5F5F5]`}>
      <div className={`max-w-[95vw] xl:max-w-[90vw] p-4 mx-auto `}>
        <Link to="/">
          <img src={logo} alt="platform-logo" className='h-8 mr-3' />
        </Link>
      </div>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default OnboardingLayout