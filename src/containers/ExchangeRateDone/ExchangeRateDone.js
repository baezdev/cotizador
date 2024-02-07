import styles from './ExchangeRateDone.module.css'
import flagUsd from '../../assets/images/usd-flag.png'
import LabelExchangeRate from "../../commons/components/LabelExchangeRate/LabelExchangeRate";
import LogOut from "../../commons/components/LogOut/LogOut";
import {useNavigate} from "react-router-dom";
import ColorRoundedButton from "../../commons/components/ColorRoundedButton/ColorRoundedButton";

const ExchangeRateDone = () => {
    const nav = useNavigate();
    const nextPage = () => nav('/compra-y-venta')
    return (
        <>
            <div className={styles.container}>
                <div className={styles.subcontent}>
                    <img className={styles.iconImgs} alt={''} src={flagUsd}/>
                    <span style={{marginTop: '20px'}} className={styles.labelTipoCambio}>Tipo de cambio</span>

                    <div className={styles.pricesContent}>
                        <LabelExchangeRate lugar={'Banco Azteca:'}
                                           tipoCambio={'$ 19.80'}/>
                        <LabelExchangeRate lugar={'Sucursal*:'}
                                           tipoCambio={'$ 19.80'}/>
                        <LabelExchangeRate lugar={'Banca Digital:'}
                                           tipoCambio={'$ 19.80'}/>
                        <LabelExchangeRate lugar={'Clientes de Banco Azteca:'}
                                           tipoCambio={'$ 19.80'}/>
                    </div>
                    <span className={styles.pricesSub}>Precios sujetos a tu ubicación*</span>


                    <span className={styles.labelTipoCambio}>Sólo necesitas</span>
                    <span
                        className={styles.llenaDatos}>Llenar los siguientes datos para ofrecerte una mejor opción</span>
                    <div style={{marginTop: '8vh'}}>
                        <ColorRoundedButton label={'Continuar'}
                                            handleOnClick={nextPage}/>
                        <LogOut/>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ExchangeRateDone;
