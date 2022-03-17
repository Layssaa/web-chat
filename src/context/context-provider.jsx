import { createContext, useEffect, useState } from "react";
import sound from "../assets/sounds/notify.wav";

export const MyContext = createContext({});

let wsConnect;

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [channel, setChannel] = useState("");
  const soundNotify = new Audio(sound);

  const saveUserName = (_name) => {
    setUser(_name);
  };

  // wsConnect.onclose = function(event){
  //   console.log(event);
  // }

  const connectChat = () => {
    const switchChannel = {
      channel1: "wss://localhost:3030/channel1",
      channel2: "wss://localhost:3030/channel2",
    };

    console.log("switch and connect");
    console.log(switchChannel[channel]);

    wsConnect = new WebSocket(switchChannel[channel]);

    wsConnect.onopen = function (event) {
      wsConnect.send(JSON.stringify({ name: user, msg: "connect" }));
    };

    wsConnect.onmessage = function (res) {
      soundNotify.play();
      return setMessages((prevState) => prevState.concat(JSON.parse(res.data)));
    };
  };

  const disconnectChat = async () => {
    wsConnect.send(JSON.stringify({ name: user, msg: "disconnect" }));
    wsConnect.close();
    saveUserName("");
    return;
  };

  const sendMessage = (_message) => {
    wsConnect.send(JSON.stringify({ name: user, msg: _message }));
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <MyContext.Provider
      value={{
        user,
        saveUserName,
        sendMessage,
        messages,
        connectChat,
        disconnectChat,
        setChannel,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
