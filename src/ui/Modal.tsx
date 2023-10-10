import { Link } from 'react-router-dom';
import styles from '../styles/Modal.module.css';
import { createPortal } from 'react-dom';

interface ModalProps {
  handleToggle: () => void;
}

function Modal({ handleToggle }: ModalProps) {
  return createPortal(
    <div className={styles.Modal}>
      <ul>
        <Link to="analog" onClick={handleToggle}>
          <li>ANALOG TIMER</li>
        </Link>

        <Link to="digital" onClick={handleToggle}>
          <li>DIGITAL TIMER</li>
        </Link>

        <Link to="start" onClick={handleToggle}>
          <li>SET TIMER</li>
        </Link>
      </ul>
    </div>,
    document.body
  );
}

export default Modal;
