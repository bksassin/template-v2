import React from 'react'
import Header from '../assets/header.jpg';

const Hero = () => {
  return (
    
  <div class="relative lg:h-screen mt-10">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
        <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div class="relative py-10 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1 class="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">COMPANY NAME</h1>
            <p class="mt-6 text-base lg:text-lg leading-6 lg:leading-8 text-gray-600">Restore your home to its former glory - Professional and reliable home repair services for all your needs.</p>
            <div class="mt-10 flex items-center gap-x-6">
                <a href="#contact" class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a58d7]">Estimate</a>
                <a href="#about" class="text-sm font-semibold leading-6 text-gray-700 hover:text-yellow-500">About Us <span aria-hidden="true">→</span></a>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src={Header} alt="" />
    </div>
  </div>
  )
}

export default Hero