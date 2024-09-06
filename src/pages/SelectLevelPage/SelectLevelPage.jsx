import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext, useEffect } from "react";
import { EasyModeContext } from "../../components/context/easymodeContext";

export function SelectLevelPage() {
  const { setEasyMode } = useContext(EasyModeContext);
  const checkBox = () => {
    setEasyMode(true);
  };

  useEffect(() => {
    setEasyMode(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.wrap}>
          <h3 className={styles.subtitle}>Легкий режим (3 жизни)</h3>
          <input onClick={checkBox} type="checkbox" />
        </div>
        <Link className={styles.link} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
