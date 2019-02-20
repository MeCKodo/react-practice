import React, { useState } from "react";

function HookWithString() {
  const [string, setString] = useState("abcde");

  return (
    <div>
      <p>Render string is {string} </p>
      <button onClick={() => setString("zxcvb")}>Click me</button>
    </div>
  );
}

const Wrapper = React.memo(() => {
  return (
    <div>
      <HookWithString />
    </div>
  );
});

export default Wrapper;
