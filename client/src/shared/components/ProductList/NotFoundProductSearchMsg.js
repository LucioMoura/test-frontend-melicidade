import React from 'react';

const NotFoundProductSearchMsg = () => {
  return (<div className='grid'>
    <div className='warp'>
      <h1>Não há anúncios que coincidam com a sua busca.</h1>
      <ul>
        <li>Revise a ortografia da palavra.</li>
        <li>Utilize palavras mais genéricas ou menos palavras.</li>
        <li>Navegue pelas categorias para encontrar um produto semelhante.</li>
      </ul>
    </div></div>);
};

export default NotFoundProductSearchMsg;
