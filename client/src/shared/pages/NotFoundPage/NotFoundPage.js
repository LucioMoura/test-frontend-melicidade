import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import './NotFoundPage.scss';

const NotFoundPage = (props) => {
  return (
    <div>
      <SearchBar history={props.history} />
      <div className='not-found'>
        <h1>Página não existente!</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
