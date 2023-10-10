import Button from '../ui/Button';
import Timer from '../ui/Timer';
import Intervals from '../ui/Intervals';

import styles from '../styles/StartTimer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GlobalState, interval, startTimer, takeBreak } from '../state/store';

function StartTimer() {
  const min = useSelector((state: GlobalState) => state.min);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleIntervals(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    dispatch(interval(input.checked));
  }

  function handleBreak(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    dispatch(takeBreak(input.checked));
  }

  function handleStartTimer() {
    dispatch(startTimer());
    navigate('/digital');
  }

  return (
    <div className={styles.StartTimer}>
      <Timer />

      <Intervals
        id="intervals"
        htmlFor="intervals"
        title="intervals"
        onChange={handleIntervals}
      />
      <Intervals
        id="break"
        htmlFor="break"
        title="5 min break / interval"
        onChange={handleBreak}
      />

      <section style={{ marginTop: '4rem' }}>
        <Button
          type="primary"
          title="START TIMER"
          onClick={handleStartTimer}
          disabled={min > 0 ? false : true}
        />
      </section>
    </div>
  );
}
export default StartTimer;
