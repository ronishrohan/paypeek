import React from "react";
import { icons } from "./utils/icons";
function loading() {
  return (
    <>
      <div id="loading-screen">
        
        <div className="spinning">{icons.loading}</div>
        <div id="loading-text">loading</div>
      </div>
    </>
  );
}

export default loading;
