import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";

export default function MiniCard({ title, text, options }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>{title}</div>
      </div>
      <div className={styles.textContainer}>
        <div>{text}</div>
      </div>
      <div className={styles.dropdown}><FormSubmit options={options} placeHolder="Pick one"/></div>
    </div>
  );
}
