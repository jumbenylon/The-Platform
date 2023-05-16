import { useState } from "react";
import { AuthLayout } from "../components";
import {SignUp, SignUpLanding, VerifyEmail} from "../components";


const SignUpPage = () => {
  // We will move this to redux
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    password: ''
  })

  const SignupStep = ({stepNum=step}) => {
    return (
      {
        1: <SignUpLanding setStep={setStep} formData={formData} setFormData={setFormData} />,
        2: <SignUp setStep={setStep} formData={formData} setFormData={setFormData} />,
        3: <VerifyEmail />
      }[stepNum]
    )
  }

  return (
    <AuthLayout>
      <SignupStep step={step} />
    </AuthLayout>
  )
}

export default SignUpPage;