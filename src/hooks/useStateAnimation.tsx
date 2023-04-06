import React, { useCallback, useState } from 'react'
import {keyframes} from '@emotion/react'
import {css} from '@emotion/css';

const first = keyframes`
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

const second = keyframes`
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

type states = 'idle' | 'first' | 'second'
export const useStateAnimation = () => {
  const [current, setCurrent] = useState<states>('idle')
  const toggle =  useCallback(
    (state: states): void => {
      if (state === 'idle') setCurrent('first')
      if (state === 'first') setCurrent('second')
      if (state === 'second')  setCurrent('first')
    },
    [],
  )
  const animate = useCallback(
    (state: states): { className: string } | undefined => {
      if (state === 'idle') return
      if (state === 'first') {
        return { className: 
          css`animation: ${first} 0.3s ease-in-out forwards;`
        }
      }
      if (state === 'second') {
        return { className: 
          css`animation: ${second} 0.3s ease forwards;`
      }}
    },
    [],
  )
  return {st: animate(current), switch: () => toggle(current)}
}
