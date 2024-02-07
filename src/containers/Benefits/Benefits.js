import {useNavigate} from 'react-router-dom'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'
import {Hello} from '../BuySale/Hello/Hello'

import symbolsIcon from '../../assets/images/symbols-icon.jpg'

import styles from './Benefits.module.css'

const Benefits = () => {
  const nav = useNavigate()
  const nextPage = () => nav('/selectId')
  const steps = [
    {
      description: 'Disminuir el tiempo invertido para operar en la sucursal.'
    },
    {
      description: 'Mejor tipo de cambio respecto al ofrecido en sucursal.'
    },
    {
      description: 'Promociones exclusivas'
    },
    {
      description: 'Tipo de cambio en:\n Banco Azteca: 19.80\n Sucursal: 19.60\n Banca digital: 19.70'
    },
    {
      description: 'Si te vuelves o eres cliente de Banco Azteca te damos 5 centavos más'
    }
  ]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div className={styles.container_img}>
            <img className={styles.iconImgs} alt={''} src={symbolsIcon}/>
          </div>
          <span className={styles.labelTitulo}>Compra y venta de divisas</span>
          <span className={styles.labelSubtitulo}>El mejor cambio disponible y seguro para tus operaciones</span>
          <span className={styles.labelTipoCambio}>Beneficios</span>
          <div className={styles.container_steps}>
            <Hello data={steps}/>
            {/* <StepsBenefits data={steps}/> */}
          </div>
          <span className={styles.labelTipoCambio}>Sólo necesitas</span>
          <span className={styles.labelText}>Llenar los siguientes datos para ofrecerte una mejor opción</span>

          <div className={styles.container_buttons}>
            <ColorRoundedButton
              label={'Continuar'}
              handleOnClick={nextPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits
