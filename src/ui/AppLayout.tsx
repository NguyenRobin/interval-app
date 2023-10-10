import { Outlet, useLocation } from 'react-router-dom';
// import LandingPage from '../pages/LandingPage';
import Header from './Header';
import styles from '../styles/AppLayout.module.css';

function AppLayout() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <div className={styles.AppLayout}>
      <Header type={path === '/timesup' || path === '/pause' ? 'dark' : ''} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
