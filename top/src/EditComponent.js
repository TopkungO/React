import React, { Component } from "react";

import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };

  render() {
    return (
      <div className="post">
        <form onSubmit={this.handleEdit} className="form">
          <input
            type="text"
            ref={(input) => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Enter post title"
            required
          />
          <br />
          <br />
          <textarea
            cols="30"
            rows="5"
            ref={(input) => (this.getMessage = input)}
            defaultValue={this.props.post.message}
            placeholder="enter post "
            required
          />

          <br />
          <br />
          <button>UpDate</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
