import {
  Arrow,
  ButtonSend,
  ChatBox,
  ChatHeader,
  FEATURES,
  InputMessage,
  SendMessageArea,
} from "./chat.style";
import arrow from "../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";
import { Messages } from "../components/MessageArea/message-area";
import { useContext, useState } from "react";
import { MyContext } from "../context/context-provider";
import { useEffect } from "react";

export const ChatPage = () => {
  const {
    sendMessage,
    messages,
    user,
    connectChat,
    disconnectChat,
    saveUserName,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [chatMessage, setNewChatMessage] = useState("");

  useEffect(() => {
    connectChat();
  }, []);

  const takeValueInput = (_message) => {
    console.log("digitando...");
    setNewChatMessage(_message);
  };

  const goPage = async () => {
    await disconnectChat();
    navigate("/");
  };

  const toSend = () => {
    if (chatMessage === "") return;
    sendMessage(chatMessage);
    setNewChatMessage("");
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      toSend();
    }
  };

  return (
    <ChatBox>
      <ChatHeader>
        <Arrow src={arrow} onClick={goPage} />
      </ChatHeader>
      <Messages messages={messages} user={user} />
      <SendMessageArea>
        <FEATURES />
        <InputMessage
          value={chatMessage}
          onChange={(event) => takeValueInput(event.target.value)}
          onKeyDown={onKeyDown}
        />
        <ButtonSend onClick={toSend} type="submit">
          send
        </ButtonSend>
      </SendMessageArea>
    </ChatBox>
  );
};
