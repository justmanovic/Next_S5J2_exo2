import React from "react"
import ReactDOM from "react-dom"
import Colors from "./Colors"
import 'semantic-ui-css/semantic.min.css'
import "./style.css"

const App = () => {
  return (
    <Colors />
  );
}

ReactDOM.render(<App />, document.querySelector("#root"))

