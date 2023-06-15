import React, { Fragment } from "react";

export default function XucXac(props) {
  let { xucXacItem } = props;

  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img className="ml-3 cube__face front" style={{width:'50px'}} src={xucXacItem.hinhAnh}/>
          <img className="ml-3 cube__face back" style={{width:'50px'}} src="./assets/bau.png"/>
          <img className="ml-3 cube__face left" style={{width:'50px'}} src="./assets/ga.png"/>
          <img className="ml-3 cube__face right" style={{width:'50px'}} src="./assets/ca.png"/>
          <img className="ml-3 cube__face top" style={{width:'50px'}} src="./assets/tom.png"/>
          <img className="ml-3 cube__face bottom" style={{width:'50px'}} src="./assets/nai"/>
        </div>
      </div>
    </Fragment>
  );
}
