import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../partials/svg/Logo'
import { FaCheckCircle } from 'react-icons/fa'

const ForgotPassword = () => {
  return (
    <>
    <div className="flex h-screen w-full justify-center items-center bg-primary">
      <div className='max-w-[400px] w-full px-4 py-8 bg-secondary '>
            <Logo/>

            <div className='text-center'>
                <FaCheckCircle className='text-accent block mx-auto my-5 text-4xl'/>
                <h3>Reset Email Sent</h3>
                <p className='text-balance'>Please check your email to the reset password instruction</p>
            </div>

            <h2>Forgot Password</h2>

            <form action="" className='mt-5'>
                <div className="input-wrap mb-10">
                    <label htmlFor="">Registered Email</label>
                    <input type="text" />
                </div>
    
                    <button className='btn btn--accent w-full p-4 justify-center'>Reset Password</button>
                    <button className='btn btn--cancel w-full p-4 justify-center mt-5'>Return</button>
            </form>
      </div>
      </div>

    </>
  )
}

export default ForgotPassword
