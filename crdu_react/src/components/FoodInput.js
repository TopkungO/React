import React, { Component } from "react";

export default class FoodInput extends Component {
  render() {
    const { handleSubmit, item, handleChange, editItem } = this.props;
    return (
      <div className="card card-boby">
        <form className="m-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ป้อนรายการอาหาร</label>
            <input
              type="text"
              className="form-control"
              value={item}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value={editItem ? "แก้ไขรายการ" : "บันทึกรายการ"}
            className={editItem ? "btn btn-primary" : "btn btn-success"}
            disabled={item ? false : true}
          />
        </form>
      </div>
    );
  }
}
