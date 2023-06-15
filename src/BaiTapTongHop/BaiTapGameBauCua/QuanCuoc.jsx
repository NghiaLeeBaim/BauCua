import React from "react";
import { useDispatch } from "react-redux";

export default function QuanCuoc(props) {
  const dispatch = useDispatch();

  const { quanCuoc } = props;

  return (
    <div className="mt-3 text-center">
      <img src={quanCuoc.hinhAnh} style={{ width: "80%" }} />
      <div
        className="bg-success mt-2"
        style={{ borderRadius: "15px", paddingBottom: "-0,20rem" }}
      >
        <button
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger m-2"
          style={{ borderRadius: "10px", fontSize: "20px" }}
        >
          -
        </button>
        <span className="m-2" style={{ color: "yellow", fontSize: "23px" }}>
          {quanCuoc.diemCuoc}$
        </span>
        <button
          onClick={() =>{
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger"
          style={{ borderRadius: "10px", fontSize: "20px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
