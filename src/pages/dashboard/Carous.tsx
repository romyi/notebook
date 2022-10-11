import React, { ReactNode, useMemo, useReducer, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';
import { CarouselBlock, CarouselHolder } from './Carous.styled'

interface ICarous {
  children: ReactNode[],
  cards?: number
}

const buildCarouselReducer = (total: number, cards: number) => (state: any, action: any) => {
  switch (action.type) {
    case 'left':
      if (state.ix !== total) {
        return {
          delta: state.delta - 100/cards,
          ix: state.ix + 1,
        }
      } else return state
    case 'right':
      if (state.ix !== 1) {
        return {
          delta: state.delta + 100/cards,
          ix: state.ix - 1,
        }
      } else return state
    default:
      return state;
  }
}

const Carous = ({children, cards}: ICarous) => {
  const wrchildren = React.Children.map(children, child => <CarouselBlock cards={cards}>{child}</CarouselBlock>);
  const carouselReducer = useMemo(() => buildCarouselReducer(React.Children.count(children), cards ?? 1), []);
  const [state, dispatch] = useReducer(carouselReducer, {delta: 0, ix: 1}) 
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      dispatch({type: 'left' })
    },
    onSwipedRight: () => {
      dispatch({type: 'right'})
    }
  })
  return (
    <CarouselHolder {...handlers} delta={state.delta}>{wrchildren}</CarouselHolder>
  )
}

export default Carous