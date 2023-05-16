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

const VerifyEmail = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center 
        h-full
      ">
        <div className="border border-[#E8E8E8] p-8 rounded-xl shadow bg-white">
          <h1 className="mb-6">Verify Email</h1>
          <p>Enter the six digit verification code sent to your email address</p>
          <div className="mb-8">
          <InputBox 
              title="Verification code" 
              placeholder="909877" 
              name="verificationCode" 
              variant="auto"
              // value={_education?.school || ''}
              // onChange={handleOnchange} 
              required 
            />
            <div>
              <Button size>Submit</Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center border border-transparent border-t-gray-100 pt-8">
            <p>Code not sent? </p>
            <Button variant="transparent">Contact help</Button>
            <Button variant="transparent" outline="grey">Resend code</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default VerifyEmail