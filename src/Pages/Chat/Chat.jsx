import "/src/index.css";
import React from "react";
import bor from "/src/assets/bot.svg";
import user from "/src/assets/user.svg";

const Chat = () => {
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

  function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }
  return (
    <div id="app">
      <div id="chat_container"></div>
      <form className="form">
        <textarea
          className="ta"
          //   name="prompt"
          rows="1"
          cols="1"
          placeholder="Chat with recruiter"
        ></textarea>
        <button type="submit" className="btn">
          <img src="/src/assets/send.svg" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
