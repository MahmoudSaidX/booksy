import React from "react";
import "./widget.css";

function Widget() {
  return (
    <div className="widget">
      <i className="fa fa-heart-o" aria-hidden="true"></i>
      <div className="count">0</div>
      <div className="lang">EN</div>
    </div>
  );
}

export default Widget;
