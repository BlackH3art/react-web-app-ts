import React, { Component } from 'react';

export interface Props {
  selected: string;
  categories: string[];
  selectCategory: (category: string) => void;
}
 
class CategoryList extends Component<Props> {
  
  render() { 
    return ( 
      <div className="d-grid gap-1">
        { ["Wszystkie", ...this.props.categories].map(category => {
          let btnClass = this.props.selected === category ? "btn-primary" : "btn-secondary";

          return (
            <button key={category} className={`btn btn-block ${btnClass}`} onClick={() => this.props.selectCategory(category)}>
              {category}
            </button>
          );
        })}
      </div>
    );
  }
}
 
export default CategoryList;