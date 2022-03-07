import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  hamdleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editting: false,
    };

    this.props.dispatch({
      type: "ADD_POST",
      data,
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.hamdleSubmit}>
          <input
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter post title"
            required
          />
          <br />
          <br />
          <textarea
            cols="30"
            rows="5"
            ref={(input) => (this.getMessage = input)}
            placeholder="enter post "
            required
          />

          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
