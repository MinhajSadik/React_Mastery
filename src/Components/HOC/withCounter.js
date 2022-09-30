import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return <WrappedComponent count={count} incrementCount={incrementCount} />;
  };
  return NewComponent;
};

export default withCounter;
