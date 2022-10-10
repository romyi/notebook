import React, {useState} from 'react'
import { Mobile } from '../../layouts/Mobile.styled'
import Carous from './Carous'
import { CarouselPod } from './Carous.styled'
import { Pod } from './Dashboard.styled'

const Dashboard = () => {
  return (
    <Mobile>
      <Pod>
        <h4>Доброе, timeflyeswhenyouhf@internet.ru</h4>
      </Pod>
      <Carous>
        <CarouselPod><h3>shall will</h3><p>будущее время</p></CarouselPod>
        <CarouselPod><h2>9932</h2></CarouselPod>
        <CarouselPod><h2>dae</h2></CarouselPod>
        <CarouselPod><h2>abnc</h2></CarouselPod>
        <CarouselPod><h2>ppaaaq</h2></CarouselPod>
      </Carous>
    </Mobile>
  )
}

export default Dashboard