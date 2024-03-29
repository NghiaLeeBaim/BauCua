import React from "react";
import DiemCuoc from "./DiemCuoc";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import './BaiTapGameBauCua.css'

export default function BaiTapGameBauCua() {
  return (
    <div id="BaiTapGameBauCua" className="container-fluid" style={{margin:"0"}}>
      <DiemCuoc />
      <div className="row">
        <div className="col-7">
          <DanhSachCuoc />
        </div>
        <div className="col-4"> 
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
}
