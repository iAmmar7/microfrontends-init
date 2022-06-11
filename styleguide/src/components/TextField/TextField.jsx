import React from 'react';

function TextField(props) {
  const { className, startEnhancer, ...otherProps } = props;
  return (
    <div className={`bg-gray-100 p-1 flex items-center ${className}`}>
      {startEnhancer && <span className='m-2'>{startEnhancer}</span>}
      <input {...otherProps} className='bg-gray-100 outline-none text-sm flex-1' />
    </div>
  );
}

export default TextField;
