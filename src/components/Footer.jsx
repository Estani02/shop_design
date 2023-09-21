import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-white flex lg:flex-row flex-col bg-[#252F3D] justify-between p-5 gap-4 lg:gap-0 lg:px-[119px] lg:py-[24px] items-center text-[12px] lg:text-[16px]'>
      <div className='flex items-center justify-between gap-4'>
        <p>Copyright (c) 2023</p>
        <div className='w-[1px] h-[14px] xl:h-[24px] bg-white' />
        <p className='lowercase'>Clarifionsupport@clarifion.com</p>
      </div>
      <div className='flex gap-4 items-center'>
        <div className='hidden lg:block'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className='block lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
          <path d="M10.3854 5.95728H2.80208C2.20377 5.95728 1.71875 6.4423 1.71875 7.04061V10.8323C1.71875 11.4306 2.20377 11.9156 2.80208 11.9156H10.3854C10.9837 11.9156 11.4688 11.4306 11.4688 10.8323V7.04061C11.4688 6.4423 10.9837 5.95728 10.3854 5.95728Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.88672 5.95728V3.79061C3.88672 3.07231 4.17206 2.38344 4.67997 1.87553C5.18788 1.36762 5.87676 1.08228 6.59505 1.08228C7.31335 1.08228 8.00222 1.36762 8.51013 1.87553C9.01804 2.38344 9.30339 3.07231 9.30339 3.79061V5.95728" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  )
}
