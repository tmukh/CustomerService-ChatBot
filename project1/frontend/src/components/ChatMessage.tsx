import React from "react";
import { Fragment } from "react";

interface Props {
  msg:string,
  currDate:string
  question:boolean
}
const answerStyle = {
  width: "80%",
  height: "20px",
  marginLeft: "50px",
  marginTop: "50px",
  display: "inline"
};
const questionStyle = {
  width: "80%",
  height: "20px",
  marginLeft: "50px",
  marginTop: "50px",
  display: "inline"
};

function ChatMessage(props:Props) {
  
  if (props.msg === null || props.msg === "") {
    return <></>;
  }

  return (
    <div style={props.question ? answerStyle : questionStyle}>
      <p className="alert alert-dark">
        <div>
          {props.msg}
        </div>
        <div style={{ fontSize: "10px",position:"relative", float: "right" }}>
          {props.currDate}
        </div>
      </p>
    </div>
  );
}

export default ChatMessage;
