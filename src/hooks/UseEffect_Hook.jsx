import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [progress, setProgress] = useState(0);
  const time = 500;

  // useEffect = componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    console.log("Component mounted");
    let timer;

    // if (progress !== 100) {
    timer = setTimeout(() => {
      setProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        return Math.min(prev + 10, 100);
      });
    }, time);
    // }

    // Cleanup function
    if (progress === 100) {
      return () => {
        console.log("Component unmounted");
        clearInterval(timer);
      };
    }
  }, [progress]);

  return (
    <>
      <h1>useEffect</h1>
      <div style={{ width: "100%", height: "50px", backgroundColor: "grey" }}>
        <div
          style={{
            backgroundColor: "yellow",
            height: "50px",
            width: `${progress}%`,
            maxWidth: "100%",
            transition: `${time}ms linear`,
          }}
        >
          {progress}
        </div>
      </div>
    </>
  );
};

export default UseEffect;
