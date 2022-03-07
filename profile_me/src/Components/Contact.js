import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-5">ช่องทางติดต่อ</h1>
        <div className="group_linkContent">
          <div className="item_link">
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname:
                  "https://www.facebook.com/krerkpon.siriwatthanapaitoon/",
              }}
              target="_blank"
            >
              <i class="fab fa-facebook-square icon_size fa-2x" />
              <p>F:krerkpon Siriwutthanpaitoon</p>
            </Link>
          </div>
          <div className="item_link">
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "https://twitter.com/KrerkponS",
              }}
              target="_blank"
            >
              <i class="fab fa-twitter icon_size fa-2x"></i>
              <p>twitter:Krerkpon Siriwutthanpaitoon</p>
            </Link>
          </div>
          <div className="item_link">
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "https://github.com/TopkungO",
              }}
              target="_blank"
            >
              <i class="fab fa-github  icon_size fa-2x"></i>
              <p>Github:Krerkpon Siriwutthanpaitoon</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
