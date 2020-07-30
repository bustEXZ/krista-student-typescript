import React from "react";
import { render } from "react-dom";
import MainComponent from "./MainComponent";

render(<MainComponent />, document.querySelector("#root"));

if ((module as any).hot) {
    (module as any).hot.accept()
}