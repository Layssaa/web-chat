import styled from "styled-components";

export const CardBox = styled.div`
  width: fit-content;
  max-width: 45%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  overflow-wrap: anywhere;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background: ${(props) => GETcolorCard(props.type).background};
  box-shadow: -10px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1%;

  text-align: ${(props) => (props.type === "first" ? "right" : "left")};

  align-self: ${(props) =>
    props.type === "first" ? "flex-end" : "flex-start"};

  flex-wrap: nowrap;
`;

export const Name = styled.span`
  font-size: 15px;
  color: ${(props) => GETcolorCard(props.type).fontColor};
`;

export const Text = styled.p`
  font-size: 15px;
  color: #393939;
`;

export const FooterMessage = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.type === "first" ? "flex-start" : "flex-end"};
  justify-self: baseline;
`;

export const DateMessage = styled.p`
  font-size: 12px;
  color: #393939;
  font-weight: 600;
  justify-self: baseline;
`;

export const HourMessage = styled.p`
  font-size: 12px;
  color: #393939;
  font-weight: 600;
  opacity:0.5;
`;


export const CategoryName = styled.h3`
  font-size: 20px;
  color: #16806D;
  font-weight: 600;
`;

export const SessionCategory = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-self:baseline;
`;

export const CardBoxCategory = styled(CardBox)`
  background: #F9F9F9;
  width: 20%;
  height: 90%;
  align-self: center;
  cursor:pointer;
  border: 1px solid #0BCB9D;
  text-align: center;
  &&:hover{
    box-shadow: -10px 8px 4px rgba(0, 0, 0, 0.25);
  }
`;


const GETcolorCard = (_type) => {
  if (_type === "first") {
    return { background: "#F7F7F7", fontColor: "#C8C8C8" };
  }
  if (_type === "thirty") {
    return { background: "#16D34B", fontColor: "#FFFFFF" };
  }
  return { background: "#35d3b7", fontColor: "#16806D" };
};
