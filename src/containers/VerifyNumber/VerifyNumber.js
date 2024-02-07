import {useNavigate} from 'react-router-dom'
import {faSortNumericDesc} from '@fortawesome/free-solid-svg-icons'

import InputLabelText from '../../commons/components/InputLabelText/InputLabelText'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'
import ButtonWhiteGreenText from '../../commons/components/ButtonWhiteGreenText/ButtonWhiteGreenText'

import logoBaz from '../../assets/images/logo-baz.png'

import styles from './VerifyNumber.module.css'

const VerifyNumber = () => {
  const navigation = useNavigate()
  const toVerificar = () => navigation('/code-confirmation')
  const toCambio = () => navigation('/update-number')

  return (
    <div className={styles.container}>
      <div className={styles.subcontent}>
        <div className={styles.contentLogo}>
          <img alt={''} src={logoBaz} className={styles.logo}/>
          <span className={styles.titulo}>Verificar / Cambiar Número</span>
        </div>
        <div className={styles.container_input}>
          <InputLabelText
            label={'Teléfono celular'}
            icon={faSortNumericDesc}
            isIconEnabled={true}
            type="number"
          />
        </div>
        <div className={styles.container_buttons}>
          <ColorRoundedButton
            label={'Verificar Celular'}
            handleOnClick={toVerificar}
          />
          <ButtonWhiteGreenText
            label="Cambié de número celular"
            handleOnClick={toCambio}
            upperCase={true}
          />
        </div>
      </div>
    </div>
  )
}

export default VerifyNumber
