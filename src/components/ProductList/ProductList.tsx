import React, { Component } from 'react';
import Header from '../Header/Header';
import ProductItem from '../ProductItem/ProductItem';
import CategoryList from '../CategoryList/CategoryList';
import { Order, Product } from '../../data/entities';


export interface Props {
  products: Product[];
  categories: string[];
  order: Order;
  addToOrder: (product: Product, quantity: number) => void;
}
 
export interface State {
  selectedCategory: string;
}
 
export class ProductList extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "Wszystkie"
    }
  }

  get products(): Product[] {
    return this.props.products.filter(product => this.state.selectedCategory === "Wszystkie" || product.category === this.state.selectedCategory);
  }

  selectCategory = (category: string) => {
    this.setState({ selectedCategory: category});
  }

  render() { 

    return (  
      <div>

        <Header order={this.props.order} />

        <div className="container-fluid">
          <div className="row">
            
            <div className="col-3 p-2">
              <CategoryList 
                categories={this.props.categories} 
                selected={this.state.selectedCategory}
                selectCategory={this.selectCategory}
              />
            </div>

            <div className="col-9 p-2">
              {this.props.products.map(product => ( // this.products w książce
                <ProductItem key={product.id} product={product} callback={this.props.addToOrder} />
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  }
}