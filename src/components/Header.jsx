import React from 'react'
import truck from '@/assets/svg/truck.svg'
import heart from '@/assets/svg/heart.svg'
import check from '@/assets/svg/checkmark.svg'
import arrow from '@/assets/svg/arrow.svg'
import Image from 'next/image'
import SubHeader from './SubHeader'
import HeaderMobile from './mobile/HeaderMobile'

const items = [
  {title:'30-DAY SATISFACTION GUARANTEE', svg:'https://e-jam.vercel.app/fluentcheckmarkstarburst20regular.svg'},
  {title:'Free delivery on orders over $40.00', svg:'https://e-jam.vercel.app/phtrucklight.svg'},
  {title:'50.000+ HAPPY CUSTOMERS', svg:'https://e-jam.vercel.app/mdicardsheartoutline.svg'},
  {title:'100% Money Back Guarantee', svg:'https://e-jam.vercel.app/fluentarrowsynccheckmark20regular.svg'},
]

const Header = () => {
  return (
    <>
      <header className='bg-[#252F3D] py-[22px] lg:flex items-center justify-center w-full hidden'>
        <ul className='flex w-3/4 justify-between font-medium text-white text-xs'>
          {
            items.map((i, index)=>(
              <li className='flex gap-2 items-center justify-center' key={index}>
                <Image width={22} height={22} src={i.svg} alt={i.title} />
                <p>{i.title}</p>
              </li>
            ))
          }
        </ul>
      </header>
      <HeaderMobile items={items} />
      <SubHeader />
    </>
  )
}

export default Header