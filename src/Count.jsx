import React from "react"

const Count = (props) => {
  console.log(props.nbClicks)

  return (
    <div>
      {props.nbClicks}
    </div>
  );
}

export default Count