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

const NewPassword = () => {
  const [password, setPassword] = useState('')

  return (
    <Container>
      <div className="flex flex-col items-center justify-center md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto
        h-full
      ">
        <div className="border border-[#E8E8E8] p-8 rounded-xl shadow bg-white w-full">
          <h1 className="text-center mb-6">New password</h1>
          <p>Enter a new password for your account</p>
          <div className="mb-8">
          <InputBox 
              title="Password" 
              placeholder="********" 
              name="password" 
              variant="auto"
              value={password}
              onChange={e => setPassword(e.target.value)} 
              required 
              type="password"
            />
            <div>
              <Button size>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NewPassword