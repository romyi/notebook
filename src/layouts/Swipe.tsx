import React, { ReactNode } from 'react'
import { useSwipeable } from 'react-swipeable'
import { SwipeContainer } from './Swipe.styled'

interface ISwipe {
    children: ReactNode[]
}

const Swipe = ({children}: ISwipe) => {
    const handlers = useSwipeable({
        onSwipedRight: (eventData) => {
            if (eventData.velocity > 0.5) {
                document.location.href=`${window.origin}/new`
            }
        },
        onSwipedLeft: (eventData) => {
            if (eventData.velocity > 0.5) {
                document.location.href=`${window.origin}`
            }
        }
    })
  return (
    <SwipeContainer {...handlers}>{children}</SwipeContainer>
  )
}

export default Swipe