import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { googleIcon, facebookOutlineIcon } from "../../../images"
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

const SignIn = ({setStep}) => {
  const [data, setData] = useState({}) 

  return (
    <Container>
      <div className="flex flex-col items-center justify-center 
        h-full w-full
      ">
        <div className="border border-[#E8E8E8] rounded-xl shadow bg-white overflow-hidden md:w-[80%] lg:w-[60%]">
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="p-8 md:basis-2/3">
              <h1 className="text-center mb-6">Sign in to your Platform account</h1> 
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
              <div className="flex flex-col md:flex-row items-start md:items-center
                space-y-4 md:space-y-0
                space-x-0 md:space-x-4
              ">
                <div className="w-full">
                  <InputBox 
                    title="Email" 
                    placeholder="Jade@gmail.com" 
                    name="email" 
                    variant="auto"
                    value={data.email || ''}
                    onChange={(e) => {
                      setData({
                        ...data,
                        email: e.target.value
                      })
                    }}  
                    required 
                  />

                  <InputBox 
                    title="Password" 
                    placeholder="••••••••••" 
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

                  <p onClick={() => setStep('reset')}
                    className="text-right py-2 cursor-pointer">Forgot password?</p>

                  <Button onClick={() => {}} variant="secondary" size>
                    Sign in
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full md:basis-1/3 p-8 border border-r-transparent border-b-transparent sm:border-t-transparent border-t-[#E8E8E8] border-l-transparent sm:border-l-[#E8E8E8]">
              <p className="!text-[16px] !leading-6 text-center">Don't have a platform account?</p>
              <div className="mt-4">
                <Link to='/signup'>
                  <Button size>Create account</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignIn