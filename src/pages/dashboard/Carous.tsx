import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react';
import { useSwipeable } from 'react-swipeable';
import { CarouselBlock, CarouselHolder } from './Carous.styled';

interface ICarous {
  children: ReactElement<{ scale?: number }>[];
  continious?: boolean;
}

const buildCarouselReducer =
  (total: number, cards: number[]) => (state: any, action: any) => {
    switch (action.type) {
      case 'left':
        if (state.ix !== total - 1) {
          return {
            delta: state.delta - 100 / cards[state.ix],
            ix: state.ix + 1
          };
        } else return state;
      case 'right':
        if (state.ix !== 0) {
          return {
            delta: state.delta + 100 / cards[state.ix - 1],
            ix: state.ix - 1
          };
        } else return state;
      default:
        return state;
    }
  };

const Carous = ({ children, continious }: ICarous) => {
  let reducerarr: number[] = [];
  const wrchildren = React.Children.map(children, (child, ix) => {
    reducerarr.push(child.props.scale ?? 1.3);
    return (
      <CarouselBlock cards={child.props.scale ?? 1.3}>{child}</CarouselBlock>
    );
  });
  const [scaledd, setscaledd] = useState(0);
  const [prev, setprev] = useState(0);
  let d = 80;
  const carouselReducer = useMemo(
    () => buildCarouselReducer(React.Children.count(children), reducerarr),
    []
  );
  const [state, dispatch] = useReducer(carouselReducer, { delta: 0, ix: 0 });
  useEffect(() => {
    if (scaledd < 0) {
      if (prev > scaledd) {
        dispatch({ type: 'left' });
      } else {
        dispatch({ type: 'right' });
      }
    }
    if (scaledd > 0) {
      if (prev < scaledd) {
        dispatch({ type: 'right' });
      } else {
        dispatch({ type: 'left' });
      }
    }
    setprev(scaledd);
  }, [scaledd]);
  const handlers = useSwipeable({
    onSwipedLeft: continious
      ? undefined
      : (eventData) => {
          for (let index = 0; index < eventData.velocity * 1.6; index++) {
            dispatch({ type: 'left' });
          }
        },
    onSwipedRight: continious
      ? undefined
      : (eventData) => {
          for (let index = 0; index < eventData.velocity * 1.6; index++) {
            dispatch({ type: 'right' });
          }
        },
    onSwipeStart: continious
      ? () => {
          setprev(0);
        }
      : undefined,
    onSwiping: continious
      ? (eventData) => {
          setscaledd(
            eventData.deltaX < 0
              ? Math.floor(eventData.deltaX / d)
              : Math.ceil(eventData.deltaX / d)
          );
        }
      : undefined
  });
  return (
    <CarouselHolder smooth={continious} {...handlers} delta={state.delta}>
      {wrchildren}
    </CarouselHolder>
  );
};

export default Carous;
