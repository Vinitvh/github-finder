import React from "react";
import spinner from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100">
      <img
        width={50}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading Spinner"
      />
    </div>
  );
}

export default Spinner;
