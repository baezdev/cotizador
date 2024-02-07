import {useNavigate} from 'react-router-dom'

import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'

import arrowIcon from '../../assets/images/arrow-backward.svg'

import styles from './UpdateNumber.module.css'

const UpdateNumber = () => {

  const navigate = useNavigate()
  const nextPage = () => {
    console.log('Cambio a página actualizado')
    navigate('/code-confirmation')
  }

  const handleBack = () => {
    console.log('back')
  }

  return (
    // <div className={styles.updatenumber}>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.imageContainer}>
          <img src={arrowIcon}
               alt="arrow"
               className={styles.imageIcon}
               onClick={handleBack}
          />
        </div>
        <p className={styles.title}><span>Actualizar celular</span></p>
      </header>
      {/*</div>*/}
      <div className={styles.title_question_container}>
        <h2 className={styles.title_question}>1. ¿Cuál es tu nuevo número?</h2>
      </div>
      <main className={styles.main}>
        <form className={styles.form}>

          <div className={styles.subcontent}>
            <div className={styles.container_inputs}>
              <div className={styles.container_input}>
                <label className={styles.label} htmlFor="newnumber">Ingresa tu nuevo número</label>
                <input className={styles.input} type="number"/>
                <div className={styles.guide}>Son 10 números</div>
                {/* <InputLabelText label='Ingresa tu nuevo número' /> */}
              </div>
              <div className={styles.container_input}>
                <label className={styles.label} htmlFor="newnumber">Confirma tu nuevo número</label>
                <input className={styles.input} type="number"/>
                <div className={styles.guide}>Son 10 números</div>
                {/* <InputLabelText label='Confirma tu nuevo número' /> */}
              </div>
            </div>
            <div className={styles.container_button}>
              {/*<button type="button" onClick={nextPage} className={styles.button}>Actualizar Número</button>*/}
              <ColorRoundedButton
                label={'Actualizar Número'}
                handleOnClick={nextPage}
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default UpdateNumber