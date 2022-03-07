import React, { Component } from "react";

export default class FoodItem extends Component {
  render() {
    const { name, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{name}</h6>
        <div>
          <span className="mx-3 text-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
          </span>
          <span className="text-danger" onClick={handleDelete}>
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </li>
    );
  }
}
