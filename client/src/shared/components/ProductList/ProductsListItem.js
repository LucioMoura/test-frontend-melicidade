import React from 'react';
import { Link } from 'react-router-dom';
import ImgShipping from './../../../assets/ic_shipping.png';
import './ProductsListItem.scss';

const ProductsListItem = (props) => {
  return (
    <div className="grid-0">
        <div className="col-desk-2 col-tab-3 col-mob-4">
          <Link to={`/items/${props.product.id}`}>
            <img
              className="thumb"
              src={props.product.picture}
              alt='Product'
            />
          </Link>
        </div>
        <div className="col-desk-8 col-tab-6 col-mob-3">
          <div className="contain-detail">
            <div className="info-product">
              <Link className="item-descriptiom-price" to={`/items/${props.product.id}`}>
                <span>{props.product.price.amount}</span>
              </Link>
              <img src={ImgShipping} alt="shipping" />
              <p className="item-description">{props.product.title}</p>
              <span className="item-description">Completo Unico!</span>
            </div>
          </div>
        </div>
        <div className="col-desk-2 col-tab-3 col-mob-4">
          <div className="item-location">
            <p>{props.product.address}</p>
          </div>
        </div>

      <hr />
    </div>

  );

};

export default ProductsListItem;
