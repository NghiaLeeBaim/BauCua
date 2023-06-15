import React from "react";
import XucXac from "./XucXac";
import { useSelector } from "react-redux";

export default function DanhSachXucXac(props) {
  const mangXucXac = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.mangXucXac
  );

  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white mt-2"
        style={{ width: "300px", height: "300px", borderRadius: "50%", marginLeft:'50px' }}
      >
        <div className="row">
          <div
            className="col-12 text-center "
            style={{ marginTop: "0px", marginLeft: "85px" }}
          >
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-right" style={{marginLeft:"60px", marginTop:"-30px"}}>
            <XucXac xucXacItem={mangXucXac[1]} />
          </div>
          <div className="col-4 text-right" style={{ marginTop:"-30px"}}>
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-success p-2" style={{ fontSize: "22px" }}>
          Xốc đĩa
        </button>
      </div>
    </div>
  );
}
