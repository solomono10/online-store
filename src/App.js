import React, { Component } from 'react';
// import Navbar from './components/navbar';
// import Scroll from './components/scroll';
import Products from './components/products';
// import Product from './components/product';
// import Footer from './components/footer';
import SearchBox from './components/searchbox';
import { products } from './products';
import './App.css';


class App extends Component {
  state = {
    productsList: [],
    value: '',
    category: ''
   }

   handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSelect = (event) => {
    this.setState({
      category: event.target.value
    });
    // console.log(event.target.value);
  }

  filteredProduct = () => {

    let filtered;
    const categories = ['condiments', 'fish', 'grains', 'dairy', 'produce'];
    const { value, category, productsList } = this.state;

  if (!value && !category) return productsList;

   if (categories.includes(category.toLowerCase())){
    filtered = productsList.filter(product => {
          return product.category.toLowerCase() === category.toLowerCase();
        });
   }

    if (value) {
      filtered = productsList.filter(product => {
        return product.productName.toLowerCase() === value.toLowerCase();
      });
    }

    return filtered;
  }

  componentDidMount() {
    return this.setState({
      productsList: products
    });
  }

   
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div>
            <SearchBox handleChange={() => this.handleChange} handleSelect={() => this.handleSelect} />
          </div>
          <div className="App"> 
            < Products products={this.filteredProduct()} />
          </div>
        </div>
      </React.Fragment>
     );
  }
}

export default App;