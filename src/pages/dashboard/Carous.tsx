import React, { ReactNode, useMemo, useReducer, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';
import { CarouselBlock, CarouselHolder } from './Carous.styled'
interface ICarous {
  children: ReactNode[],
  cards?: number[]
}

const buildCarouselReducer = (total: number, cards: number[]) => (state: any, action: any) => {
  switch (action.type) {
    case 'left':
      if (state.ix !== total - 1) {
        return {
          delta: state.delta - 100/cards[state.ix],
          ix: state.ix + 1,
        }
      } else return state
    case 'right':
      if (state.ix !== 0) {
        return {
          delta: state.delta + 100/cards[state.ix - 1],
          ix: state.ix - 1,
        }
      } else return state
    default:
      return state;
  }
}

const Carous = ({children, cards}: ICarous) => {
  const wrchildren = React.Children.map(children, (child, ix) => <CarouselBlock cards={cards ? cards[ix] : 1.3}>{child}</CarouselBlock>);
  const carouselReducer = useMemo(() => buildCarouselReducer(React.Children.count(children), cards ?? Array(children.length).fill(1.3)), []);
  const [state, dispatch] = useReducer(carouselReducer, {delta: 0, ix: 0})
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      for (let index = 0; index < eventData.velocity*1.6; index++) {
        dispatch({type: 'left' })
      }
    },
    onSwipedRight: (eventData) => {
      for (let index = 0; index < eventData.velocity*1.6; index++) {
        dispatch({type: 'right' })
      }
    }
  })
  return (
    <CarouselHolder {...handlers} delta={state.delta}>{wrchildren}</CarouselHolder>
  )
}

export default Carous