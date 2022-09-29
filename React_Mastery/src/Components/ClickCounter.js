import React from "react";

export default function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Click {count} Me
      </button>
    </div>
  );
}
