import { Component } from 'react';
import './App.css';

import { dataStore } from './data/dataStore';
import { Provider } from 'react-redux';
import { HttpHandler } from './data/httpHandler';
import { addProduct } from './data/actionCreators';
import { ConnectedProductList } from './data/productListConnector';
import { Switch, Route, Redirect, BrowserRouter, RouteComponentProps } from 'react-router-dom';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { Summary } from './components/Summary/Summary';


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

  submitCallback = (routeProps: RouteComponentProps) => {
    this.httpHandler.storeOrder(dataStore.getState().order, id => routeProps.history.push(`/summary/${id}`));
  }

  render() { 
    return (  
      <div className="App">
        <Provider store={dataStore}>
            <BrowserRouter>
              <Switch>

                <Route path="/products" component={ ConnectedProductList } />
                <Route path="/order" render={ (props) => <OrderDetails {...props} submitCallback={() => this.submitCallback(props)} />} />
                <Route path="/summary/:id" component={ Summary } />
                <Redirect to="/products" />

              </Switch>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}