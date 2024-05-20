import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
  //download resume
  // try
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../../resume/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };
  return (
    <>
      <section id='aboutMe' className='aboutMe bg-portsecondary p-10 overflow-hidden transition-all bg-portprimary'>
      <div className="container2">
        <div className="aboutme__wrapper grid lg:grid-cols-2 lg:gap-[16rem] md:grid-cols-1 md:gap-[10rem] sm:grid-cols-1 sm:gap-[5rem] place-items-center h-[70vh]" >
          <div className="about_left" data-aos="zoom-in-left">
            <h2 className='mb-3 text-3xl animate-type text-black'>About_Pio.</h2>
            <p className='mb-5 text-base'>Hello! Im Piolo C. Aranza, an I.t student currently in my 4th year of the BSIT course. I have a strong passion for technology and genuine curiosity for the ever-evolving world of IT. Throughout my academic journey. I have gained solid foundation in web development, programming, database management, networking and game development. I actively seek opportunities to enhance my knowledge and skills through continuous learning, and I enjoy working on projects both independently and as part of a team</p>
           
            <p className='mb-5 text-base'>My goal is to become a well-rounded IT professional who can leverage technology to create practical solutions and drive positive change</p>

            <div>
              <ul className='socialam flex gap-5 items-center mb-5'>
                <li><Link to="#"><FaFacebookSquare /></Link></li>
                <li><Link to="#"></Link><FaTwitterSquare /></li>
                <li><Link to="#"></Link><FaInstagramSquare /></li>
                <li><Link to="#"></Link><FaYoutubeSquare /></li>
                <li><Link to="#"></Link><IoMailSharp /></li>
              </ul>
            </div>
            <button className='btnui btnui--v2' onClick={handleDownloadResume}>Download CV</button>
          </div>
          <div className="about_right grid grid-cols-1 place-items-center relative" data-aos="flip-down">
            <img src="../../../public/img/aboutme.jpg" alt=""  className='object-cover 2xl:size-[500px]  lg:size-[500px] sm:size-[200px] border border-black z-[999]'/>
            <div className="grid md:grid md:grid-cols-1 absolute lg:size-[500px]  md:size-[300px] sm:size-[50px]  border bg-black border-black 
            -bottom-[20px] -right-4">
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default About
