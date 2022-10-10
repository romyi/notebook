import styled from "@emotion/styled";

interface IHolder {
    delta?: number
}

export const CarouselHolder = styled.div`
    display: flex;
    min-width: 100%;
    gap: 15px;
    flex-direction: row;
    justify-content: flex-start;
    transition: transform 0.7s ease;
    transform-origin: left;
    transform: translateX(${(props: IHolder) => props.delta ?? 0}px);
`;

export const CarouselPod = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%;
    height: 120px;
    background: #FAFAFA;
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
`;