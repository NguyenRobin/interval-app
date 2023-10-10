import Button from '../ui/Button';
import styles from '../styles/TimesUp.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewTimer } from '../state/store';

function TimesUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setNewTimer());
    navigate('/start');
  }
  return (
    <div className={styles.TimesUp}>
      <section>
        <img src="alarm-icon.svg" alt="" />
        <h3>Times up!</h3>
      </section>

      <Button
        disabled={false}
        title="SET NEW TIMER"
        type="dark"
        onClick={handleClick}
      />
    </div>
  );
}

export default TimesUp;
