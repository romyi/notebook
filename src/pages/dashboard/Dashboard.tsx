import { EditorPod } from '../../components/EditorPod';
import { Mobile } from '../../layouts/Mobile.styled';
import Carous from './Carous';
import { CarouselPod } from './Carous.styled';

const Dashboard = () => {
  return (
    <Mobile>
      <Carous continious>
        <CarouselPod scale={2}></CarouselPod>
        <CarouselPod></CarouselPod>
        <CarouselPod><EditorPod /></CarouselPod>
      </Carous>
    </Mobile>
  );
};

export default Dashboard;
