import React from "react";
import loading from '../../images/Ripple-1s-221px.gif'

const Loading = () => {
  return (
    <div style={{ height: "700px" }}
      className="w-full flex aligns-center justify-center"
    >
      <div className="flex justify-center items-center space-x-2">
        <div
          className=""
          role="status"
        >
          <img alt="" src={loading} />
        </div>
      </div>
    </div>
  );
};

export default Loading;