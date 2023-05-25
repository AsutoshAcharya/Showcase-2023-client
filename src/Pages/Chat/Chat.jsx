import "/src/index.css";
import React, { useState } from "react";

import ChatStripe from "./ChatStripe";
import { Button } from "@mui/material";
const Chat = () => {
  const [chatList, setChatlist] = useState([]);
  const [message, setMessage] = useState("");
  function loader(element) {
    element.textContent = "";

    loadInterval = setInterval(() => {
      // Update the text content of the loading indicator
      element.textContent += ".";

      // If the loading indicator has reached three dots, reset it
      if (element.textContent === "....") {
        element.textContent = "";
      }
    }, 300);
  }

  // function typeText(element, text) {
  //   let index = 0;

  //   let interval = setInterval(() => {
  //     if (index < text.length) {
  //       element.innerHTML += text.charAt(index);
  //       index++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 20);
  // }

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  const handleSubmit = async (e) => {
    if (message.length === 0) return;
    const chatContainer = document.querySelector("#chat_container");
    e.preventDefault();
    setChatlist([
      ...chatList,
      {
        isAi: false,
        chat: message,
        uniqueId: generateUniqueId(),
      },
    ]);
    setMessage("");
    const uniqueId = generateUniqueId();
    // setChatlist([
    //   ...chatList,
    //   {
    //     isAi: true,
    //     chat: "",
    //     uniqueId: uniqueId,
    //   },
    // ]);
    // chatContainer.scrollTop = chatContainer.scrollHeight;
    // const messageDiv = document.getElementById(uniqueId);
    // loader(messageDiv);
    //https://weary-rugby-shirt-newt.cyclic.app/chat
    //http://localhost:8800/chat
    const response = await fetch(
      "https://weary-rugby-shirt-newt.cyclic.app/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: message,
        }),
      }
    );

    // clearInterval(loadInterval)
    // messageDiv.innerHTML = " "

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim(); // trims any trailing spaces/'\n'

      // typeText(messageDiv, parsedData)
      setChatlist((prev) => [
        ...prev,
        {
          isAi: true,
          chat: parsedData,
          uniqueId: uniqueId,
        },
      ]);
    } else {
      const err = await response.text();

      // messageDiv.innerHTML = "Something went wrong"
      alert(err);
    }
  };
  return (
    <div id="app">
      <div id="chat_container">
        {chatList !== 0 &&
          chatList.map((c) => (
            <ChatStripe
              key={c.uniqueId}
              isAi={c.isAi}
              value={c.chat}
              uniqueId={c.uniqueId}
            />
          ))}
      </div>
      <form className="form">
        <textarea
          className="ta"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          //   name="prompt"
          rows="1"
          cols="1"
          placeholder="Chat with recruiter"
        ></textarea>
        <Button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          variant="contained"
        >
          send
        </Button>
      </form>
    </div>
  );
};

export default Chat;
