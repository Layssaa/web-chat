import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/context-provider";
import { Button } from "../button/button.style";
import { CardCategory } from "../card/card";
import { Input } from "../input/input.style";
import { FormStyle, P, Strong } from "./form.style";

export const Form = () => {
  const { saveUserName, connectChat, setChannel } = useContext(MyContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const channels = [
    { name: "Filmes", channel: "channel1" },
    { name: "Jogos", channel: "channel2" },
  ];

  const takeValueInput = (_message) => {
    setUsername(_message);
  };

  const goPage = (_channel) => {
    if (username === "") return;
    saveUserName(username);
    setChannel(_channel);
    navigate("/chat");
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      goPage();
    }
  };

  return (
    <FormStyle direction="column">
      <P>
        Informe seu <Strong>NOME de usuário</Strong> e escolha um{" "}
        <Strong>canal</Strong>
      </P>
      <Input
        type="text"
        onChange={(event) => takeValueInput(event.target.value)}
        onKeyDown={onKeyDown}
      />
      {/* <Button onClick={goPage} type="submit">
        Entrar
      </Button> */}
      <CardCategory categories={channels} onclick={goPage} />
    </FormStyle>
  );
};
