import {useNavigate} from 'react-router-dom'

import LabelExchangeRate from '../../commons/components/LabelExchangeRate/LabelExchangeRate'
import LogOut from '../../commons/components/LogOut/LogOut'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'

import dollarIcon from '../../assets/images/dollar-icon.jpg'

import styles from './ExchangeRate.module.css'

const ExchangeRate = () => {
  const nav = useNavigate()
  const nextPage = () => nav('/beneficios')

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div className={styles.container_img}>
            <img className={styles.iconImgs} alt="Imagen" src={dollarIcon}/>
          </div>
          <span className={styles.labelTipoCambio}>Tipo de cambio</span>
          <div className={styles.pricesContent}>
            <LabelExchangeRate
              lugar={'Banco Azteca:'}
              tipoCambio={'$ 19.80'}
            />
            <LabelExchangeRate
              lugar={'Sucursal*:'}
              tipoCambio={'$ 19.80'}
            />
            <LabelExchangeRate
              lugar={'Banca Digital:'}
              tipoCambio={'$ 19.80'}
            />
            <LabelExchangeRate
              lugar={'Clientes de Banco Azteca:'}
              tipoCambio={'$ 19.80'}
            />
            <span className={styles.pricesSub}>Precios sujetos a tu ubicación*</span>
          </div>
          <span className={styles.labelTipoCambio}>Sólo necesitas</span>
          <span className={`${styles.llenaDatos} ${styles.text_center}`}>
            Llenar los siguientes datos para ofrecerte una mejor opción
          </span>
          <div className={styles.container_buttons}>
            <div className={styles.button}>
              <ColorRoundedButton
                label={'Continuar'}
                handleOnClick={nextPage}
              />
            </div>
            <div className={styles.button}>
              <LogOut/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExchangeRate
