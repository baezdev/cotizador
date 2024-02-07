import styles from './LabelExchangeRate.module.css'
const LabelExchangeRate=({lugar='',tipoCambio=''})=>{

    return(
        <>
            <div className={styles.contenLabel}>
                <span className={styles.labelLugar}>{lugar}</span>
                <span className={styles.labelPrecio}>{tipoCambio}</span>
            </div>
        </>
    )

}

export default LabelExchangeRate
