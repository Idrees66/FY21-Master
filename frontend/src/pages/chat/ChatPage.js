import { collection, doc } from "firebase/firestore";
import React, { useState,useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import "./ChatPage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "../../Components/Chat/Chat"

const ChatPage = ( ) => {
  const [contacts, setContacts] = useState(null);
  // const [searchKey, setsearchKey] = useState("")
 

  const [recivers] = useCollectionData(
    collection(db, "messages", "admin", "contacts")
  );
  const [datum, setdatum] = useState(null)
  const [allData, setallData] = useState(null)

  useEffect(() => {
    // console.log("Check: ",recivers)
    // console.log("Check: ",searchKey)
    setdatum(recivers)
    setallData(recivers)
  }, [recivers])


  function _search(text){
    console.log(text, "seraching..")
    var dataArray= [];
    const temp = datum;
    // const low = text.toLowerCase()
    // const heigh = text.toUpperCase()
    // const all = allUsers;
    temp.map((value)=>{
        // if ((value.name.indexOf(low) > -1) || (value.name.indexOf(heigh) > -1) ){
        if (value.name.indexOf(text) > -1 ){

            dataArray.push(value);    
        }
      setdatum(dataArray)

    });
    if(text===""){
  
      setdatum(allData)
     
    }
}

  return (
    <div className="chatpage">

       <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" onChange={(e)=>_search(e.target.value)}  placeholder="Search" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search" color="green" ></i>
     </button>
   </div>
</div>

      <div className="body">
       
        { datum ? (
          <div className="users">
            {datum.map((reciver) => (
              <div
                className={`user_data ${
                  reciver?.receiverId === contacts?.receiverId ? "active" : ""
                }`}
                onClick={() => setContacts(reciver)}
              >
                {reciver.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="users">NO MESSAGE</div>
        )}
        {contacts  ? (
          <div className="chats">
            <Chat reciver={contacts}  />
          </div>
        ) : (
          <div className="chats">NO MESSAGE</div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
