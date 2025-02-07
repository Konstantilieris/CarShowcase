"use client";
import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { models } from '@/constants';
import SearchModel from './SearchModel';
const SearchBar = () => {
 
    const [manufacturer,setManufacturer]=useState('');
    const [model,setModel]=useState("")
    const router =useRouter();
    const searchModels= ()=>{

    }
    const handleSearch=(e)=>{
      e.preventDefault();
      if(manufacturer==='' && model===''){
        return alert('Please fill in the search bar')
      }
        updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
    }
    const updateSearchParams= (model,manufacturer)=>{
      const searchParams=new URLSearchParams(window.location.search);
      if (model){
        searchParams.set("model",model)
      }else {
        searchParams.delete('model');
      }
      if (manufacturer){
        searchParams.set("manufacturer",manufacturer)
      }else {
        searchParams.delete('manufacturer');
      }
      const newPathname=`${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathname);
    }
    const SearchButton= ({otherClasses})=>{return(
      <button  type="submit" className={` -ml-3 z-10 ${otherClasses} `}>
       <Image src={"/magnifying-glass.svg"} alt="magnifying-glass" width={25} height={30} className='object-contain'  />
      </button>
    )
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
         <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        <SearchButton otherClasses="sm:hidden"/>
         </div>
         <div className='searchbar__item'>
           <Image src="/model-icon.png" width={25} height={25} alt="car-icon" className='absolute w-[20px] h-[20px] ml-4'/>
           <SearchModel manufacturer={manufacturer} model={model} setModel={setModel}/>
           <SearchButton otherClasses="sm:hidden"/>
         </div>
          <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar
