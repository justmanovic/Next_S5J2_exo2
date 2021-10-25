import React from "react"
import Color from "./Color"

const Colors = (props) => {
  const colorList = ["red", "blue", "green", "yellow"]
  const [clickedColor, setColor] = React.useState("red")

  const changeColor = (newColor) => {
    setColor(newColor)
  }

  return (
    <div>
      <div class="ui link cards">
          {colorList.map((color, index) => {
            return <Color color={color} key={index} onClick={changeColor}/>
          })}
      </div>
      <div>
        Last color clicked is {clickedColor}
      </div>
    </div>
  );
}



export default Colors