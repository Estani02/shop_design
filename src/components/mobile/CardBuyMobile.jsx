import Image from 'next/image'
import React from 'react'

const CardBuyMobile = () => {
  return (
    <div className='flex flex-col h-full gap-6 lg:hidden'>
      <h2 className='self-stretch text-center text-[24px]'>
      <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='text-[#2C7EF8]'>$14 each </span>($84.00 total!)
        </h2>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4 items-center '>
          <Image src='https://e-jam.vercel.app/imageremovebgpreview-12-1@2x.png' alt='img product' height={80} width={80} className='rounded-[10px] bg-[#2C7EF8]' />
          <div className='flex flex-col gap-3 max-w-[224px] w-full'>
            <div className='flex justify-between'>
              <h3 className='text-[14px]'>Clarifion Air Ionizer</h3>
              <div className='flex gap-[8px] font-semibold'>
                <p className='text-[#969696] mt-1 text-[10px] text-center line-through'>$180</p>
                <p className='text-[#2C7EF8] text-[14px]'>$84</p>
              </div>
            </div>
            <Image src='https://e-jam.vercel.app/stars1.svg' alt='stars' height={12} width={68} />
            <span className='flex items-center gap-4'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <ellipse cx="6" cy="6" rx="6" ry="6.00003" fill="#E3EEFF"/>
                <ellipse cx="6" cy="5.99998" rx="3" ry="3.00001" fill="#2C7EF8"/>
              </svg>
              <p className='text-[12px]'>12 left in Stock</p>
            </span>
          </div>
        </div>
        <p className='text-[#4D5254] text-center text-[12px]'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
      </div>
      <ul className='flex flex-col text-[12px] gap-4 text-[#4D5254]'>
        <li className='gap-[12px] flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8L5.99529 12L14 4" stroke="#2C7EF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Negative Ion Technology may <span className='font-bold'>help with allergens</span></p>
        </li>
        <li className='gap-[12px] flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8L5.99529 12L14 4" stroke="#2C7EF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Designed for <span className='font-bold'>air rejuvenation</span></p>
        </li>
        <li className='gap-[12px] flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8L5.99529 12L14 4" stroke="#2C7EF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p><span className='font-bold'>Perfect for every room</span> in all types of places.</p>
        </li>
      </ul>
      <div className='px-4 py-3 bg-[#EDF3FD] rounded-[10px] flex gap-4 items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#2C7EF8"/>
          <mask id="mask0_1_121" maskUnits="userSpaceOnUse" x="6" y="6" width="20" height="20">
          <rect x="6.40002" y="6.40002" width="19.2" height="19.2" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_1_121)">
          <path d="M12.4001 15.2001C11.6268 15.2001 10.9668 14.9268 10.4201 14.3801C9.87343 13.8334 9.6001 13.1734 9.6001 12.4001C9.6001 11.6268 9.87343 10.9668 10.4201 10.4201C10.9668 9.87343 11.6268 9.6001 12.4001 9.6001C13.1734 9.6001 13.8334 9.87343 14.3801 10.4201C14.9268 10.9668 15.2001 11.6268 15.2001 12.4001C15.2001 13.1734 14.9268 13.8334 14.3801 14.3801C13.8334 14.9268 13.1734 15.2001 12.4001 15.2001ZM12.4001 13.6001C12.7334 13.6001 13.0168 13.4834 13.2501 13.2501C13.4834 13.0168 13.6001 12.7334 13.6001 12.4001C13.6001 12.0668 13.4834 11.7834 13.2501 11.5501C13.0168 11.3168 12.7334 11.2001 12.4001 11.2001C12.0668 11.2001 11.7834 11.3168 11.5501 11.5501C11.3168 11.7834 11.2001 12.0668 11.2001 12.4001C11.2001 12.7334 11.3168 13.0168 11.5501 13.2501C11.7834 13.4834 12.0668 13.6001 12.4001 13.6001ZM19.6001 22.4001C18.8268 22.4001 18.1668 22.1268 17.6201 21.5801C17.0734 21.0334 16.8001 20.3734 16.8001 19.6001C16.8001 18.8268 17.0734 18.1668 17.6201 17.6201C18.1668 17.0734 18.8268 16.8001 19.6001 16.8001C20.3734 16.8001 21.0334 17.0734 21.5801 17.6201C22.1268 18.1668 22.4001 18.8268 22.4001 19.6001C22.4001 20.3734 22.1268 21.0334 21.5801 21.5801C21.0334 22.1268 20.3734 22.4001 19.6001 22.4001ZM19.6001 20.8001C19.9334 20.8001 20.2168 20.6834 20.4501 20.4501C20.6834 20.2168 20.8001 19.9334 20.8001 19.6001C20.8001 19.2668 20.6834 18.9834 20.4501 18.7501C20.2168 18.5168 19.9334 18.4001 19.6001 18.4001C19.2668 18.4001 18.9834 18.5168 18.7501 18.7501C18.5168 18.9834 18.4001 19.2668 18.4001 19.6001C18.4001 19.9334 18.5168 20.2168 18.7501 20.4501C18.9834 20.6834 19.2668 20.8001 19.6001 20.8001ZM10.1601 21.8401C10.0134 21.6934 9.9401 21.5068 9.9401 21.2801C9.9401 21.0534 10.0134 20.8668 10.1601 20.7201L20.7201 10.1601C20.8668 10.0134 21.0534 9.9401 21.2801 9.9401C21.5068 9.9401 21.6934 10.0134 21.8401 10.1601C21.9868 10.3068 22.0601 10.4934 22.0601 10.7201C22.0601 10.9468 21.9868 11.1334 21.8401 11.2801L11.2801 21.8401C11.1334 21.9868 10.9468 22.0601 10.7201 22.0601C10.4934 22.0601 10.3068 21.9868 10.1601 21.8401Z" fill="white"/>
          </g>
        </svg>
        <p className='text-[14px] text-start'>
          Save <span className='text-[#2C7EF8]'>53%</span> and get  <span className='text-[#2C7EF8]'>6 extra Clarifision</span> for only <span className='text-[#2C7EF8]'>$14 Each.</span>
        </p>
      </div>
      <div className='flex flex-col gap'>
        <div className='flex flex-col gap-3'>
          <button className='flex uppercase gap-4 w-full items-center justify-center bg-[#59AE43] text-white font-bold text-[14px] rounded-[50px] py-4'>
            <p>Yes - Claim my discount</p> 
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                <path d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512475C10.4059 0.126565 9.78022 0.126565 9.39431 0.512475C9.0084 0.898386 9.0084 1.52407 9.39431 1.90998L14.9843 7.5L9.39431 13.09C9.0084 13.4759 9.0084 14.1016 9.39431 14.4875C9.78022 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381836 8.48819H16.3818V6.51181H0.381836V8.48819Z" fill="white"/>
              </svg>
            </span>
          </button>
          <div className='flex flex-col gap-3 items-center justify-center px-4 py-2 border-[1px] rounded-[4px] border-[#CFCFCF] self-stretch mb-5'>
            <div className='w-full justify-between flex items-center text-[#4D5254] text-xs text-center'>
              <p>Free shipping</p>
              <div className='w-[1px] bg-[#CFCFCF] h-[14px]' />
              <p className='gap-[8px] flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <g clip-path="url(#clip0_1_137)">
                  <path d="M9.125 5.99902H2.125C1.57272 5.99902 1.125 6.44674 1.125 6.99902V10.499C1.125 11.0513 1.57272 11.499 2.125 11.499H9.125C9.67729 11.499 10.125 11.0513 10.125 10.499V6.99902C10.125 6.44674 9.67729 5.99902 9.125 5.99902Z" stroke="#696969" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.12598 5.99902V3.99902C3.12598 3.33598 3.38937 2.7001 3.85821 2.23126C4.32705 1.76242 4.96294 1.49902 5.62598 1.49902C6.28902 1.49902 6.9249 1.76242 7.39374 2.23126C7.86258 2.7001 8.12598 3.33598 8.12598 3.99902V5.99902" stroke="#696969" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_137">
                  <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
                Secure 256-bit SSL encryption.
              </p>
            </div>
            <div className='h-[1px] w-full bg-[#CFCFCF]' />
              <div className='flex'>
                <Image src='https://e-jam.vercel.app/visa.svg' alt='visa' width={24} height={14} />
                <Image src='https://e-jam.vercel.app/shop-pay.svg' alt='shop-pay' width={24} height={14} />
                <Image src='https://e-jam.vercel.app/mastercard.svg' alt='mastercard' width={24} height={14} />
                <Image src='https://e-jam.vercel.app/gpay.svg' alt='gpay' width={24} height={14} />
                <Image src='https://e-jam.vercel.app/apple-pay.svg' alt='apple-pay' width={24} height={14} />
                <Image src='https://e-jam.vercel.app/amex.svg' alt='amex' width={24} height={14} />
              </div>
          </div>
          <button className='uppercase underline text-[#F82C2C] text-[12px] text-center font-medium text-lg w-fit mx-auto'>No thanks, I don’t want this.</button>
        </div>
      </div>
      <div className='flex gap-4 self-stretch items-start'>
        <div className='h-[48px] max-w-[48px] w-full relative'>
          <Image src='https://e-jam.vercel.app/image-6@2x.png' alt='certificado' fill />
        </div>
        <p className='text-[#4D5254] text-[12px]'>
          If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee.</b> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
        </p>
      </div>
    </div>
  )
}

export default CardBuyMobile