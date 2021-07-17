import { Component } from 'react';
import './App.css';

import { dataStore } from './data/dataStore';
import { Provider } from 'react-redux';
import { HttpHandler } from './data/httpHandler';
import { addProduct } from './data/actionCreators';
import { ConnectedProductList } from './data/productListConnector';


export interface Props {
  
}
 
 
export default class App extends Component<Props> {

  private httpHandler= new HttpHandler();

  constructor(props: Props) {
    super(props);
    this.httpHandler.loadProducts(data => dataStore.dispatch(addProduct(...data)))
  }

  addToOrder = () => {
    console.log('Submit order');
  }

  render() { 
    return (  
      <div className="App">
        <Provider store={dataStore}>
          <ConnectedProductList />
        </Provider>
      </div>
    );
  }
}