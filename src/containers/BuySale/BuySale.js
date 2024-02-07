import styles from './BuySale.module.css'
import flagUsd from "../../assets/images/usd-flag.png";
import StepsBenefits from "./StepsBenefits/StepsBenefits";
import ColorRoundedButton from "../../commons/components/ColorRoundedButton/ColorRoundedButton";
import {useNavigate} from "react-router-dom";

const BuySale = () => {
    const nav = useNavigate();
    const nextPage=()=> {
        console.log('F')
        alert('Permitir acceso a camara')
        nav('/tomar-foto')
    }
    const steps = [
        {
            description: "Disminuir el tiempo invertido para operar en la sucursal."
        },
        {
            description: "Mejor tipo de cambio respecto al ofrecido en sucursal."
        },
        {
            description: "Promociones exclusivas"
        },
        {
            description: "Tipo de cambio en:\n Banco Azteca: 19.80\n Sucursal: 19.60\n Banca digital: 19.70"
        },
        {
            description: "Si te vuelves o eres cliente de Banco Azteca te damos 5 centavos más"
        }
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.subcontent}>
                    <img className={styles.iconImgs} alt={''} src={flagUsd}/>
                    <span style={{marginTop: '20px',fontSize:'20px'}} className={styles.labelTitulo}>Compra y venta de divisas</span>
                    <span style={{marginTop: '20px'}} className={styles.labelSubtitulo}>El mejor cambio disponible y seguro para tus operaciones</span>
                    <span style={{marginTop: '10px'}} className={styles.labelTipoCambio}>Beneficios</span>
                    <div>
                        <StepsBenefits data={steps}/>
                    </div>
                    <span style={{marginTop: '10px'}} className={styles.labelTipoCambio}>Sólo necesitas</span>
                    <span style={{marginTop: '20px', fontSize:'15px'}} className={styles.labelTitulo}>Llenar los siguientes datos para ofrecerte una mejor opción</span>

                    <div style={{ marginTop:'20px'}}>
                        <ColorRoundedButton label={'Continuar'}
                                            handleOnClick={nextPage} />
                    </div>

                </div>
            </div>

        </>
    )
}
export default BuySale;
