import * as React from "react";
import * as ReactDOM from "react-dom";

class MyFirstSampleClass extends React.Component {
  render() {
    return <h1>Hello Work!</h1>;
  }
}

if (document.querySelector("#root")) {
  ReactDOM.render(<MyFirstSampleClass />, document.querySelector(
    "#root"
  ) as HTMLElement);
}
console.log("Hello World from your main file!");
