import styled from 'styled-components'
import { devIcon, designIcon, writingIcon, videoIcon, salesIcon } from '../../images'

const Wrapper = styled.div`
  background: #FAFAFA;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;

  h1 {
    color: #333333;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }
`

const MarketPlaceCard = ({ icon, title }) => (
  <div className='my-4 flex flex-col items-center justify-center transition-all ease-in-out delay-150 hover:bg-[#FAFAFA] bg-[#fff] p-1 sm:p-8 rounded-md cursor-pointer'>
    <div className='mb-2'><img src={icon} width="50rem" alt={title} /></div>
    <p className='text-sm text-center'>{title}</p>
  </div>
)

const PlatformMarketplace = ({ title = "Explore the platform marketplace" }) => {
  return (
    <Wrapper>
      <Container>
        <h1>{title}</h1>
        <div className='mt-4 flex flex-wrap justify-around md:justify-between'>
          <MarketPlaceCard title='Web Development & Tech' icon={devIcon} />
          <MarketPlaceCard title='Design & Graphics' icon={designIcon} />
          <MarketPlaceCard title='Writing & Translation' icon={writingIcon} />
          <MarketPlaceCard title='Video & 3d Animation' icon={videoIcon} />
          <MarketPlaceCard title='Digital Marketing' icon={salesIcon} />
        </div>
      </Container>
    </Wrapper>
  )
}

export default PlatformMarketplace;