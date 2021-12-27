import { collection, doc, setDoc, updateDoc,Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import ChatMessage from "../chatMessage/ChatMessage";
import "./Chat.css";
import { orderBy } from "firebase/firestore";
const Chat = ({ reciver }) => {
  const [text, setText] = useState("");
  const [messages] = useCollectionData(
    collection(db, "messages", "admin", reciver.receiverId),
    { idField: "id" },
    orderBy("date", "desc")
  );


  const SendMessage = async (e) => {
    e.preventDefault();
    await setDoc(doc(collection(db, "messages", "admin", reciver.receiverId)), {
      text,
      type: "text",
      date: Timestamp.fromDate(new Date()),
      sender: "admin",
      receiver: reciver.receiverId,
    }).then((res) => console.log(res));
    await setDoc(doc(collection(db, "messages", reciver.receiverId, "admin")), {
      text,
      type: "text",
      date: Timestamp.fromDate(new Date()),
      sender: "admin",
      receiver: reciver.receiverId,
    }).then((res) => console.log(res));
    await updateDoc(
      doc(db, "messages", "admin", "contacts", reciver.receiverId),
      {
        text,
      }
    ).then((res) => console.log(res));
    await updateDoc(
      doc(db, "messages", reciver.receiverId, "contacts", "admin"),
      { text }
    ).then((res) => console.log(res));
  };

  if (messages) {
    messages.sort(
      (a, b) => parseFloat(a.date.seconds) - parseFloat(b.date.seconds)
    );
  }
  return (
    <>
    {/* <h1>Chat</h1> */}
    <div className="chat">
      
      <div className="chat-header" >{reciver.name.toUpperCase()}</div>
      <div className="conversation">
        {messages?.map((message) => 
          (<ChatMessage message={message}  />))}
      </div>
      <form onSubmit={SendMessage}>
        <input
          type="text"
          value={text}
          placeholder="Send New Message"
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={text === ""} type="Submite">
          Send
        </button>
      </form>
    </div>
    </>
  );
};

export default Chat;
