import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../partials/svg/Logo'

const Login = () => {
  return (
    <>
    <div className="flex h-screen w-full justify-center items-center bg-primary">
      <div className='max-w-[400px] w-full px-4 py-8 bg-secondary '>
            <Logo/>

            <h2>Login</h2>

            <form action="" className='mt-5'>
                <div className="input-wrap">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="input-wrap">
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>

                    <Link to="/forgot-passworrd" className='block text-right  italic text-xs mb-5 hover:underline'>Forgot Password</Link>
                    <button className='btn btn--accent w-full p-4 justify-center'>Sign In</button>
            </form>
      </div>
      </div>

    </>
  )
}

export default Login
