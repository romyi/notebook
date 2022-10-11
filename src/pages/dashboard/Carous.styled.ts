import styled from "@emotion/styled";

interface IHolder {
    delta?: number
}

interface ICarouselBlock {
    cards?: number
}

export const CarouselHolder = styled.div`
    display: flex;
    min-width: 100%;
    transition: transform 0.7s ease;
    transform-origin: left;
    transform: translateX(${(props: IHolder) => props.delta ?? 0}%);
`;

export const CarouselBlock = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: ${(props: ICarouselBlock) => props.cards ? 100 / props.cards : 100}%;
`;

export const CarouselPod = styled.div`
    height: 120px;
    margin: 10px;
    background-color: #f2f2f2;;
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
`;