import React, {useState} from 'react'
import { Mobile } from '../../layouts/Mobile.styled'
import Carous from './Carous'
import { CarouselPod } from './Carous.styled'
import { Pod } from './Dashboard.styled'

const Dashboard = () => {
  return (
    <Mobile>
      <Carous cards={1.3}>
        <CarouselPod><h2>1</h2></CarouselPod>
        <CarouselPod><h2>2</h2></CarouselPod>
      </Carous>
    </Mobile>
  )
}

export default Dashboard