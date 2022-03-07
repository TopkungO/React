import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

import CardWorking from "./CardWorking";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        name: "เครื่องให้อาหารสัตว์เลี้ยง",
        content: "สามารถตั้งเวลาให้อาหารสัตว์เลี้ยงได้ ",
        img:
          "https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/27912782_1760478854002516_1964265270545239465_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH4v7XZ8MFJmo8bAcIrEMD8-2y__AQxROb7bL_8BDFE5qiZC9REa2j1Svttm3__5INcJhsNJpq30mRUBcXXTihW&_nc_ohc=yollzkm_SO4AX8BdKGP&_nc_ht=scontent.fbkk5-4.fna&oh=1dbb15699559871cecbce41442229ec5&oe=6071BFDD",
      },
      {
        name: "เว็บไซค์..",
        content: "สามารถเพิ่ม ลบ แก้ไข ข้อมูลได้ ",
        img:
          "https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/27912782_1760478854002516_1964265270545239465_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH4v7XZ8MFJmo8bAcIrEMD8-2y__AQxROb7bL_8BDFE5qiZC9REa2j1Svttm3__5INcJhsNJpq30mRUBcXXTihW&_nc_ohc=yollzkm_SO4AX8BdKGP&_nc_ht=scontent.fbkk5-4.fna&oh=1dbb15699559871cecbce41442229ec5&oe=6071BFDD",
      },
      {
        name: "เว็บไซค์..",
        content: "สามารถเพิ่ม ลบ แก้ไข ข้อมูลได้ ",
        img:
          "https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/27912782_1760478854002516_1964265270545239465_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH4v7XZ8MFJmo8bAcIrEMD8-2y__AQxROb7bL_8BDFE5qiZC9REa2j1Svttm3__5INcJhsNJpq30mRUBcXXTihW&_nc_ohc=yollzkm_SO4AX8BdKGP&_nc_ht=scontent.fbkk5-4.fna&oh=1dbb15699559871cecbce41442229ec5&oe=6071BFDD",
      },
    ];
  }

  work = () => {
    return this.state.map((res, i) => {
      return <CardWorking obj={res} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <div className="home">
          <ReactTypingEffect
            className="TypingEffect"
            text={[
              "สวัสดีครับ",
              "ผมชื่อ เกริกพล",
              "นี้เป็นผลงานที่ทำขึ้นเพื่อแนะนำตนเอง",
            ]}
            speed={80}
            eraseDelay={200}
          />
          <div>
            <img
              src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/27912782_1760478854002516_1964265270545239465_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH4v7XZ8MFJmo8bAcIrEMD8-2y__AQxROb7bL_8BDFE5qiZC9REa2j1Svttm3__5INcJhsNJpq30mRUBcXXTihW&_nc_ohc=yollzkm_SO4AX8BdKGP&_nc_ht=scontent.fbkk5-4.fna&oh=1dbb15699559871cecbce41442229ec5&oe=6071BFDD"
              alt=""
              className="img_portflio"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            minus aperiam voluptatibus qui expedita cumque? Praesentium ipsum a
            ea numquam excepturi eveniet non! Minus reiciendis porro
            exercitationem, ullam labore expedita.
          </p>
        </div>
        <div>
          <h1>ผลงาน</h1>
          <div className="work">{this.work()}</div>
        </div>
      </div>
    );
  }
}
