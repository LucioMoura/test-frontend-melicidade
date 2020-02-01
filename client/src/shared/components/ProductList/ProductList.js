import React from 'react';
import _ from 'lodash';

import ClipLoader from '../Loader/Loader';
import ProductsListItem from './ProductsListItem';
import NotFoundProductSearchMsg from './NotFoundProductSearchMsg';

const ProductList = (props) => {

  if (props.loading) {
    return <ClipLoader text="Caregando..." />
  }

  if (_.isEmpty(props.products)) {
    return <NotFoundProductSearchMsg />;
  }


  if (typeof document !== 'undefined') {
    const customTittle = `${props.lastCategory} em Mercado Livre`;
    document.title = customTittle !== document.title ? customTittle : document.title;
  }

  let products = [];
  if (!_.isEmpty(props.products)) {
    products = props.products.map((product) => {
      return <ProductsListItem key={product.id} product={product} />;
    });
  }

  return (
    <div className="grid">
      <div className="wrap">
          {products}
      </div>
    </div>);
};

export default ProductList;
