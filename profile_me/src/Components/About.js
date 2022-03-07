import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="group_about">
        <div>
          <h1 className="text-right">ข้อมูลส่วนตัว</h1>
          <div className="item_about">
            <div className="img_profile">
              <img
                src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.0-8/27912782_1760478854002516_1964265270545239465_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH4v7XZ8MFJmo8bAcIrEMD8-2y__AQxROb7bL_8BDFE5qiZC9REa2j1Svttm3__5INcJhsNJpq30mRUBcXXTihW&_nc_ohc=yollzkm_SO4AX8BdKGP&_nc_ht=scontent.fbkk5-4.fna&oh=1dbb15699559871cecbce41442229ec5&oe=6071BFDD"
                alt="sd"
              />
            </div>
            <div className="story">
              <p>ชื่อ นายเกริกพล ศิริวัฒนไพฑูรย์ ชื่อเล่น Top</p>
              <p>วันเกิด 17/01/40 อายุ24 ปี</p>
              <p>สัญชาติไทย เชื้อชาติไทย ศาสนาพุทธ กรุ๊ปเลือด B</p>
              <p>งานอดิเรก ดูหนัง ฟังเพลง เล่นเกม </p>
              <p>กีฬาที่ชอบ ว่ายน้ำ แบตมินตัน ปิงปอง</p>
              <p>คติประจำใจ ....</p>
            </div>
          </div>
        </div>

        <div className="family_Education">
          <div className="family group_fe">
            <h1 className="text-center">ข้อมูลครอบครัว</h1>
            <p>พ่อชื่อ นาย วานิช ศิริวัฒนไพฑูรย์ อาชีพ ค้าขาย</p>
            <p>แม่ชื่อ นาง อุทัยวรรณ ศิริวัฒนไพฑูรย์ อาชีพ ค้าขาย</p>
            <p>มีน้อง 2 คน </p>
          </div>
          <div className="education group_fe">
            <h1 className="text-center">ข้อมูลการศึกษา</h1>
            <p>สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฎนครศรีธรรมราช</p>
            <p>ปลายจาก โรงเรียน ช้างกลางประชานุกูล สายวิทย์-คณิต</p>
          </div>
        </div>
      </div>
    );
  }
}
