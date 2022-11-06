import styled, { StyledComponent } from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { ReactElement } from 'react';

interface IHolder {
  delta?: number;
  smooth?: boolean;
}

interface ICarouselBlock {
  cards?: number;
}

export const CarouselHolder = styled.div`
  display: flex;
  min-width: 100%;
  transition: transform 0.3s
    ${(props: IHolder) => (props.smooth ? 'linear' : 'ease-in-out')};
  transform-origin: left;
  transform: translateX(${(props: IHolder) => props.delta ?? 0}%);
`;

export const CarouselBlock = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: ${(props: ICarouselBlock) =>
    props.cards ? 100 / props.cards : 100}%;
`;

const down = keyframes`
    from {
      transform: translateY(0);
      height: 180px;
    }
    50% {
      transform: translateY(0px);
      height: 360px;
    }
    to {
      transform: translateY(180px);
      height: 180px;
    }
`

const up = keyframes`
    from {
      transform: translateY(180px);
      height: 180px;
    }
    50% {
      transform: translateY(0px);
      height: 360px;
    }
    to {
      transform: translateY(0);
      height: 180px;
    }
`;

export const CarouselPod = styled.div<{ scale?: number, expand?: 'idle' | 'first' | 'second' }>`
  ${(props) => props.expand === 'first' && 
    css`animation: ${down} 0.3s ease-in-out;
        animation-fill-mode: forwards;
  `}
  ${(props) => props.expand === 'second' && 
    css`animation: ${up} 0.3s linear;
    animation-fill-mode: forwards;
  `}
  transform-origin: bottom;
  height: 180px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
`;
