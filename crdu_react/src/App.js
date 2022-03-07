import "./App.css";
import React, { Component } from "react";
import FoodInput from "./components/FoodInput";
import FoodList from "./components/FoodList";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item,
    };

    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleDelete = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItem,
    });
  };

  handleEdit = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    const selectItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filterItem,
      item: selectItem.name,
      id: id,
      editItem: true,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <div className="container">
        <h2 align="center">Food Queue App</h2>

        <FoodInput
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          editItem={this.state.editItem}
        />

        <FoodList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
