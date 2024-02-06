import React, { useState } from "react";


function MessageBoard() {
  // State สำหรับ store messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello all! This is the first message." }
  ]);
  // State เพื่อ store the input text value
  const [inputText, setInputText] = useState("");

  // Function เพื่อ handle input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function เพื่อ handle message submission
  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: Math.floor(Math.random() * 1000), // สร้าง unique ID
        text: inputText
      };
      setMessages([...messages, newMessage]);
      setInputText(""); // Clear input field
    }
  };

  // Function เพื่อ handle message deletion
  const handleDelete = (id) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputText}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <h1>{message.text}</h1>
            <button className="delete-button" onClick={() => handleDelete(message.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
