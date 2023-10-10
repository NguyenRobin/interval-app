import styles from '../styles/Button.module.css';
interface ButtonProps {
  type: string;
  title: string;
  disabled: boolean;
  onClick: () => void;
}
function Button({ disabled, type, title, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {title}
    </button>
  );
}

export default Button;
