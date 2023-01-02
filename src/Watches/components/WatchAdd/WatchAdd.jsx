import { useState } from 'react'
import styles from './styles.module.css'

export const WatchAdd = ({ addWatch }) => {
  const [values, setValues] = useState({
    name: '',
    zone: ''
  })

  const [zoneValid, isZoneValid] = useState(true)

  const onChange = (e) => {
    const { name, value } = e.target

    if (name === 'zone') {
      isZoneValid(/^([+-][0-1][0-4]:[0|3][0])/.test(value))
    }

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleClick = () => {
    addWatch(values)
  }

  return (
    <div className={styles.block_field}>
      <label className={styles.label}>
        Название
        <input type='text' name='name' onChange={onChange} className={styles.input} value={values.name} required />
      </label>

      <label className={styles.label}>
        Временная зона
        <input type='text' name='zone' onChange={onChange} className={styles.input} value={values.zone} required />
        {!zoneValid && <div style={{ position: 'absolute', bottom: '-20px', color: 'red' }}>Формат: +/-ЧЧ:ММ</div>}
      </label>

      <button
        onClick={handleClick}
        className={styles.btn}
        disabled={!zoneValid}>
        Добавить
      </button>
    </div>
  )
}