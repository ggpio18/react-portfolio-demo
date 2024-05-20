import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Logo from './svg/Logo';
import { GoProjectSymlink } from "react-icons/go";
import { MdHomeRepairService } from "react-icons/md";




const Navigation = () => {
  const [activeLink, setActiveLink] = React.useState('');
  

  const handleLinkClick = (link) => {
    setActiveLink(() => link);
  };

  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line bg-primary'>
      <div className='flex items-center gap-4'>
        <Logo className="text-3xl"/>
        <h1 className='mb-0 text-2xl mb-4'>Portfolio Dashboard</h1>
      </div>
      

      <ul className='nav'>
        {/* <li className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}><Link to="/portfolio" onClick={() => handleLinkClick('/portfolio')}><MdOutlineDashboard />Dashboard</Link></li> */}

        <li className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}><Link to="/contact" onClick={() => handleLinkClick('/contact')}><AiOutlineMessage />Contacts</Link></li>

        <li className={`nav-link ${activeLink === '/service' ? 'active' : ''}`}><Link to="/service" onClick={() => handleLinkClick('/service')}><MdHomeRepairService />Services</Link></li>

        <li className={`nav-link ${activeLink === '/project' ? 'active' : ''}`}><Link to="/project" onClick={() => handleLinkClick('/project')}><GoProjectSymlink />
Project</Link></li>

        {/* <li className='nav-link'><Link to="#"><MdOutlineDashboard />Attendance</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Settings</Link></li> */}
      </ul>
    </aside>
  )
}

export default Navigation
