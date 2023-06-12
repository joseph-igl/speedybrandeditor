import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};

/**
 * 
 */
const Header = () => {
    return <div>
         <header className=''>
          <h1 className='text-[2rem] '>Categories</h1>
          <nav className='flex justify-between items-center w-[100%] p-4'>
            <ul className='flex justify-between w-[45%]'>
              <li key='1'>All</li>
              <li key='2'>Custom</li>
              <li key='3'>ICP</li>
              <li key='4' className='border-b-4 border-orange-600'>Mission</li>
              <li key='5'>Product</li>
            </ul>
            <button className='bg-orange-600 p-1 h-fit place-self-end'>Add Topic </button>
          </nav>
        </header>
    </div>;
}

// header.propTypes = propTypes;
// header.defaultProps = defaultProps;
// #endregion

export default Header;