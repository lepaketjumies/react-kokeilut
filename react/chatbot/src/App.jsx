import React from "react";
import "../../completed/chatbot.css"
import {Chatbot} from "../../completed/chatbot-copy"

function ChatInput({chatMessages, setChatMessages}) {
  const [inputText , setInputText] = React.useState("");

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function sendMessage() {
    if (inputText.trim() === "") return; // optional: prevent sending empty messages

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);

    setInputText("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className = "user-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className = "user-input"
      />
      <button
        onClick={sendMessage}
        className = "send-button"
      >Send
      </button>
    </div>
  );
}

function ChatMessage({message, sender}) {
  return (
    <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" && (
        <img src="./robot.png" className="chat-message-image"/>
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && (
        <img src="./user.png" className="chat-message-image"/>
      )}
    </div>
  );
}

function ChatMessages({chatMessages}) {
  const chatMessagesRef = React.useRef(null);
  
  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message= {chatMessage.message}
            sender= {chatMessage.sender}
            key= {chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  const [chatMessages, setChatMessages] = React.useState([{
    message: "Hello", 
    sender: "user",
    id: "id1"
  },{
    message: "Hello. How can I help you?",
    sender: "robot",
    id: "id2"
  },{
    message: "What is today's date",
    sender: "user",
    id: "id3"
  },{
    message: "Today is September 30",
    sender: "robot",
    id: "id4"
  }]);

  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
