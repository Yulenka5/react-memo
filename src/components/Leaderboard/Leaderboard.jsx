import styles from "./Leaderboard.module.css";
import vectorImageUrl from "./images/vector.png";
import vectorActiveImageUrl from "./images/vector-active.png";
import magicBallImageUrl from "./images/magic-ball.png";
import magicActiveBallImageUrl from "./images/magic-ball-active.png";
import superPowers from "./images/super-powers.png";
import hardMode from "./images/hard-mode.png";

export const Leaderboard = ({ position, user, time, achievements, color = "black" }) => {
  const achieveImg = achievements.includes(1) ? vectorActiveImageUrl : vectorImageUrl;

  const achieveImg2 = achievements.includes(2) ? magicActiveBallImageUrl : magicBallImageUrl;

  return (
    <>
      <li style={{ color: color }} className={styles.item}>
        <div className={styles.position}>{position}</div>
        <div className={styles.user}>{user}</div>
        <div className={styles.img}>
          <div className={achieveImg === vectorActiveImageUrl ? styles.wrapper : ""}>
            <div>
              <img src={achieveImg} alt="#" />
            </div>
            <div className={styles.bubble}>
              <img className={styles.description} src={hardMode} alt="#" />
            </div>
          </div>
          <div className={achieveImg2 === magicActiveBallImageUrl ? styles.wrapper : ""}>
            <div>
              <img src={achieveImg2} alt="#" />
            </div>
            <div className={styles.bubble}>
              <img className={styles.description} src={superPowers} alt="#" />
            </div>
          </div>
        </div>
        <div className={styles.time}>{time}</div>
      </li>
    </>
  );
};
