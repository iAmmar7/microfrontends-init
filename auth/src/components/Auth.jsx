import React, { useState, useReducer } from 'react';
import { Transition } from '@headlessui/react';

import { Toast } from '@venturedive/styleguide';
import { AuthService } from '@venturedive/api';

import SignIn from './SignIn';
import SignUp from './SignUp';
import SwitchAuth from './SwitchAuth';

const initialState = {
  name: '',
  email: '',
  password: '',
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      throw new Error();
  }
}

function Auth() {
  const [signInMode, setSignInMode] = useState(true);
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleToggleMode = () => setSignInMode(!signInMode);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'change', payload: { name, value } });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      dispatch({ type: 'change', payload: { name: 'error', value: '' } });
      const payload = {
        name: formState.name,
        email: formState.email,
        password: formState.password,
      };
      const signUp = await AuthService.signUp(payload);
      console.log('signUp result', signUp);
    } catch (error) {
      console.log('error', error);
      dispatch({
        type: 'change',
        payload: { name: 'error', value: error.message },
      });
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      dispatch({ type: 'change', payload: { name: 'error', value: '' } });
      const payload = {
        email: formState.email,
        password: formState.password,
      };
      const signIn = await AuthService.signIn(payload);
      console.log('rsignIn esult', signIn);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <main className='border bg-home flex flex-col items-center justify-center w-full flex-1 text-center min-h-screen py-2'>
      <Toast message={formState.error} />
      <div className='max-w-4xl w-full bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-row relative'>
        <div className='w-full sm:w-3/5 px-5 pt-5'>
          <div className='flex justify-between items-center'>
            <div className='text-left font-bold text-xl'>
              <p className='text-primary'>
                Venture<span className='text-danger'>Dive</span>
              </p>
            </div>
            <div className='inline sm:hidden text-sm'>
              <button className='px-2' onClick={handleToggleMode}>
                {signInMode ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>
          {signInMode && (
            <Transition
              as='div'
              appear={true}
              show={signInMode}
              enter='transition-opacity duration-150'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <SignIn formState={formState} handleChange={handleChange} handleSignIn={handleSignIn} />
            </Transition>
          )}
          {!signInMode && (
            <Transition
              as='div'
              appear={true}
              show={!signInMode}
              enter='transition-opacity duration-150'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <SignUp formState={formState} handleChange={handleChange} handleSignUp={handleSignUp} />
            </Transition>
          )}
        </div>
        <div className='w-2/5 bg-primary text-white rounded-none md:rounded-tr-2xl md:rounded-br-2xl py-36 px-12 hidden sm:block'>
          <SwitchAuth handleToggleMode={handleToggleMode} />
        </div>
      </div>
    </main>
  );
}

export default Auth;
