import React from 'react'

const FormDevider = () => {
  return (
      <div className='flex items-center my-4'>
          <div className='flex-grow border-t border-gray-300' />
          <span className='mx-4 text-gray-500 text-sm'>or</span>
          <div className='flex-grow border-t border-gray-300' />
      </div>
  );
}

export default FormDevider

