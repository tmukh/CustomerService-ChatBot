import ChatMessage from "./ChatMessage";
import React from "react";
import { Fragment } from "react";
const chatStyle = {
  height: "918px",
  overflow: "scroll"
}
function Chat() {
  let chat1 = {msg:"Hello mf", currDate:"08:00", question:true}
  let chat2 = {msg:"Hello mf1", currDate:"08:00", question:false}
  let chat3 = {msg:"Hello mf2", currDate:"08:00", question:true}
  let chat4 = {msg:"Hello mf3", currDate:"08:00", question:false}
  let chat5 = {msg:"Hello mf4", currDate:"09:00", question:true}
  let chats = [chat1,chat2,chat3,chat4,chat5]
  let chatFinal=chats.map(chat => <ChatMessage msg={chat.msg} currDate={chat.currDate} question={chat.question} />)
  return <div style={chatStyle}>{chatFinal}</div>;
}

export default Chat;
