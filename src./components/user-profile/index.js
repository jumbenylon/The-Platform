import React from 'react'
import { avatarBen } from '../../images'
import PrimaryButton from '../button/button.primary'

const UserProfile = () => {
  return (
    <div className='bg-white rounded-xl shadow flex flex-col justify-center my-4 w-full'>
      <div className='flex justify-between'>
        <h1 className='p-3 platform-dark'>My Profile</h1>
        <div className='flex space-x-3'>
          <PrimaryButton>Hide</PrimaryButton>
          <PrimaryButton>
            Edit
          </PrimaryButton>
        </div>
      </div>
      <div className='bg-platform-light-gray text-[#1283DA]'>
        <h4 className='text-center p-3'>Profile is currently under review</h4>
      </div>
      <div className='p-4 flex flex-col justify-center items-center space-y-6'>
        <img src={avatarBen} alt='Avatar' className='w-[64px] h-[64px] ' />
        <div className='flex flex-col'>
          <h2>Charvis Ben <span className='text-[#999CA0]'>,he/him</span></h2>
          <span className='text-[#999CA0]'>Cagliari, Italy</span>
        </div>
        <h3 className='text-center'>Visual Designer with experience in branding and web design</h3>

      </div>

    </div>
  )
}

export default UserProfile