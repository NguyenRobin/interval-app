import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '../styles/Timer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState, decrement, increment } from '../state/store';

function Timer() {
  const min = useSelector((state: GlobalState) => state.min);
  const dispatch = useDispatch();

  function handleIncrement() {
    if (min >= 60) return;
    dispatch(increment(1));
  }
  function handleDecrement() {
    if (min <= 0) return;
    dispatch(decrement(1));
  }

  return (
    <div className={styles.Timer}>
      <section className={styles.TimerSection}>
        <IoIosArrowBack
          className={styles.Icon}
          size={'3rem'}
          onClick={handleDecrement}
        />
        <div>
          <span>{min}</span>
          <p>minutes</p>
        </div>
        <IoIosArrowForward
          className={styles.Icon}
          size={'3rem'}
          onClick={handleIncrement}
        />
      </section>
    </div>
  );
}

export default Timer;
