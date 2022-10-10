import React, { ReactNode, useLayoutEffect, useReducer, useRef, useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import { CarouselHolder } from './Carous.styled'

interface ICarous {
  children: ReactNode[],
}

const carouselReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'left':
      if (state.ix !== 4) {
        return {
          ix: state.ix + 1,
          delta: state.delta - 414
        }
      } else return state
    case 'right':
      if (state.ix !== 1) {
        return {
          ix: state.ix - 1,
          delta: state.delta + 414
        }
      } else return state
    default:
      return state;
  }
}

const Carous = ({children}: ICarous) => {
  const [state, dispatch] = useReducer(carouselReducer, {delta: 0, ix: 1}) 
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      dispatch({type: 'left'})
    },
    onSwipedRight: () => {
      dispatch({type: 'right'})
    }
  })
  return (
    <CarouselHolder {...handlers} delta={state.delta}>{children}</CarouselHolder>
  )
}

export default Carous