import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './InputLabelText.module.css'

const InputLabelText = (
  {
    label, icon, isIconEnabled, onChangeValue, ...props
  }) => {
  return (
    <>
      <div className={styles.contentInput}>
        <label className={styles.labelInput}>{label}</label>
        <div className={styles.contenedoriconoinput}>
          {isIconEnabled ?
            (
              <div className={styles.iconInput}>
                <FontAwesomeIcon icon={icon}/>
              </div>
            ) : (
              <></>
            )}
          <input
            className={styles.inputText}
            type={'text'}
            onChange={onChangeValue}
            {...props}
          />
        </div>
      </div>
    </>
  )
}

export default InputLabelText
