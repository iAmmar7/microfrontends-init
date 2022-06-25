import React, { Fragment } from 'react';

function SwitchAuth(props) {
  const { handleToggleMode } = props;

  return (
    <Fragment>
      <h2 className='text-3xl font-bold mb-2'>Hola, amigos!</h2>
      <div className='border-2 w-10 border-danger inline-block mb-2'></div>
      <p className='mb-10'>Fill up personal information and start journey with the MicroFrontends.</p>
      <button
        className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500 transition hover:-translate-y-1 hover:scale-110 duration-300'
        onClick={handleToggleMode}
      >
        Sign up
      </button>
    </Fragment>
  );
}

export default SwitchAuth;
