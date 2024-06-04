"use client";
import React from 'react'
import { Fragment } from 'react';
import { Combobox,Transition,CheckIcon } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react';
import { manufacturers } from '@/constants';
const SearchManufacturer = ({manufacturer,setManufacturer}) => {
  const [query,setQuery]=useState('');
   const filteredManufacturers= query===""?manufacturers:manufacturers.filter((item)=>(
    item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))
   ))
   
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
         <Combobox.Button className="absolute top-[14px]">
          

         </Combobox.Button>
         <Combobox.Input className="search-manufacturer__input" placeholder='Porsche'
         displayValue={(manufacturer)=>manufacturer} onChange={(e)=>setQuery(e.target.value)}
         />

          <Transition as={Fragment} leave="trasition ease-in duration-100" leaveFrom="opacity-100" leaveTo='opacity-0' afterLeave={()=>setQuery('')}>
             <Combobox.Options>
                {filteredManufacturers.length===0&& query!=="" ?(
                  <Combobox.Option value={query} className="search-manufacturer__option">Create `${query}`</Combobox.Option>
                ):(filteredManufacturers.map((item)=>(
                   <Combobox.Option key={item} className={({active})=>`relative search-manufacturer option ${active?"bg-primary-blue text-white":"text-gray-900" }`} value={item}>{({selected,active})=>(
                    <>
                     <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            
                          </span>
                        ) : null}
                    </>
                   )

                   }</Combobox.Option>

                )))}
             </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      
    </div>
  )
}

export default SearchManufacturer
