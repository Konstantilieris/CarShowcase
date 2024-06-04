"use client";
import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
    const handleScroll= ()=>{}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Rent the Perfect Car for Your Journey</h1>
           <p className='hero__subtitle'>Discover a Wide Range of Vehicles at Affordable Prices</p>
           <CustomButton title="Explore Cars" containerStyles="bg-brown text-white rounded-full mt-10" btnType={"button"} handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
           <div className='hero__image'>
             <Image src="/hero_car.png" alt="hero" fill className='object-contain'/>
             </div>
             <div className='hero__image-overlay'/>
          
        </div>
     
    </div>
  )
}

export default Hero
