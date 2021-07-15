import React, { Component } from 'react';
import './App.css';
import { Product, Order } from './data/entities';
import { ProductList } from './components/ProductList/ProductList';

let testData: Product[] = [1, 2, 3, 4, 5].map(item => ({
  id: item,
  name: `prod${item}`,
  category: `kateg${item % 2}`,
  description: `PAfsapj faspfpsaj fpsajf ${item}${item+2}`,
  price: 11.26 * item
}));

export interface Props {
  
}
 
export interface State {
  order: Order
}
 
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { order: new Order()  };
  }

  get categories(): string[] {
    return [...new Set(testData.map(product => product.category))];
  }

  addToOrder = (product: Product, quantity: number): void => {
    this.setState(state => {
      state.order.addProduct(product, quantity);
      return state;
    })
  }
  render() { 
    return (  
      <div className="App">
        <ProductList 
          products={testData}
          categories={this.categories}
          order={this.state.order}
          addToOrder={this.addToOrder}
        />
      </div>
    );
  }
}
 
export default App;

