import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <>
      {/* cta */}
      <section className='cta grid place-items-center bg-white py-7 mt-5' data-aos="fade-left">
          <div className="cta__content grid place-items-center mt-5">
              <h2 className='text-2xl text-black'>Feel free to  talk about upcoming Project</h2>
              <p className='mb-5 text-lg'>"Reach out for personalized assistance."</p>
              <button className='btnui btnui--v3 mb-3'><Link to="/contacts">Contact Us</Link></button>
          </div>
      </section>
    </>
  )
}

export default Cta
