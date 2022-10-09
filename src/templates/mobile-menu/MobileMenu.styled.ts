import styled from "@emotion/styled";

export const MobileMenuRibbon = styled.section`
    background-color: white;
    box-shadow: 0px 0px 5px -3px #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100vw;
    height: 70px;
    position: absolute;
    bottom: 0px;
    color: snow;
`;

export const Dot = styled.aside`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
`;