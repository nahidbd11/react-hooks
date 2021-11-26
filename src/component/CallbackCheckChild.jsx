import React from "react";
function CallbackCheckChild({ passToChild }) {
  console.log("rendering callback child");
  return (
    <>
      <p className="lead">rendering callback child</p>
    </>
  );
}

export default React.memo(CallbackCheckChild);
