import Image from 'next/image'
import React from 'react'
//https://e-jam.vercel.app/group-1484578147.svg

const Steps = () => {
  return (
    <ul className='flex justify-between xl:text-xl text-xs w-full font-normal px-5 xl:px-0 my-6 xl:my-6'>
      <li className='gap-5 flex flex-col xl:flex-row items-center justify-center'>
        <Image src={'https://e-jam.vercel.app/group-1484578147.svg'} alt='check' width={40} height={40} className='h-5 w-5 xl:h-10 xl:w-10' />
        <p>
        <span className='hidden xl:block'>Step 1 : </span>
          Cart Review
        </p>
      </li>
      <li className='gap-5 flex flex-col xl:flex-row items-center justify-center'>
        <Image src={'https://e-jam.vercel.app/group-1484578147.svg'} alt='check' width={40} height={40} className='h-5 w-5 xl:h-10 xl:w-10' />
        <p>
        <span className='hidden xl:block'>Step 2 :</span> 
          Checkout
        </p>
      </li>
      <li className='gap-5 flex flex-col xl:flex-row items-center justify-center'>
        <span className='rounded-[50%] flex items-center justify-center h-5 w-5 xl:w-[40px] xl:h-[40px] bg-[#2C7EF8] text-white'>
          <p>3</p>
        </span>
        <p>
        <span className='hidden xl:block'>Step 3 :</span> 
          Special Offer
        </p>
      </li>      
      <li className='gap-5 flex flex-col xl:flex-row items-center justify-center'>
        <span className='rounded-[50%] flex items-center justify-center h-5 w-5 xl:w-[40px] xl:h-[40px] border-[#2C7EF8] border-[2px] text-[#2C7EF8]'>
          <p>4</p>
        </span>
        <p>
          <span className='hidden xl:block'>Step 4 : </span>
          Confirmation
          </p>
      </li>
    </ul>
  )
}

export default Steps