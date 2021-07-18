import { Component } from "react";
import { match } from "react-router";
import { NavLink } from "react-router-dom";

interface Params {
  id: string;
}

interface Props {
  match: match<Params>;
}
 
 
export class Summary extends Component<Props> {
  
  render() { 

    let id = this.props.match.params.id;

    return (  
      <div className="m-2 text.center">
        <h2>Dziękujemy!</h2>
        <p>Udało Ci się złożyć zamówienie.</p>
        <p>Numer zamówienia to: { id }</p>
        <p>Nie wyślemy zamówionych produktów bo to pic na wodę fotomontaż.</p>

        <NavLink to="/products" className="btn btn-primary">
          OK
        </NavLink>
      </div>
    );
  }
}
 