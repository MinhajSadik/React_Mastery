import React from "react";
import withCounter from "./withCounter";

const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} Time
      </button>
    </div>
  );
};

export default withCounter(Counter);
