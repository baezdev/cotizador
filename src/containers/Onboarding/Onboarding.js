import {useState} from 'react'
import {useNavigate, useLocation } from 'react-router-dom'

import InputLabelText from '../../commons/components/InputLabelText/InputLabelText'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'
import ButtonWhiteGreenText from '../../commons/components/ButtonWhiteGreenText/ButtonWhiteGreenText'

import styles from './Onboarding.module.css'

const Onboarding = () => {
  const nav = useNavigate()
  const { state } = useLocation();
  if (state) {
    console.log(state)
  }

  const [value, setValue] = useState('')

  const goBack = () => nav('/scannerIds')
  const reTry = () => nav('/scannerIds')
  const next = () => nav('/testAlive')

  const handleChangeValue = (e) => {
    const val = e.target.value
    if (!isNaN(val)) {
      setValue(val)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div className={styles.header} onClick={goBack}>
            <span>Identificación</span>
            <span className={styles.subtitulo}>Por favor ingresa los siguientes datos</span>
          </div>

          <form className={styles.form}>
            <div className={styles.form_title_container}>
              <p className={styles.form_title}>Completa y confirma tus datos igual a los que aparecen en tu INE/IFE.</p>
            </div>
            <div className={styles.container_form_inputs}>
              <InputLabelText label={'ID folio de tu INE'}
                              isIconEnabled={false}
                              value={state?.claveElector}/>
              <InputLabelText label={'Nacionalidad'}
                              isIconEnabled={false}/>
              <InputLabelText label={'CURP'}
                              isIconEnabled={false}
                              value={state?.curp}/>
              <InputLabelText label={'Nombre (s)'}
                              isIconEnabled={false}
                              value={state?.nombres}/>
              <InputLabelText label={'Apellido paterno'}
                              isIconEnabled={false}
                              value={state?.primerApellido}/>
              <InputLabelText label={'Apellido materno'}
                              isIconEnabled={false}
                              value={state?.segundoApellido}/>
              <InputLabelText label={'Origen de los recursos'}
                              isIconEnabled={false}/>
              <InputLabelText label={'Correo'}
                              isIconEnabled={false}/>
              <InputLabelText label={'Telefono'}
                              isIconEnabled={false}
                              value={value}
                              type="number"
                              onChangeValue={(e) => handleChangeValue(e)}
              />
            </div>
            <div className={styles.container_buttons}>
            </div>
            <div className={styles.container_buttons}>
              <div className={styles.button}>
                <ColorRoundedButton
                  label={'Continuar'}
                  handleOnClick={next}
                />
              </div>
              <div className={styles.button}>
                <ButtonWhiteGreenText
                  label={'Reintentar'}
                  handleOnClick={reTry}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Onboarding
