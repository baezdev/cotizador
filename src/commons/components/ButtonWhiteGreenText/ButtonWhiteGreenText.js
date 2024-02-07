import arrowIcon from '../../../assets/images/arrow-forward.svg'

import styles from './ButtonWhiteGreenText.module.css'

const ButtonWhiteGreenText = ({label, handleOnClick, icon = null, upperCase = false, ...props}) => {
  return (
    <>
      <div style={{textAlign: 'center'}} {...props}>
        <button
          onClick={handleOnClick}
          className={`${styles.btn} ${upperCase ? styles.upperCase : ''}`}>
          {label}
          {icon &&
            <img src={arrowIcon}
                 alt="arrow"
                 className={styles.imageIcon}
            />
          }
        </button>
      </div>
    </>
  )
}
export default ButtonWhiteGreenText
