import styled from "styled-components";
import { Button } from "../components/button/button.style";
import { Flex } from "../components/Flex/flex.style";
import { Input } from "../components/input/input.style";

export const ChatBox = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
`;

export const ChatHeader = styled(Flex)`
    height: 8%;
    justify-content: start;
    padding-left: 3%;
`;

export const Arrow = styled.img `
    width: 3%;
    cursor: pointer;
`;

export const SendMessageArea = styled.main`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;

    align-items: center;
`;

export const FEATURES = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
`;


export const InputMessage = styled(Input)`
    width: 50%;
    height: 70%;
    background:#F4F4F4;
    border: 1px solid #D6D6D6;
    font-size: 18px;
`;

export const ButtonSend =  styled(Button)`
    height: 60%;
`;

