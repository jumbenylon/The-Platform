import React from 'react'
import { BaseLayout, PlatformMarketplace, YourPlatform } from '../../components'
import { FAQ, Features, HowItWorksHeader } from '../../components/how-it-works'
import { freelancersHIWEarningsCard, freelancersHIWGigCard, freelancersHIWHeaderBg, freelancersHIWTermsCard } from '../../images'

const FaqList = [
    {
        id: 1,
        question: "How can I pay a freelancer?",
        answer: "With your card"
    },
    {
        id: 1,
        question: "How can I pay a freelancer?",
        answer: "With your card"
    },
    {
        id: 1,
        question: "How can I pay a freelancer?",
        answer: "With your card"
    },
    {
        id: 1,
        question: "How can I pay a freelancer?",
        answer: "With your card"
    },
    {
        id: 1,
        question: "How can I pay a freelancer?",
        answer: "With your card"
    },
]

const Freelancers = () => {
    return (
        <BaseLayout>
            <HowItWorksHeader image={freelancersHIWHeaderBg} text1={"Platform for freelancers"} heading={"Take control of the way you work and earn while you do"} subheading={"Find Jobs and work by your own terms on platform"} />
            <PlatformMarketplace title='Find jobs  on platform marketplace' />
            <Features image={freelancersHIWGigCard} heading={"Find freelance gigs"} buttonText={"Find jobs"} text1={"Meet clients you’re excited to work with and take your career or business to new heights."} text2={"Search on Talent Marketplace for work that you love. Submit a bid, set your rate, and work by your terms"} />
            <Features reverse image={freelancersHIWTermsCard} heading={"Control your terms"} buttonText={"Create Profile"} text1={"Bid for projects with your terms, and control when, where, and how you work."} text2={"Invoice clients and track your earnings on Upwork for a simple and streamlined process."} />
            <Features image={freelancersHIWEarningsCard} heading={"Guaranteed Payments"} buttonText={"Learn More"} text1={"Get paid promptyly upon job completion with our automated escrow system."} text2={"Invoice clients and track your earnings on Upwork for a simple and streamlined process."} />
            <FAQ faqs={FaqList} />
            <YourPlatform />
        </BaseLayout>
    )
}

export default Freelancers