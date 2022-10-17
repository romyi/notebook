import styled, { StyledComponent } from "@emotion/styled";
import { ReactElement } from "react";

interface IHolder {
    delta?: number
    smooth?: boolean
}

interface ICarouselBlock {
    cards?: number
}

export const CarouselHolder = styled.div`
    display: flex;
    min-width: 100%;
    transition: transform 0.3s ${(props: IHolder) => props.smooth ? 'linear' : 'ease-in-out'};
    transform-origin: left;
    transform: translateX(${(props: IHolder) => props.delta ?? 0}%);
`;

export const CarouselBlock = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: ${(props: ICarouselBlock) => props.cards ? 100 / props.cards : 100}%;
`;

export const CarouselPod = styled.div<{scale?: number}>`
    height: 180px;
    margin: 10px;
    background: linear-gradient(54deg, rgba(209,246,239,1) 4%, rgba(255,242,253,1) 81%);
    border-radius: 16px;
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
`;