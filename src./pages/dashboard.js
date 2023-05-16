import { useState } from "react";
import { DashboardLayout } from "../components";
import FreelancerDashboard from "../components/dashboard/freelancerdashboard";


const DashboardPage = () => {
  const [step, setStep] = useState('freelancer')

  const DashboardStep = ({stepNum=step}) => {
    return (
      {
        freelancer: <FreelancerDashboard setStep={setStep} />,
      }[stepNum]
    )
  }

  return (
    <DashboardLayout>
      <DashboardStep step={step} />
    </DashboardLayout>
  )
}

export default DashboardPage;