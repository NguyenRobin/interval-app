import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Link to="/start">
        <img src="logo.svg" alt="logo" />
      </Link>
    </div>
  );
}

export default LandingPage;
