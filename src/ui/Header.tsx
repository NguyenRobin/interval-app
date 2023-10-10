import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Modal from './Modal';

interface Props {
  type: string;
}
function Header({ type }: Props) {
  const [showInterval] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggle() {
    setShowModal((showModal) => !showModal);
  }

  return (
    <header className={type === 'dark' ? styles['Header-dark'] : styles.Header}>
      <img
        src={showModal || type === 'dark' ? 'navicon-white.svg' : 'navicon.svg'}
        alt=""
        onClick={handleToggle}
      />
      {showInterval && <h2>Interval</h2>}
      {showModal && <Modal handleToggle={handleToggle} />}
    </header>
  );
}

export default Header;
