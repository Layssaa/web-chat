import styled from "styled-components"

export const MessagesArea = styled.main`
    width: 100%;
    height: 78%;
    display: flex;
    justify-content: space-between;
    background:#EAEBE7;
    padding: 0 3%;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    overflow: scroll;
    overflow-x: hidden;
    gap:3%;

`;

export const LeftBox = styled.main`
    width: 50%;
    height: 100%;
    display: flex;


`;


export const RightBox = styled.main`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
`;