import { Card } from "../card/card";
import { MessagesArea } from "./message-area.style";

export const Messages = ({ messages, user }) => {
  const switchType = (msg) => {
    if (msg.name === user) return "first";
    if (msg.name === "server") return "thirty";
    return "second";
  };
  return (
    <MessagesArea>
      {messages.map((msg, _i) => {
        return <Card data={msg} key={_i} type={switchType(msg)} />;
      })}
    </MessagesArea>
  );
};
