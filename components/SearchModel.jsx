"use client"
import React from 'react'
import { useState } from 'react'
import { Combobox,Transition } from '@headlessui/react'
import { models } from '@/constants'
import { Fragment } from 'react'
const SearchModel = ({model,manufacturer,setModel}) => {
  const [query,setQuery]=useState("");
  const filterManufacturers=models.filter((car)=>car.manufacturer.toLowerCase()===manufacturer.toLowerCase()).map((car)=>car.models).flat()
  const filteredModels= query===""?filterManufacturers:filterManufacturers.filter((model)=>
  {
    return  model.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))
  }
  )

  
  
  
    return (

        <div className='search-manufacturer'>
        <Combobox value={model} onChange={setModel}>
          <div className="relative w-full">
           <Combobox.Button className="absolute top-[14px]">
            
  
           </Combobox.Button>
           <Combobox.Input className="search-manufacturer__input" placeholder='911Turbo'
           displayValue={(model)=>model} onChange={(e)=>setQuery(e.target.value)}
           />
  
            <Transition as={Fragment} leave="trasition ease-in duration-100" leaveFrom="opacity-100" leaveTo='opacity-0' afterLeave={()=>setQuery('')}>
               <Combobox.Options>
                  {filteredModels.length===0&& query!=="" ?(
                    <Combobox.Option value={query} className="search-manufacturer__option">Create `${query}`</Combobox.Option>
                  ):(filteredModels.map((item)=>(
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

export default SearchModel
