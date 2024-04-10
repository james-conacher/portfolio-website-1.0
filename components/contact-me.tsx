/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'; 
import {motion} from 'framer-motion'; 
import {PhoneIcon, MapPinIcon, EnvelopeIcon, MapIcon} from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from 'react-hook-form';

type Props ={

}
type Inputs = {
    name: string
    email: string
    subject:string
    message:string
  }

export default function ContactMe({}:Props){
    
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:jconacher@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
      };

    return(
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[green]/50 underline'>Let's chat.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[green] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>1233423343</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[green] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Cape Town</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[green] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>jconacher@gmail.com</p>
                    </div>
                </div>

                <form action="" className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text"  />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' name="" id="" ></textarea>
                    <button className='bg-[green] py-5 px-10 rounded-md text-white font-bold text-lg' type='submit'>Submit</button>
                </form>

            </div>
        </div>
    )
}