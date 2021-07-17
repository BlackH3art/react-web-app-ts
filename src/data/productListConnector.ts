import { StoreData } from './types';
import { modifyOrder } from './actionCreators';
import { connect } from 'react-redux';
import { ProductList } from '../components/ProductList/ProductList';

const mapStateToProps = (data: StoreData) => {

  return ({
    products: data.products,
    categories: [...new Set(data.products?.map(product => product.category))],
    order: data.order
  });
}


const mapDispatchToProps = {
  addToOrder: modifyOrder
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedProductList = connectFunction(ProductList);