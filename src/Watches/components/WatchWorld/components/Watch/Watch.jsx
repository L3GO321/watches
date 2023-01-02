import moment from "moment"
import { useEffect, useState } from "react"
import styles from './styles.module.css'

console.log(moment.utc(new Date()).utcOffset('+00:00'))
console.log(moment.utc(new Date()).utcOffset('+00:00').hour())
console.log(new Date().toLocaleTimeString())

export const Watch = ({ watch, deleteWatch }) => {
  const [state, setState] = useState(moment.utc(new Date()).utcOffset(watch.zone))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState(moment.utc(new Date()).utcOffset(watch.zone))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])


  return (
    <div className={styles.watch_wrapper}>
      <div className={styles.watch_title}>{watch.name}</div>
      <div className={styles.watch_clear} onClick={() => deleteWatch(watch.name)}>✖</div>
      <div className={styles.watch_circle}>
        <div style={{ transform: `rotate(${state.second() * 6 - 90}deg)` }} className={styles.second_hand} />
        <div style={{ transform: `rotate(${state.minute() * 6 - 90}deg)` }} className={styles.minute_hand} />
        <div style={{ transform: `rotate(${state.hour() * 30 - 90}deg)` }} className={styles.hour_hand} />
      </div>
    </div>
  )
}