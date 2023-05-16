import { useState } from "react"
import styled from "styled-components"
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
    font-size: 18px;
    color: #757575;
  }
`

const ResetPassword = ({setStep}) => {
  const [email, setEmail] = useState('')

  return (
    <Container>
      <div className="flex flex-col items-center justify-center md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto
        h-full
      ">
        <div className="border border-[#E8E8E8] p-8 rounded-xl shadow bg-white">
          <h1 className="text-center mb-6">Reset account password</h1>
          <p>Enter the email associated with your account to receive your password reset link</p>
          <div className="mb-8">
          <InputBox 
              title="Email" 
              placeholder="Jade@gmail.com" 
              name="email" 
              variant="auto"
              value={email}
              onChange={e => setEmail(e.target.value)} 
              required 
            />
            <div>
              <Button onClick={() => setStep('new')} size>Reset password</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ResetPassword