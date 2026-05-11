'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Banner = () => {

  const [selectedBanner, setSelectedBanner] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      selectedBanner ? setSelectedBanner(false) : setSelectedBanner(true)
    }, 4500);
    return () => clearInterval(interval);
  }, [selectedBanner]);

  return (
    <div>
      <div className={`md:h-screen relative md:block hidden`}>
        <div className='absolute top-[65%] z-10 text-white right-[70px]'>
          <h1 className='flex justify-end text-6xl'>siempre es buen momento</h1>
          <h1 className='flex justify-end text-6xl'>para festejar</h1>
        </div>
        <Link href={'https://pedix.app/copa-tomada/'} rel='noreferrer' target='_blank' className='button cursor-pointer bottom-8 left-0 right-0 z-20 absolute mx-auto w-32 hover:bg-transparent hover:text-white'>
          Pedi YA
        </Link>
        <video
          src='/assets/video/home_copa.mp4'
          autoPlay
          muted
          loop
          id={'video'}
          className={'w-full'}
        />
      </div>
      <div className='md:hidden h-screen relative'>
        <video
          src='/assets/video/home-mobile3.mp4'
          autoPlay
          muted
          loop
          id={'video'}
          className='absolute top-16'
        />
        <div className='absolute z-10 text-white bottom-56'>
          <h1 className='text-2xl mx-auto w-[70%]'>siempre es buen momento</h1>
          <h1 className='text-2xl mx-auto w-[70%]'>para festejar</h1>
        </div>
        <Link href={'https://pedix.app/copa-tomada/'} rel='noreferrer' target='_blank' className='button cursor-pointer bottom-32 left-0 right-0 z-20 text-center absolute mx-auto md:w-32 w-36 hover:bg-transparent hover:text-white'>
          Pedi YA
        </Link>
      </div>
    </div>
  )
}

export default Banner
