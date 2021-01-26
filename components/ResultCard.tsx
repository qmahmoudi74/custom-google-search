import styles from "./styles/ResultCard.module.scss";

export default function ResultCard({ title, link, snippet }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.title}>{title}</div>
      <a href={link}>{link}</a>
      <div className={styles.snippet}>{snippet}</div>
    </div>
  );
}
