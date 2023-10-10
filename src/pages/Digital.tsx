import Button from '../ui/Button';
import styles from '../styles/Digital.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  GlobalState,
  countDown,
  countDownInterval,
  setNewTimer,
} from '../state/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatTime } from '../utils';

function Digital() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [digitalView, setDigitalView] = useState('');

  const isRunning = useSelector((state: GlobalState) => state.isRunning);
  const isInterval = useSelector((state: GlobalState) => state.isInterval);
  const isBreak = useSelector((state: GlobalState) => state.isBreak);
  const breakInSec = useSelector((state: GlobalState) => state.breakInSec);
  const minToSec = useSelector((state: GlobalState) => state.minToSec);

  useEffect(() => {
    let seconds = minToSec;
    setDigitalView(formatTime(seconds));

    if (isRunning) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          // clearInterval(interval);

          if (!isInterval && !isBreak) {
            navigate('/timesup');
          } else if (isInterval && !isBreak) {
            dispatch(countDownInterval());
          } else if (isBreak && !isInterval) {
            navigate('/pause');
          } else if (isBreak && isInterval) {
            navigate('/pause');
          }
        } else {
          dispatch(countDown());
          setDigitalView(formatTime(seconds));
          seconds--;
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
    dispatch(setNewTimer());
    navigate('/start');
  }

  return (
    <div className={styles.Digital}>
      <h1>{digitalView}</h1>
      <Button
        type="secondary"
        title="ABORT TIMER"
        onClick={handleClick}
        disabled={false}
      />
    </div>
  );
}

export default Digital;
