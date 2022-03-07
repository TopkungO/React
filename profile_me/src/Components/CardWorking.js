import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class CardWorking extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Header>{this.props.obj.name}</Card.Header>
          <Card.Img variant="top" src={this.props.obj.img} />
          <Card.Body>
            <Card.Text>{this.props.obj.content}</Card.Text>
            <Button variant="primary">ดูผลงาน</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
