import Navbar from "../../navbar"
import Footer from "../../footer"
import CopyRight from "../../copyright"
import styled from "styled-components"

const Container = styled.div`
  min-height: calc(100vh - 460px);
  ${'' /* padding-top: 70px; */}
  position: relative;

  @media (min-width: 1024px) {
    padding-top: 70px;
  }
`

const BaseLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
      <CopyRight />
    </>
  )
}

export default BaseLayout