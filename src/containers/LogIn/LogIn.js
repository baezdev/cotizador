import {useNavigate} from 'react-router-dom'
import {faEye, faUser} from '@fortawesome/free-solid-svg-icons'

import InputLabelText from '../../commons/components/InputLabelText/InputLabelText'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'

import logoBaz from '../../assets/images/logo-baz.png'

import styles from './LogIn.module.css'

const LogIn = () => {
  const navigation = useNavigate()
  const toCambio = () => navigation('/cambio')
  return (
    <div className={styles.container}>
      <div className={styles.subcontent}>
        <div className={styles.contentLogo}>
          <img alt={''} src={logoBaz} className={styles.logo}/>
          <span className={styles.titulo}>Inicia sesión</span>
        </div>
        <InputLabelText
          label={'Usuario'}
          icon={faUser}
          isIconEnabled={true}
        />
        <InputLabelText
          label={'Contraseña'}
          icon={faEye}
          isIconEnabled={true}
        />
        <div className={styles.forgotPass}>
          <span>Olvidé mi contraseña</span>
        </div>
        <div className={styles.button}>
          <ColorRoundedButton
            label={'Siguiente'}
            handleOnClick={toCambio}
          />
        </div>
      </div>
    </div>
  )
}

export default LogIn
