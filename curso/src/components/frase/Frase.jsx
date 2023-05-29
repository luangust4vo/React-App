import styles from "./Frase.module.css";

const Frase = () => {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Componente de frase</p>
    </div>
  );
};

export default Frase;
