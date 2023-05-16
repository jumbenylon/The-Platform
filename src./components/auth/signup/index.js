import styled from "styled-components"
import { freelanceUserIcon, clientIcon, enterpriseIcon } from "../../../images"

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 50px 20px;

  h1, h4 {
    color: #333333;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 500;
    font-family: 'DM Sans';
    line-height: 2rem;
  }

  p {
    font-family: 'DM Sans';
    font-weight: 400;
    line-height: 26px;
    font-size: 18px;
    color: #757575;
  }
`

const Card = ({title, subtitle, icon, onClick}) => (
  <div
    onClick={onClick}
    className="flex items-center md:text-center border 
  border-[#E8E8E8] p-4 rounded-lg hover:bg-[#f2f2f2] cursor-pointer transition-all delay-150 md:flex-col justify-start w-full my-4 md:my-8 space-x-4 md:space-x-0
 ">
   <img src={icon} width='45px' alt={title} />
   <div>
     <h4>{title}</h4>
     <p>{subtitle}</p>
   </div>
  </div>
)

const SignUpLanding = ({setStep, formData, setFormData}) => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center 
        h-full
      ">
        <div className="border border-[#E8E8E8] p-8 rounded-lg bg-white shadow">
          <h1 className="text-center mb-6 md:mb-3">How would you like to use The Platform?</h1>
          <div className="flex flex-col md:flex-row md:items-stretch justify-center md:space-x-4 
          ">
            <Card onClick={() => {
              setFormData({...formData, platform: 'Freelancer'})
              setStep(2)
            }} title='Freelancer' subtitle='Find contract gigs' icon={freelanceUserIcon} />
            <Card onClick={() => {
              setFormData({...formData, platform: 'Client'})
              setStep(2)
            }} title='Client' subtitle='Search for freelancers' icon={clientIcon} />
            <Card onClick={() => {
              setFormData({...formData, platform: 'Enterprise'})
              setStep(2)
            }} title='Enterprise' subtitle='Execute projects at scale' icon={enterpriseIcon} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignUpLanding