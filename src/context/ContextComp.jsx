import { useState } from "react";
import { Context } from "./Context";

const ContextComp = (props) => {
  const [helloText, setHelloText] = useState("hi");
  const [userName, setUsername] = useState("Nahid");
  return (
    <Context.Provider
      value={{
        helloText,
        userName,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextComp;
