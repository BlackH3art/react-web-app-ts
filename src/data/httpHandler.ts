import Axios from 'axios';
import { Product, Order } from './entities';

const protocol = 'http';
const hostname = 'localhost';
const port = 4600;

const urls = {
  products: `${protocol}://${hostname}:${port}/products`,
  orders: `${protocol}://${hostname}:${port}/orders`
  // products: "/api/products",
  // orders: "/api/orders"
};

export class HttpHandler {
  
  async loadProducts(callback: (products: Product[]) => void) {
    await Axios.get(urls.products).then(response => {

      return callback(response.data)
    });
  }

  storeOrder(order: Order, callback: (id: number) => void): void {
    let orderData = {
      lines: [...order.orderLines.values()].map(orderLine => ({
        productId: orderLine.product.id,
        productName: orderLine.product.name,
        quantity: orderLine.quantity
      }))
    }

    Axios.post(urls.orders, orderData).then(response => callback(response.data.id));
  }
}