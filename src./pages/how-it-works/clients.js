import React from 'react'
import { BaseLayout, PlatformMarketplace, YourPlatform } from '../../components'
import { FAQ, Features, HowItWorksHeader } from '../../components/how-it-works'
import { clientHeaderBg, clientHIWChatCard, clientHIWprojectCard, clientHIWTalentCard } from '../../images'

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

const Clients = () => {
    return (
        <BaseLayout>
            <HowItWorksHeader image={clientHeaderBg} text1={"Platform for hiring"} heading={"We connect the dots between Projects-owners & Freelancers"} subheading={"Find freelancers and projects on platform"} />
            <PlatformMarketplace title='Find Talents on platform marketplace' />
            <Features image={clientHIWprojectCard} heading={"List your Projects"} buttonText={"Post Project"} text1={"List projects and accept bids from our diverse rich pool of talents."} text2={"Our advanced algorithms help you shortlist candidates who are the best fit. And you can check profiles, portfolios, and reviews before you spend a single dime."} />
            <Features image={clientHIWTalentCard} reverse heading={"Hire Pros"} buttonText={"Explore Platform talent"} text1={"With our platform Identity verification, past projects showcase and reviews, you can be sure to find the best."} text2={"Accept the best bid and milestones and only pay up when those milestones are hit."} />
            <Features image={clientHIWChatCard} heading={"Execute your projects securely"} buttonText={"Learn More"} text1={"Collaborate and manage your hires worry-free with our talent conflict management system."} text2={"Use it to securely send and receive files, give real-time feedback and make payments."} />
            <FAQ faqs={FaqList} />
            <YourPlatform />
        </BaseLayout>
    )
}

export default Clients