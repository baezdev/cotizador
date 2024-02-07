import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons'

import InputLabelText from '../../commons/components/InputLabelText/InputLabelText'

import IconDinner from '../../assets/icons/sds-icons-retirar_dinero.png'
import UsdFlag from '../../assets/images/usd-flag.png'
import EurFlag from '../../assets/images/eur-flag.png'
import CanFlag from '../../assets/images/can-flag.png'
import OlpFlag from '../../assets/images/olp-flag.png'

import styles from './GenerateOperation.module.css'

const GenerateOperation = () => {
  const navigate = useNavigate()
  const [cssShadow, setCssShadow] = useState('operacion__types__crimson')
  const [cssShadowCoin, setCssShadowCoin] = useState('operacion__types__coin')
  const [cssShadowNotCoin, setCssShadowNotCoin] = useState('operacion__types__not_coin')
  const [selected, setSelected] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState(1)
  const [value, setValue] = useState('')
  console.log(value)
  const [calculatedValue, setCalculatedValue] = useState('')

  const handleClickContinue = () => {
    console.log('Cambiar a cotización exitosa')
    navigate('/cotization-success')
  }

  const handleCheck = (value) => {
    if (!selected && +value === 1) {
      setSelected(selected)
    } else if (selected && +value === 2) {
      setSelected(selected)
    } else {
      setSelected(!selected)
    }
  }

  const handleCoin = (value) => {
    setSelectedCoin(value)
  }

  const handleChangeValue = (e) => {
    const val = e.target.value
    if (!isNaN(val)) {
      let dollarUSLocale = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // useGrouping: true,
        // maximumSignificantDigits: 2,
        decimal: 2
      })
      setValue(val)
      setCalculatedValue(dollarUSLocale.format(val * 19.05))
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div className={styles.header}>
            <p>Realizar cotización</p>
            <p>Miércoles 23 mayo 2023</p>
            <p>Usuario: 0358498</p>
          </div>

          <div className={styles.body}>

            <div className={styles.divisas}>
              <div className={styles.divisas__container_title}>
                <p className={styles.divisas__title}>1. Selecciona divisas:</p>
              </div>
              <div className={styles.divisas__container_currencys}>
                <div className={styles.divisas__currency}>
                  <div
                    className={`${styles.divisas__currency} ${+selectedCoin === 1 ? styles[cssShadowCoin] : styles[cssShadowNotCoin]}`}
                    onClick={() => handleCoin(1)}
                  >
                    {/*<div>*/}
                    <img src={UsdFlag} className={styles.divisas__currency_container_img} alt="USD"/>
                  </div>
                  {/*<div className={styles.divisas__currency_container_img}></div>*/}
                  <p className={styles.divisas__currency_title}>USD</p>
                </div>
                <div className={styles.divisas__currency}>
                  <div
                    className={`${styles.divisas__currency} ${+selectedCoin === 2 ? styles[cssShadowCoin] : styles[cssShadowNotCoin]}`}
                    onClick={() => handleCoin(2)}
                  >
                    <img src={EurFlag} className={styles.divisas__currency_container_img} alt="EUR"/>
                  </div>
                  {/*<div className={styles.divisas__currency_container_img}></div>*/}
                  <p className={styles.divisas__currency_title}>EUR</p>
                </div>
                <div className={styles.divisas__currency}>
                  <div
                    className={`${styles.divisas__currency} ${+selectedCoin === 3 ? styles[cssShadowCoin] : styles[cssShadowNotCoin]}`}
                    onClick={() => handleCoin(3)}
                  >
                    <img src={CanFlag} className={styles.divisas__currency_container_img} alt="CAN"/>
                  </div>
                  {/*<div className={styles.divisas__currency_container_img}></div>*/}
                  <p className={styles.divisas__currency_title}>CAD</p>
                </div>
                <div className={styles.divisas__currency}>
                  <div
                    className={`${styles.divisas__currency} ${+selectedCoin === 4 ? styles[cssShadowCoin] : styles[cssShadowNotCoin]}`}
                    onClick={() => handleCoin(4)}
                  >
                    <img src={OlpFlag} className={styles.divisas__currency_container_img} alt="OLP"/>
                  </div>
                  {/*<div className={styles.divisas__currency_container_img}></div>*/}
                  <p className={styles.divisas__currency_title}>OLP</p>
                </div>
              </div>

            </div>

            <div className={styles.operacion}>
              <div className={styles.operacion_container_title}>
                <p className={styles.operacion__title}>2. Selecciona el tipo de operación:</p>
              </div>

              <div className={styles.operacion__container_types}>
                <div className={styles.operacion__container_type}>
                  <div className={`${styles.operacion__types} ${!selected ? styles[cssShadow] : ''}`}
                       onClick={() => handleCheck(1)}
                  >
                    <div className={styles.operacion__type_icon}>
                      <img className={styles.operacion__type_img} src={IconDinner} alt="Icono Dinero"/>
                    </div>
                    <p className={styles.operacion__type_text}
                    >
                      Comprar dólares
                    </p>
                  </div>
                  <p className={styles.operacion__type_change_text}>Tipo de cambio $19.25 MXN</p>
                </div>

                <div className={styles.operacion__container_type}>
                  <div className={`${styles.operacion__types} ${selected ? styles[cssShadow] : ''}`}
                       onClick={() => handleCheck(2)}
                  >
                    <div className={styles.operacion__type_icon}>
                      <img className={styles.operacion__type_img} src={IconDinner} alt="Icono Dinero"/>
                    </div>
                    <p className={styles.operacion__type_text}>Vender mis dólares</p>
                  </div>
                  <p className={styles.operacion__type_change_text}>Tipo de cambio $18.85 MXN</p>
                </div>
              </div>
            </div>

            <div className={styles.dollars}>
              <div className={styles.dollars__container_title}>
                <p className={styles.dollars__title}>3. ¿Cuántos dólares quieres comprar?</p>
              </div>

              <div className={styles.dollars__container_info}>
                {/*<p className={styles.dollars__quantity}>*/}
                <InputLabelText
                  label={''}
                  icon={faDollarSign}
                  isIconEnabled={true}
                  value={value}
                  onChangeValue={(e) => handleChangeValue(e)}
                />
                {/*</p>*/}
                {/*<p className={styles.dollars__quantity}>0 usd</p>*/}
                <p className={styles.dollars__quantity_total}>Vas a pagar: <span
                  className={styles.dollars__quantity_total_bold}>{calculatedValue} MXN</span></p>
                <p className={styles.dollars__quantity_clients}>Precio a clientes $19.05 MXN</p>
                <p className={styles.dollars__quantity_app}>Precio en App $19.25 MXN</p>
                <p className={styles.dollars__quantity_sucursal}>Precio en sucursal $19.35* MXN</p>
              </div>

              <div className={styles.dollars__container_button}>
                <button onClick={handleClickContinue} type="button" className={styles.dollars__button}>Continuar
                </button>
                <p>*Precio informativo. Consulta sucursal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GenerateOperation
