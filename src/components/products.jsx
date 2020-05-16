import React from 'react';
import Product from './product';

const Products = ({ products }) => {
  return (
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
