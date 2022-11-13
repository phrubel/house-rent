import React from 'react';

const Copyright = () => {
  return (
    <div className='border-t border-white/20'>
      <div className='container mx-auto'>
        <div className='pt-6'>
          <p className='text-base text-center'>
          All Right Reserved by <span className='text-rose-700'><a href="https://www.facebook.com/parvezhasanrubel42" className='no-underline'>Parvez Hasan Rubel.</a></span> <br /> Copyright &copy; {new Date().getFullYear()};
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;