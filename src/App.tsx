import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";

function App() {
  return (
    <>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
    </>
  );
}

export default App;
