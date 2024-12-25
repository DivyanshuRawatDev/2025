import React, { useEffect } from "react";

const Apis = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("running");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);
  return <div></div>;
};

export default Apis;
