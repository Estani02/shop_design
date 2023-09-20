import Image from 'next/image'
import React from 'react'
import CardReview from './CardReview'
import CradBuy from './CradBuy'
import CardBuyMobile from './mobile/CardBuyMobile'

export const Card = () => {
  return (
    <div className='flex flex-col-reverse xl:flex-row gap-10 rounded-[10px] xl:mt-10 xl:bg-[#FAFAFA] justify-between p-5 xl:p-10'>
      <div className='hidden xl:flex flex-col gap-6 justify-between'>
        <Image src='https://e-jam.vercel.app/image-4@2x.png' alt='article' width={575} height={591} />
        <CardReview />
      </div>
      <div>
        <CradBuy />
        <CardBuyMobile />
      </div>
    </div>
  )
}
