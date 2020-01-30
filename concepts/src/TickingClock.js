import React from "react";

function TickingClock() {
  return <div>The time now is {new Date().toLocaleTimeString()}</div>;
}

export default TickingClock;
