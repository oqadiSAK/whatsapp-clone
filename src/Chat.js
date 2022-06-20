import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";
import "./Chat.css";

import MicIcon from "@mui/icons-material/Mic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://avatars.dicebear.com/api/avataaars/123.svg" />
        <div className="chat_header_info">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Arda</span>
          Hey Guys
          <span className="chat_timestamp">3:52</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Arda</span>
          Hey Guys
        </p>
        <p className="chat_message">
          <span className="chat_name">Arda</span>
          Hey Guys
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form action="">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Send a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}
export default Chat;
