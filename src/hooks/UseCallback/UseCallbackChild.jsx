import React, { memo } from "react";

const UseCallbackChild = () => {
  console.log("Child render");

  return (
    <>
      <h2>UseCallbackChild</h2>
      <p>Nothing here</p>
    </>
  );
};

export default memo(UseCallbackChild);
