import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from '../../src/styles/styles';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(''); // for password visibility

  return (
    <div className='container mx-auto mt-10'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-3xl font-extrabold text-gray-800'>Login</h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-18'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='exampleInputEmail1' className='form-label mt-4'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                className='form-control focus:border-pink-500 bg-pink-100'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1' className='form-label mt-4'>
                Password
              </label>
              <input
                className='form-control focus:border-pink-500 bg-pink-100'
                id='exampleInputPassword1'
                placeholder='Password'
                type={visible ? 'text' : 'password'}
                name='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {visible ? (
                <AiOutlineEye
                  className='absolute right-2 top-2 cursor-pointer'
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className='absolute right-2 top-2 cursor-pointer'
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type='checkbox'
                  name='remember-me'
                  id='remember-me'
                  className='h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>
              <div className='text-sm'>
                <a href='.forget-password' className='font-medium text-pink-600 hover:text-pink-500'>
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-pink bg-pink-600 hover:bg-pink-700'
              >
                Login
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>New to EaseFlow? </h4>
              <Link to='/SignUp' className='text-pink-600 pl-2'>
                Sign Up
              </Link>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4> Are you a Gynecologist?</h4>
              <Link to='/GynecologistLogin' className='text-pink-600 pl-2'>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
