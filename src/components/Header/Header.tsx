import React, { Component } from 'react';
import { Order } from '../../data/entities';

export interface Props {
  order: Order
}

 
class Header extends Component<Props> {

  render() { 

    let count = this.props.order.productCount;

    return (  
      <div className="p-1 bg-secondary text-white text-right">
        { count === 0 ? '(brak produktów)' : `Liczba produktów: ${count}, Łącznie: ${this.props.order.total.toFixed(2)} zł`}
      </div>
    );
  }
}
 
export default Header;