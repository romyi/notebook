import React, { useState, ReactNode } from 'react'
import { useSwipeable } from 'react-swipeable'
import { Editor } from '../components'
import { Drawer, SwipeContainer } from './Swipe.styled'

interface ISwipe {
    children: ReactNode[]
}

const Swipe = ({children}: ISwipe) => {
    const [menuExp, setmenuExp] = useState(false)
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => {
            if (eventData.velocity > 1) {
                setmenuExp(false)
            }
        },
        onSwipedRight: (eventData) => {
            if (eventData.velocity > 1) {
                setmenuExp(true)
            }
        }
    })
  return (
    <SwipeContainer {...handlers}>
        <Drawer expand={menuExp}>
            <Editor />
        </Drawer>
        {children}
    </SwipeContainer>
  )
}

export default Swipe