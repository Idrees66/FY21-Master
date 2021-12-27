import React from "react";

import "./ChatMessage.css";
const ChatMessage = ({ message }) => {
  var date = "";
  var formattedTime = "";
  if (message) {
    let unix_timestamp = message.date.seconds;

    date = new Date(unix_timestamp * 1000);

    var hours = date.getHours();

    var minutes = "0" + date.getMinutes();

    var seconds = "0" + date.getSeconds();

    formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  }
  const messageClass = message.sender === "admin" ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <p>{message.text}</p>
      <div className="date">
        {formattedTime.toString()} {date.toString()}
      </div>
    </div>
  );
};

export default ChatMessage;
