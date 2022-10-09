import styled from "@emotion/styled";

interface IHolder {
    delta?: number
}

export const CarouselHolder = styled.div`
    display: flex;
    gap: 20px;
    min-width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    transition: transform 0.7s ease;
    transform-origin: left;
    transform: translateX(${(props: IHolder) => props.delta ?? 0}px);
`;

export const CarouselPod = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 47%;
    height: 120px;
    background: #FAFAFA;
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
`;