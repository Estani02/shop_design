import Image from 'next/image'
import React from 'react'
//https://e-jam.vercel.app/group-1484578147.svg

const Steps = () => {
  return (
    <ul className='flex justify-between lg:text-xl text-xs w-full font-normal px-5 lg:px-0 my-6 lg:my-6'>
      <li className='gap-2 lg:gap-5 flex flex-col lg:flex-row items-center justify-center '>
        <Image src={'https://e-jam.vercel.app/group-1484578147.svg'} alt='check' width={40} height={40} className='h-5 w-5 lg:h-10 lg:w-10' />
        <p>
        <span className='hidden lg:inline-flex'>Step 1 :&nbsp;</span>
          Cart Review
        </p>
      </li>
      <li className='gap-2 lg:gap-5 flex flex-col lg:flex-row items-center justify-center'>
        <Image src={'https://e-jam.vercel.app/group-1484578147.svg'} alt='check' width={40} height={40} className='h-5 w-5 lg:h-10 lg:w-10' />
        <p>
        <span className='hidden lg:inline-flex'>Step 2 :&nbsp;</span> 
          Checkout
        </p>
      </li>
      <li className='gap-2 lg:gap-5 flex flex-col lg:flex-row items-center justify-center'>
        <span className='rounded-[50%] flex items-center justify-center h-5 w-5 lg:w-[40px] lg:h-[40px] bg-[#2C7EF8] text-white'>
          <p>3</p>
        </span>
        <p>
        <span className='hidden lg:inline-flex'>Step 3 :&nbsp;</span> 
          Special Offer
        </p>
      </li>      
      <li className='gap-2 lg:gap-5 flex flex-col lg:flex-row items-center justify-center'>
        <span className='rounded-[50%] flex items-center justify-center h-5 w-5 lg:w-[40px] lg:h-[40px] border-[#2C7EF8] border-[2px] text-[#2C7EF8]'>
          <p>4</p>
        </span>
        <p>
          <span className='hidden lg:inline-flex'>Step 4 :&nbsp;</span>
          Confirmation
          </p>
      </li>
    </ul>
  )
}

export default Steps