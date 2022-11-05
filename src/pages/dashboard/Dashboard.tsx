import { useState } from 'react';
import { Mobile } from '../../layouts/Mobile.styled';
import Carous from './Carous';
import { CarouselPod } from './Carous.styled';

type s = 'idle' | 'first' | 'second'

const Dashboard = () => {
  const [ex, setex] = useState<s>('idle');
  const toggle = (state: s): s => {
    if (state === 'idle') return 'first'
    if (state === 'first') return'second'
    if (state === 'second') return 'first'
    return 'idle'
  }
  console.log(ex)
  return (
    <Mobile>
      <Carous continious>
        <CarouselPod scale={2}></CarouselPod>
        <CarouselPod></CarouselPod>
        <CarouselPod expand={ex} onClick={() => setex(toggle(ex))}></CarouselPod>
        <CarouselPod scale={2}></CarouselPod>
        <CarouselPod></CarouselPod>
        <CarouselPod></CarouselPod>
      </Carous>
    </Mobile>
  );
};

export default Dashboard;
