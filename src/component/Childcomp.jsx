import { useEffect } from "react";

const ChildComp = ({ childFunc }) => {
  console.log("child comp rendering ....");
  useEffect(() => {
    childFunc();
  }, [childFunc]);
  return (
    <div className="container">
      <p className="lead">Child comp</p>
    </div>
  );
};

export default ChildComp;
