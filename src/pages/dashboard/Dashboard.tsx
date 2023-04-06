import { EditorPod } from '../../components/EditorPod';
import { useStateAnimation } from '../../hooks/useStateAnimation';
import { Mobile } from '../../layouts/Mobile.styled';
import Carous from './Carous';
import { CarouselPod } from './Carous.styled';
import { css, cx } from '@emotion/css';

const withAnimation = (Component: any) => {
  return (props: any) => {
    const {st, switch: animate} = useStateAnimation();
    return (
      <CarouselPod onClick={animate} className={cx([st?.className, css`background-color: cadetblue`])} {...props}><h2>h2</h2></CarouselPod>
    )
  }
}

const AnimatedPod = withAnimation(CarouselPod)

const Dashboard = () => {
  return (
    <Mobile>
      <Carous>
        {[{id: 1, text: 'a'}, {id: 2, text: 'bb'}].map((el) => {
          return (
            <AnimatedPod key={el.id}><h2>{el.text}</h2></AnimatedPod>
          )
        })}
      </Carous>
    </Mobile>
  );
};

export default Dashboard;
