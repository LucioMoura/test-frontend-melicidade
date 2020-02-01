import React from 'react';
import { ClipLoader } from 'react-spinners';

import './Loader.scss';

const Loader = (props) => {
  return (<div className='loader'>
    <ClipLoader
      color={'#FFE600'}
    />
    <p>{props.text}</p>
  </div>);
};

export default Loader;
