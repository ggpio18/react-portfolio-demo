import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      {/*Hero  banner */}
      <section className='banner flex items-center'>
      <div className='bg-black w-[50px] py-5 px-2 ' data-aos="fade-left">
          <ul className='socialshb grid gap-8'>
            <li><Link to="#"><FaFacebookSquare /></Link></li>
            <li><Link to="#"></Link><FaTwitterSquare /></li>
            <li><Link to="#"></Link><FaInstagramSquare /></li>
            <li><Link to="#"></Link><FaYoutubeSquare /></li>
            <li><Link to="#"></Link><IoMailSharp /></li>
          </ul>
        </div>
        {/* text-[calc(56% - 5rem)] */}
        <div className="container">
          <div className="hero__wrapper text-center grid grid-cols-1 place-items-center phone:">
            <h1 className='xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[3rem] ph:text-[2rem] animate__animated animate__bounce'>Welcome</h1>
            <h1 className=' max-w-[700px]   animate-type2 xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[3rem] ph:text-[2rem'>HELLO I'M <span className='text-porthaccent'>PIO</span></h1>
            <div className='inline-block max-w-[700px]'>
            <p className='mb-5 ' data-aos="fade-up">Im an I.T student aspiring to be A full stack-developer
                with a keen eye for detail. Lets work together so 
                we can achieve you business goals. </p>
                </div>
          <button className='btnui text-black'><Link to="/project">Projects</Link> </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Banner
