import { Component } from 'react';
import { StoreData } from '../../data/types';
import { Order } from '../../data/entities';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const mapStateToProps = (data: StoreData) => ({
  order: data.order
});

const connectFunction = connect(mapStateToProps);

interface Props {
  order: Order,
  submitCallback: () => void
}
 
export const OrderDetails = connectFunction(
  class extends Component<Props> {

    render() {
      return (
        <div>
          <h3 className="text-center bg-primary text-white p-2">
          Informacje o zamówieniu
          </h3>

          <div className="p-3">
            <table className="table table-sm table-striped">
              <thead>
                <tr>
                  <th >Ilość</th><th>Produkt</th>
                  <th >Cena</th>
                  <th >Wartość</th>
                </tr>
              </thead>

              <tbody>
                {this.props.order.orderLines.map(line => (
                  <tr>
                    <td> {line.quantity} </td>
                    <td> {line.product.name} </td>
                    <td> {line.product.price.toFixed(2)} zł </td>
                    <td> {line.total.toFixed(2)} </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <th className="text-right" colSpan={3}> Razem: </th>
                  <th className="text-right"> {this.props.order.total.toFixed(2)} zł </th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="text-center">
            <NavLink to="/products" className="btn btn-secondary m-1" >Wróć</NavLink>
            <button className="btn btn-primary m-1" onClick={this.props.submitCallback}>Złóż zamówienie</button>
          </div>

        </div>
      )
    }
  }
)