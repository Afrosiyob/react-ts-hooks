import React, { useContext } from "react";
import { AuthContext } from "../context/context";

const UseContextComponent = () => {
  const context = useContext(AuthContext);

  console.log(context);

  return <div>this is usecontext</div>;
};

export default UseContextComponent;
