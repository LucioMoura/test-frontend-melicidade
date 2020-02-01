import React from 'react';
import _ from 'lodash';

import ClipLoader from '../Loader/Loader';
import NotFoundProductSearchMsg from '../ProductList/NotFoundProductSearchMsg';
import './ProductDetails.scss';

const ProductDetails = (props) => {
  if (props.loading) {
    return <ClipLoader text='Carregando detalhes do produto...' />
  }


  if (_.isEmpty(props.product)) {
    return <NotFoundProductSearchMsg />;
  }

  const description = props.product.description.split('\n').map((item, key) => {
    return (_.isString(item) ? !!_.trim(item) : _.isEmpty(item))
      ? <span key={key}>{item}<br /></span> : <br key={key} />;
  });


  return (
    <div className='grid-0'>
      <div className='wrap'>
          <div className='grid-0'>
            <div className='col-desk-8 col-tab-8 col-mob-4'>
            <img className='img-fluid' src={props.product.picture} alt='Produto' />
            <div className='d-desk'>
             <h2>Descripcion del Producto</h2>
              <p>{description}</p>
            </div>
            </div>
            <div className='col-desk-4 col-tab-4 col-mob-4'>
            <div className='item-condition'>{props.product.condition}{props.product.sold_quantity !== 0 ? ` - ${props.product.sold_quantity} vendidos` : ''}</div>
              <h1>{props.product.title}</h1>
              <div className='item-price'>{props.product.price.amount}</div>
              <button type='button' className='btn'>Comprar</button>
              <div className='d-mobi'>
             <h2>Descripcion del Producto</h2>
              <p>{description}</p>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default ProductDetails;
