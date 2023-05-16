import React from 'react'
import UserProfile from '../user-profile'

const FreelancerDashboard = () => {
  return (
    <div className='flex space-x-6 w-full '>
      <div className='lg:w-[18%] mx-auto'>
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
      <div className='lg:w-[57%]'>

      </div>
      <div className='lg:w-[18%]'>
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>

    </div>
  )
}

export default FreelancerDashboard