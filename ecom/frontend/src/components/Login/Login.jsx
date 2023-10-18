import React, { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import styles from "../../styles/styles";
import {Link} from "react-router-dom";

const Login = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const[visible,SetVisible]=useState("");//for password viisibility

  return (
<div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>
            Login
        </h2>
    </div>
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-18'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email Address 
              </label>
            </div>
            <div className="mt-1">
                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                type="email" name="email" autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
            </div>
            <div className="mt-1 relative">
                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                type={visible ? "text" : "password"} name="password" autoComplete='current-password' required 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                {/*password visibility icon*/}
                {
                  visible ? (
                    <AiOutlineEye className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => SetVisible(false)} />
                    ) : (
                      <AiOutlineEyeInvisible className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => SetVisible(true)} />
                    )
                }
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input type="checkbox" name="remember-me" id="remember-me" 
                      className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'/>
                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>Remember me</label>
              </div>
              <div className="text-sm">
                <a href=".forget-password" className='font-medium text-blue-600 hover:text-blue-500'>
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                  Login
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>New to EaseFlow? </h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">Sign Up</Link>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4> Are you a Gynecologist?</h4>
              <Link to="/gynecologist-login" className="text-blue-600 pl-2">Login</Link>
            </div>
          </form>
        </div>
    </div>
</div>
  )
}

export default Login
 