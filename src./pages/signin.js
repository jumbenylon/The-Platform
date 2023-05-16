import { useState } from "react";
import { AuthLayout, TwoFactor } from "../components";
import {SignIn, ResetPassword, NewPassword} from "../components";


const SignInPage = () => {
  // We will move this to redux
  const [step, setStep] = useState('landing')
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   platform: '',
  //   password: ''
  // })

  const SignInStep = ({stepNum=step}) => {
    return (
      {
        landing: <SignIn setStep={setStep} />,
        reset: <ResetPassword setStep={setStep} />,
        new: <NewPassword setStep={setStep} />,
        twofa: <TwoFactor setStep={setStep} />,
      }[stepNum]
    )
  }

  return (
    <AuthLayout>
      <SignInStep step={step} />
    </AuthLayout>
  )
}

export default SignInPage;