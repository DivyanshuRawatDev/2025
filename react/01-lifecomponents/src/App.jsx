// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Apis from "./components/Apis";

// function App() {
//   const [count, setCount] = useState(0);

//   return <>
//   {/* <Apis/> */}
//   </>;
// }

// export default App;


import React, { useState, useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped!");
    };
  }, []);

  return <div>Timer is running...</div>;
}

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;

