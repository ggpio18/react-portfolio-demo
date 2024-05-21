import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <div>
      <footer className='bg-black py-[2rem] w-full overflow-hidden'>
    <div className=" lg:px-[15rem] sm:px-1rem">
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:place-items-center  lg:gap-[45%] md:gap-[30%]  sm:gap-[1%] '>
    <div className="left mb-5">
        <h2 className='mb-1 sm:text-center'>PIOLO ARANZA</h2>
        <p className='lg:text-left md:text-center sm:text-center ph:text-centert'>A future programmer focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
    </div>
    <div className="right">
        <h2>SOCIALS</h2>
        <ul className='socialsf flex gap-5 items-center mt-4'>
            <li><Link to="#"><FaFacebookSquare /></Link></li>
            <li><Link to="#"></Link><FaTwitterSquare /></li>
            <li><Link to="#"></Link><FaInstagramSquare /></li>
            <li><Link to="#"></Link><FaYoutubeSquare /></li>
            <li><Link to="#"></Link><IoMailSharp /></li>
        </ul>
    </div>
    </div>

    <div className='sm:  border-t border-white mt-5'>
        <p className='text-center mt-5'>© Copyright 2024. Made by PIO ARANZA</p>
    </div>

    </div>

   </footer>
    </div>
  )
}
export default Footer

