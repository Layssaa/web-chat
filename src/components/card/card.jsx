import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../context/context-provider";
import {
  CardBox,
  CardBoxCategory,
  CategoryName,
  DateMessage,
  FooterMessage,
  HourMessage,
  Name,
  SessionCategory,
  Text,
} from "./card.style";

export const Card = (props) => {
  const { messages } = useContext(MyContext);

  const chatBox = useRef();

  const scrollToBottom = () => {
    chatBox.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <CardBox ref={chatBox} type={props.type}>
      <Name type={props.type}>
        {props.type === "first" ? "You" : props.data.name}
      </Name>
      <Text>{props.data.msg}</Text>
      <FooterMessage type={props.type}>
        <HourMessage>{props.data.hour}</HourMessage>
      </FooterMessage>
    </CardBox>
  );
};

export const CardCategory = ({ categories, onclick }) => {

  const handleCategory = (_channel) => {
    onclick(_channel);
  };

  return (
    <SessionCategory>
      {categories.map((about, i) => {
        return (
          <CardBoxCategory
            key={i}
            onClick={() => {
              handleCategory(about.channel);
            }}
          >
            <CategoryName
              onClick={() => {
                handleCategory(about.channel);
              }}
            >
              {about.name}
            </CategoryName>
          </CardBoxCategory>
        );
      })}
    </SessionCategory>
  );
};
