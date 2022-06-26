import React, { Fragment } from 'react';

import { Button } from '@venturedive/styleguide';

function SwitchAuth(props) {
  const { handleToggleMode, signInMode } = props;

  return (
    <Fragment>
      <h2 className='text-3xl font-bold mb-2'>Hola, amigos!</h2>
      <div className='border-2 w-10 border-danger inline-block mb-2'></div>
      <p className='mb-10'>Fill up personal information and start journey with the MicroFrontends.</p>
      <Button variant='tertiary' onClick={handleToggleMode}>
        {signInMode ? 'Sign up' : 'Sign in'}
      </Button>
    </Fragment>
  );
}

export default SwitchAuth;
