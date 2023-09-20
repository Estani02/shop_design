import Image from 'next/image'
import React from 'react'

const SubHeader = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex w-full justify-between p-5 xl:w-3/4 xl:py-[30px]'>
        <div>
          <Image width={192} height={36} className='w-[107px] h-[20px] xl:w-[192px] xl:h-[36px]' src='https://e-jam.vercel.app/600a41c73b670a97ae1d4f47-clarifion-logo-1@2x.png' alt='clarifion' />
        </div>
        <div className='flex gap-4 items-center md:gap-8'>
          <Image width={88} height={32} className='w-[44px] h-4 md:w-[88px] md:h-[32px]' src='https://e-jam.vercel.app/frame-1484578055.svg' alt='McAfee' />
          <Image width={82} height={32} className='w-[41px] h-4 md:w-[88px] md:h-[32px]' src='https://e-jam.vercel.app/nortonantiviruslogo-1.svg' alt='Norton' />
        </div>
      </div>
    </div>
  )
}

export default SubHeader