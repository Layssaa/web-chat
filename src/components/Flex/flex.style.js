import styled from "styled-components"


export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;
