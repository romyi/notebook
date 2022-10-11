import { Mobile } from '../../layouts/Mobile.styled'
import Carous from './Carous'
import { CarouselPod } from './Carous.styled'

const Dashboard = () => {
  return (
    <Mobile>
      <Carous cards={1.4}>
        <CarouselPod><h2>1</h2></CarouselPod>
        <CarouselPod><h2>2</h2></CarouselPod>
        <CarouselPod><h1>4</h1></CarouselPod>
      </Carous>
    </Mobile>
  )
}

export default Dashboard