import { useContext, useEffect } from "react";
import { LeadersContext } from "../../components/context/leaderContext";
import { getLeaders } from "../../api/leaders";
import { sortLeadersElements } from "../../utils/helper";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Leaderboard } from "../../components/Leaderboard/Leaderboard";
import styles from "./LeaderboardPage.module.css";

export function LeaderboardPage() {
  const { leaders, setLeaders } = useContext(LeadersContext);

  const formatTime = timeInSeconds => {
    const seconds = ("0" + String(timeInSeconds % 60)).slice(-2);
    const minutes = ("0" + String(Math.floor(timeInSeconds / 60))).slice(-2);

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    getLeaders().then(leaders => {
      const sortedLeaders = sortLeadersElements(leaders.leaders);
      setLeaders(sortedLeaders.splice(1, 10));
    });
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Лидерборд</h3>
        <Link to="/">
          <Button>Начать игру</Button>
        </Link>
      </header>
      <main>
        <div className={styles.box}>
          <p className={styles.subtitle1}>Позиция</p>
          <p className={styles.subtitle2}>Пользователь</p>
          <p className={styles.subtitle3}></p>
          <p className={styles.subtitle4}>Время</p>
        </div>
        <ul className={styles.wrap}>
          {leaders.map((el, index) => (
            <Leaderboard key={el.id} position={`#${index + 1}`} user={el.name} time={formatTime(el.time)} />
          ))}
        </ul>
      </main>
    </div>
  );
}
