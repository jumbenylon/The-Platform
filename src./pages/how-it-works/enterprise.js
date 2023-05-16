import React from 'react'
import { BaseLayout, YourPlatform } from '../../components'
import { HowItWorksHeader } from '../../components/how-it-works'

const Enterprise = () => {
    return (
        <BaseLayout>
            <HowItWorksHeader text1={"Platform for enterprise"} heading={"Taking project execution to the next level"} subheading={"We are currently building platform enterprise in an open free beta, feel free to join us on this journey to the future of work"}/>
            <YourPlatform />
        </BaseLayout>
    )
}

export default Enterprise