import ChatMessage from "./ChatMessage";
import React from "react";
import { Fragment } from "react";

// Move Style to Css file when done debugging
const chatStyle = {
  height: "918px",
  overflow: "scroll"
}

function Chat() {
  // Example chat m,essages to disaply for debugging display
  let chat1 = {msg:"Hello mf", currDate:"08:00", question:true}
  let chat2 = {msg:"Hello mf1", currDate:"08:00", question:false}
  let chat3 = {msg:"Hello mf2", currDate:"08:00", question:true}
  let chat4 = {msg:"Hello mf3", currDate:"08:00", question:false}
  let chat5 = {msg:"Hello mf4", currDate:"09:00", question:true}
  let chats = [chat1,chat2,chat3,chat4,chat5]

  // Maps each chat Message to a componenet ChatMessage with its corrosponding display
  let chatFinal=chats.map(chat => <ChatMessage msg={chat.msg} currDate={chat.currDate} question={chat.question} />)

  // Finalizes the div by adding all the messages
  return <div style={chatStyle}>{chatFinal}</div>;
}

export default Chat;
