import React, { useRef } from "react";

export default function App() {
  const childRef = useRef(null);

  return (
    <div className="m-5">
      <input
        id="inputBox"
        className="form-control"
        placeholder="Please Enter Value"
      />

      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          childRef.current.value = 100;
        }}
      >
        Change The Value
      </button>

      <Hello myRef={childRef} />
    </div>
  );
}

const Hello = ({ myRef }) => {
  const name = "haresh";
  const age = 20;

  const getMyName = () => {
    alert(name);
  };

  return (
    <div className="mt-5">
      <input placeholder="Hello" disabled ref={myRef} />
      <h1>Hello World</h1>
    </div>
  );
};
