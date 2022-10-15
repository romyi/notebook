import { Mobile } from '../../layouts/Mobile.styled'
import Carous from './Carous'
import { CarouselPod } from './Carous.styled'

const Dashboard = () => {
  return (
    <Mobile>
      <Carous continious cards={[1.2, 1.5, 1, 2, 2.3, 2.3, 1.2]}>
        <CarouselPod><h2>1</h2></CarouselPod>
        <CarouselPod><h2>2</h2></CarouselPod>
        <CarouselPod><h2>3</h2></CarouselPod>
        <CarouselPod><h2>4</h2></CarouselPod>
        <CarouselPod><h2>5</h2></CarouselPod>
        <CarouselPod><h1>6</h1></CarouselPod>
      </Carous>
    </Mobile>
  )
}

export default Dashboard