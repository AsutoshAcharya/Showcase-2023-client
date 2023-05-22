import "/src/index.css";
import bot from "/src/assets/bot.svg";
import user from "/src/assets/user.svg";
const ChatStripe = ({ isAi, value, uniqueId }) => {
  return (
    <div className={"wrapper" + isAi && " ai"}>
      <div className="chat">
        <div className="profile">
          <img src={isAi ? bot : user} alt="${isAi ? 'bot' : 'user'}" />
        </div>
        <div className="message" id={uniqueId}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default ChatStripe;
