import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { googleIcon, facebookOutlineIcon, successCheck } from "../../../images"
import Button from "../../button"
import InputBox from "../../input-box"

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
    line-height: 1rem;
    font-size: 14px;
    color: #757575;
  }
`

const SignUp = ({formData, setFormData, setStep}) => {
  const [data, setData] = useState({}) 
  const [successful, setSuccessful] = useState(false)
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value.trim()
  //   })
  // }

  return (
    <Container>
      <div className="flex flex-col items-center justify-center 
        h-full w-full
      ">
        <div className="border border-[#E8E8E8]  rounded-xl shadow bg-white overflow-hidden md:w-[80%] lg:w-[60%]">
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="p-8 md:basis-2/3">
              { formData.platform === 'Enterprise' && <h1 className="text-center mb-6">Enquire about The Platform enterprise</h1> }
              { formData.platform === 'Freelancer' && <h1 className="text-center mb-6">Sign up to find your next Gig</h1> }
              { formData.platform === 'Client' && <h1 className="text-center mb-6">Sign up to hire pros</h1> }
              { formData.platform !== 'Enterprise' &&
                <div className="flex justify-between w-full mb-4">
                  <Button outline="grey" variant="white" className="w-[47%]">
                    <img src={googleIcon} alt='google icon' />
                    Google
                  </Button>
                  <Button outline="grey" variant="white" className="w-[47%]">
                    <img src={facebookOutlineIcon} alt='facebook icon' />
                    Facebook
                  </Button>
                </div>
              }
              <div className="flex flex-col sm:flex-row items-start sm:items-center
                space-y-4 sm:space-y-0
                space-x-0 sm:space-x-4
              ">
                <div className="w-full">
                  <InputBox 
                    title="Name" 
                    placeholder="John Doe" 
                    name="name" 
                    variant="auto"
                    value={data.name || ''}
                    onChange={(e) => {
                      setData({
                        ...formData,
                        name: e.target.value
                      })
                    }} 
                    required 
                  />
                  { formData.platform === 'Enterprise' ?
                    <>
                      <InputBox 
                        title="Company name" 
                        placeholder="The Platform enterprise" 
                        name="companyName" 
                        variant="auto"
                        value={data.companyName || ''}
                        onChange={(e) => {
                          setData({
                            ...data,
                            companyName: e.target.value
                          })
                        }}  
                        required 
                      />
                      <InputBox 
                        title="Business Email" 
                        placeholder="jade@platform.com" 
                        name="businessEmail" 
                        variant="auto"
                        value={data.businessEmail || ''}
                        onChange={(e) => {
                          setData({
                            ...data,
                            businessEmail: e.target.value
                          })
                        }}  
                        required 
                      />
                      <InputBox 
                        title="Contact phone" 
                        placeholder="000" 
                        name="contactPhone" 
                        variant="auto"
                        value={data.contactPhone || ''}
                        onChange={(e) => {
                          setData({
                            ...data,
                            contactPhone: e.target.value
                          })
                        }}  
                        contact={true}
                        required 
                      />
                    </> :
                    <>
                      <InputBox 
                        title="Email" 
                        placeholder="email@domain.com" 
                        name="email" 
                        variant="auto"
                        value={data.email || ''}
                        onChange={(e) => {
                          setData({
                            ...formData,
                            email: e.target.value
                          })
                        }}  
                        required 
                      />

                      <InputBox 
                        title="Password" 
                        placeholder="********" 
                        name="password" 
                        variant="auto"
                        type="password"
                        value={data.password || ''}
                        onChange={(e) => {
                          setData({
                            ...data,
                            password: e.target.value
                          })
                        }}  
                        required 
                      />
                    </>
                  }

                  <Button onClick={formData.platform === 'Enterprise' ? () => setSuccessful(true) : () => setStep(3)} variant="secondary" size>
                    {formData.platform === 'Enterprise' ? 'Submit' : 'Sign up'}
                  </Button>
                </div>
              </div>
              <div className="mt-5">
              <small className="font-extralight font-[#757575]">
                {formData.platform === 'Enterprise' ?
                  'By Submitting you agree to share your contact details with our sales representative for further enquiry' :
                  'By signing up you agree to - Privacy policy • Terms and condition • Code of conduct'
                }
              </small>
              </div>
            </div>

            <div className="w-full md:basis-1/3 p-8 border border-r-transparent border-b-transparent  sm:border-t-transparent border-t-[#E8E8E8] border-l-transparent sm:border-l-[#E8E8E8]">
              <p className="!text-[16px] !leading-6 text-center">Have {formData.platform.toLowerCase()} account already?</p>
              <div className="mt-4">
                <Link to={"/signin"}>
                  <Button size>Login</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {successful && (
        <div className="h-full bg-overlay fixed top-0 w-full left-0 z-50 px-5 md:px-32 py-32 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <div className="text-center bg-white rounded md:w-[388px] p-5 h-full flex flex-col items-center">
              <img src={successCheck} alt="success-check" className="w-[76.08px]" />
              <h4 className="mt-4">Success! Our experts will reach out to you within the next 48 hours</h4>
              <p className="mt-4 platform-gray">By Submitting you agree to share your contact details with our team for further enquiry</p>
              <div className="mt-8 flex items-center w-full">
                  <Button variant="secondary" size className="px-2 text-sm" onClick={() => setSuccessful(false)}>Done</Button>
                </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default SignUp