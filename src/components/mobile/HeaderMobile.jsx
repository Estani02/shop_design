import Image from 'next/image'
import React from 'react'

const HeaderMobile = ({items}) => {
  return (
    <header className='bg-[#252F3D] py-[10px] px-[20px] flex items-center justify-center w-full xl:hidden'>
      <ul className='flex w-full justify-center font-medium text-white text-xs'>
            <li className='flex items-center justify-between w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.75 4.50781L12.9414 3.75L6.25 10L12.9414 16.25L13.75 15.4961L7.87109 10L13.75 4.50781Z" fill="white"/>
              </svg>
              <div className='flex gap-2 items-center'>
                <Image width={22} height={22} src={items[0].svg} alt={items[0].title} />
                <p>{items[0].title}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.25 4.50781L7.05859 3.75L13.75 10L7.05859 16.25L6.25 15.4961L12.1289 10L6.25 4.50781Z" fill="white"/>
              </svg>
            </li>
      </ul>
    </header>
  )
}

export default HeaderMobile