import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallback = () => {
  console.log("Parent render");

  const [number, setNumber] = useState(0);

  const addition = useCallback(function (a, b) {
    return a + b;
  }, []);

  return (
    <>
      <h1>UseCallback</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
      <h3>{number}</h3>
      <hr />

      {/* Passing `add` prop to Child Component */}
      <UseCallbackChild add={addition} />
    </>
  );
};

export default UseCallback;
