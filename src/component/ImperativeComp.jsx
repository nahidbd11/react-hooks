import React, { forwardRef, useContext, useState } from "react";
import { useImperativeHandle, useRef } from "react/cjs/react.development";
import { Context } from "../context/Context";

const ImpertativeComp = (props, ref) => {
  console.log(ref);
  console.log("rendering child");
  const childRef = useRef(null);
  const { userName } = useContext(Context);
  const [text, setText] = useState("hellow");
  useImperativeHandle(ref, () => ({
    changeText() {
      setTimeout(() => {
        childRef.current.textContent = "hellow from imperative";
        console.log("running from child");
      }, 3000);
    },
    changeImpState() {
      setText("Nahid");
    },
  }));
  return (
    <div>
      <p className="text-muted" ref={childRef}>
        text will change after 3s and it is controlling from app to imperative
        handle
      </p>
      <p className="text-danger">
        {text} {userName}
      </p>
    
    </div>
  );
};

export default forwardRef(ImpertativeComp);
