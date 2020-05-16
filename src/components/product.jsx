import React from 'react';

const Product = props => {
  const { id, productName, category, price } = props.product;

  return (
    <React.Fragment>
      <div className="col mb-4">
        <div className="card h-100 ">
          <img
            src={require('../images/' + id + '.png')}
            className="card-img-top"
            alt={productName}
          />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">
              <span className="badge badge-dark p-2">{category}</span>
            </p>
            <p className="card-text">£{price}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
