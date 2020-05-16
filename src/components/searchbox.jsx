import React from 'react';

const SearchBox = prop => {
  return (
    <form className="row">
        <div className="form-group col-lg-6">
            <input
                type="search"
                className="form-control form-control-lg" 
                placeholder="Please search product"
                autoComplete="off"
                onChange={prop.handleChange()}
            />
        </div>
        <div className="form-group col-lg-6">
            <select  className="form-control form-control-lg" onChange={prop.handleSelect()}>
            <option value={"Please select category"}>Please select category</option>
            <option>Condiments</option>
            <option>Fish</option>
            <option>Grains</option>
            <option>Dairy</option>
            <option>Produce</option>
            </select>
        </div>
    </form>
  );
};

export default SearchBox;
