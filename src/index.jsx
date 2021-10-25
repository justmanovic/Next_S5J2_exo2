import React from "react"
import ReactDOM from "react-dom"
import Counter from "./Counter"
import 'semantic-ui-css/semantic.min.css'
import "./style.css"

const App = () => {
  return (
    <Counter />
  );
}

ReactDOM.render(<App />, document.querySelector("#root"))

