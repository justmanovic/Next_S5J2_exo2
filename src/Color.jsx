import React from "react"
import 'semantic-ui-css/semantic.min.css'

const Color = (props) => {
  const classDiv = props.color+" block"

  return (
      <div class="ui card" onClick={() => props.onClick(props.color)}>
        <div class="content">
          <div class="right floated meta">14h</div>
          <img class="ui avatar image" src="/images/avatar/large/elliot.jpg"/> Elliot
        </div>
        <div class="image">
          <div className = {classDiv}></div>
        </div>
        <div class="content">
          <span class="right floated">
            <i class="heart outline like icon"></i>
            17 likes
          </span>
          <i class="comment icon"></i>
          3 comments
        </div>
        <div class="extra content">
          <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."/>
          </div>
        </div>
      </div>
  );
}

export default Color