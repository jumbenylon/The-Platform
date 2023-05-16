import { useState } from "react";
import { BioScreen, ExpertiseScreen, GetStartedScreen, Project1Screen, Project2Screen, VerifiedScreen, VerifyScreen } from "../components/onboarding";
import {OnboardingLayout } from "../components/layout";


const OnboardingPage = () => {
  // We will move this to redux
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    password: ''
  })

  const OnboardingStep = ({stepNum=step}) => {
    return (
      {
        1: <GetStartedScreen setStep={setStep} formData={formData} setFormData={setFormData} />,
        2: <BioScreen setStep={setStep} formData={formData} setFormData={setFormData} />,
        3: <ExpertiseScreen setStep={setStep} formData={formData} setFormData={setFormData} />,
        4: <Project1Screen setStep={setStep} formData={formData} setFormData={setFormData} />,
        5: <Project2Screen setStep={setStep} formData={formData} setFormData={setFormData} />,
        6: <VerifiedScreen setStep={setStep} formData={formData} setFormData={setFormData} />,
        7: <VerifyScreen setStep={setStep} formData={formData} setFormData={setFormData} />,
      }[stepNum]
    )
  }

  return (
    <OnboardingLayout>
      <OnboardingStep step={step} />
    </OnboardingLayout>
  )
}

export default OnboardingPage;