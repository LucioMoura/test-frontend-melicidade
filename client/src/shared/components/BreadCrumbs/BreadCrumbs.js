import React from 'react';
import _ from 'lodash';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => {
  let breadcrumbs = [];
  if (!_.isEmpty(props.crumbs)) {
    breadcrumbs = props.crumbs.map((crumb) => {
      return <li className='breadcrumb-item' key={crumb}>{crumb}</li>;
    });
  }
  return (
    <div className='grid'>
        <ul className='breadcrumb'>
            {breadcrumbs}
        </ul>
    </div>
  );
};

export default BreadCrumbs;
