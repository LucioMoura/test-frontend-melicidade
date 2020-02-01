import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.scss';

const HomePage = (props) => {
  return (
    <div>
      <SearchBar history={props.history} />
      <div className='home'>
        <h1>
          Milhões de Produtos para você.
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
