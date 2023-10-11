import styles from '../styles/Intervals.module.css';

interface IntervalsProps {
  id: string;
  htmlFor: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Intervals({ id, htmlFor, title, onChange }: IntervalsProps) {
  return (
    <section className={styles.Intervals}>
      <input type="checkbox" id={id} onChange={onChange} />
      <label htmlFor={htmlFor}>{title}</label>
    </section>
  );
}

export default Intervals;
