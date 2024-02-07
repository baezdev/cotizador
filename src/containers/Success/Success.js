import {useNavigate} from 'react-router-dom'
import LogOut from '../../commons/components/LogOut/LogOut'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'

import successIcon from '../../assets/images/success-icon.png'

import styles from './Success.module.css'

const Success = () => {
  const nav = useNavigate()
  const nextPage = () => nav('/selectId')
  // const nextPage = () => nav('/beneficios')
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div className={styles.container_img}>
            <img className={styles.iconImgs} alt="Imagen" src={successIcon}/>
          </div>
          <span
            className={`${styles.llenaDatos} ${styles.text_center}`}
          >
            ¡Número de celular actualizado correctamente!
          </span>
          <div className={styles.container_buttons}>
            <ColorRoundedButton
              label={'Aceptar'}
              handleOnClick={nextPage}
            />
          </div>
        </div>

      </div>
    </>
  )
}
export default Success
