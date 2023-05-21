import "/src/index.css";
const ChatStripe = (isAi, value, uniqueId) => {
  return (
    <div className={"wrapper" + isAi && " ai"}>
      <div class="chat">
        <div class="profile">
          <img src={isAi ? bot : user} alt="${isAi ? 'bot' : 'user'}" />
        </div>
        <div class="message" id={uniqueId}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default ChatStripe;
