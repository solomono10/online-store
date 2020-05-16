import React from 'react';
import Product from './product';
import Preloader from './preloader';

const Products = ({ products }) => {

  return (products.length === 0) ? (
    <div>
      <Preloader />
    </div>
  ) :

  (
    <React.Fragment>
        <div className="row row-cols-1 row-cols-md-3">
        {
            products.map(product => {
                return <Product key={product.id} product={product} />
            })
        }
        </div>
    </React.Fragment>
  );
};

export default Products;
