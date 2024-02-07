import { useNavigate } from 'react-router-dom'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'
import InputLabelText from '../../commons/components/InputLabelText/InputLabelText'
import styles from './UpdateMessage.module.css'
import SuccesIcon from '../../assets/images/success-icon.png'

const UpdateMessage = () => {
  
  const navigate = useNavigate()
  const nextPage = () => {
    console.log('Cambio a página actualizado')
    // navigate('/updated-phone')
  }

  return (
    <div className={styles.updatenumber}>
      <div className={styles.container}>
  
        <main className={styles.main}>
            <div className={styles.img_container}>
              <img src={SuccesIcon} alt="Succes Icon" />
            </div>
            <div className={styles.title_question_container}>
              <h2 className={styles.title_question}>¡Número de celular actualizado correctamente!</h2>
            </div>
            <div className={styles.container_button}>
              <button type='button' onClick={nextPage} className={styles.button}>Aceptar</button>
            </div>
        </main>
      </div>
    </div>
  )
}

export default UpdateMessage