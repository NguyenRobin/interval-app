import Button from '../ui/Button';
import styles from '../styles/Pause.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  GlobalState,
  countDownBreak,
  countDownBreakWithInterval,
  noPause,
} from '../state/store';
import { useEffect, useState } from 'react';
import { formatTime } from '../utils';
function Pause() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRunning = useSelector((state: GlobalState) => state.isRunning);
  const isInterval = useSelector((state: GlobalState) => state.isInterval);
  const isBreak = useSelector((state: GlobalState) => state.isBreak);
  const minToSec = useSelector((state: GlobalState) => state.minToSec);
  const breakInSec = useSelector((state: GlobalState) => state.breakInSec);
  const [digitalView, setDigitalView] = useState('00:00');

  useEffect(() => {
    let takinBreak = breakInSec;
    setDigitalView(formatTime(takinBreak));
    if (isRunning) {
      const interval = setInterval(() => {
        if (takinBreak >= 0) {
          // clearInterval(interval);

          if (isBreak && !isInterval) {
            dispatch(countDownBreak());
            if (takinBreak === 0) {
              navigate('/start');
            }
            setDigitalView(formatTime(takinBreak));
            takinBreak--;
          } else if (isBreak && isInterval) {
            dispatch(countDownBreakWithInterval());
            if (takinBreak === 0) {
              navigate('/digital');
            }
            setDigitalView(formatTime(takinBreak));
            takinBreak--;
          }
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [
    isRunning,
    dispatch,
    minToSec,
    navigate,
    isBreak,
    isInterval,
    breakInSec,
  ]);

  function handleClick() {
    dispatch(noPause());
    navigate('/digital');
  }
  return (
    <div className={styles.Pause}>
      <section>
        <img src="/playing.svg" alt="" />
        <h3>Pause & breath</h3>
        <p>{digitalView}</p>
      </section>
      <Button
        title="NO PAUSE, GO NOW!"
        type="dark"
        disabled={false}
        onClick={handleClick}
      />
    </div>
  );
}

export default Pause;
