import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        const Data = await axios.get("/api/chat");
        setChats(Data.data);
    }
    useEffect(() => {
        fetchChats();
    }, [])
  return (
      <div>{chats.map(chat => <div>{chat.chatName }</div>)}</div>
  )
}

export default Chat