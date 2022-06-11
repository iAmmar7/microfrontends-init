/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

import { TextField } from '@venturedive/styleguide';

function SignIn(props) {
  const { formState, handleChange, handleSignIn } = props;

  return (
    <div className='py-10'>
      <h2 className='text-2xl sm:text-3xl font-bold text-red-500 mb-2'>Sign in to account</h2>
      <div className='border-2 w-10 border-red-500 inline-block mb-2'></div>
      <p className='text-gray-400 text-sm my-2'>Use your email and password to sign in</p>
      <form className='flex flex-col items-center mt-6 gap-y-3' onSubmit={handleSignIn}>
        <TextField
          name='email'
          type='email'
          placeholder='Please enter your email'
          value={formState.email}
          className='w-64'
          startEnhancer={<FaRegEnvelope className='text-gray-400' />}
          onChange={handleChange}
          required
        />
        <TextField
          name='password'
          type='password'
          placeholder='Please enter your password'
          value={formState.password}
          className='w-64'
          startEnhancer={<MdLockOutline className='text-gray-400' />}
          onChange={handleChange}
          required
        />
        <div className='flex justify-between w-64 mb-5'>
          <label className='flex items-center text-xs gap-x-2'>
            <input type='checkbox' name='remember' className='accent-red-500 ' />
            Remember me
          </label>
          <a href='#' className='text-xs'>
            Forgot password?
          </a>
        </div>
        <button
          className='border-2 border-red-400 text-red-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-400 hover:text-white transition duration-300'
          type='submit'
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
