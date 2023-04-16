import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";

const textStyle = {
  width: "80%",
  height: "50px",
  padding: "12px 20px",
  boxsizing: "border-box",
  border: "2px solid #ccc",
  borderradius: "4px",
  backgroundcolor: "#f8f8f8",
  fontsize: "16px",
  display: "inline"
}
const buttonStyle = {
  width: "20%",
  backgroundcolor: "#ffffff",
  color: "black",
  padding: "12px 20px",
  border:"none",
  cursor: "pointer",
  opacity: "0.8",
  display: "inline"
}
function TextArea() {
  const [message,setMessage] = useState('');

  function addMessage(text:string, time:string, question:boolean) {
    
  }

  const handleMessageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  function handleClick() {
    let curr = new Date()
    addMessage(message, curr.getHours().toString(), true);
    axios({
      method: "POST",
      url: "/sendmsg/",
      data: {
        titties: "question",
        content: message,
      },
    }).then((response) => {
      let curr = new Date()
      addMessage(response.toString(), curr.getHours().toString(), true);
    });
  }
  return <><form><input style={textStyle} value={message} onChange={handleMessageChange}></input><button type="submit" style={buttonStyle} onClick={handleClick}>Send</button></form></>;
}

export default TextArea;