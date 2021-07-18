import { Component } from 'react';
import { Order } from '../../data/entities';
import { NavLink } from 'react-router-dom';

export interface Props {
  order: Order
}

 
class Header extends Component<Props> {

  render() { 

    let count = this.props.order.productCount;

    return (  
      <div className="p-1 bg-secondary text-white text-right">
        { count === 0 ? '(brak produktów)' : `Liczba produktów: ${count}, Łącznie: ${this.props.order.total.toFixed(2)} zł`}
        <NavLink to="/order" className="btn btn-sm btn-primary m-1">
          Złóż zamówienie
        </NavLink>
      </div>
    );
  }
}
 
export default Header;