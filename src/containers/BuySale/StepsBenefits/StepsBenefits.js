import styles from './StepsBenefits.module.css'

const StepsBenefits = ({data = []}) => {
    return (
        <>
            {data.map((item, idx) => {
                return (
                    <div className={styles.contentStep}>
                        <div className={styles.greenTag}>
                            <span style={{padding: '5px'}}>{idx + 1}</span>
                        </div>
                        <span style={{textAlign: 'left'}} className={styles.texto}>{item.description}</span>
                    </div>
                )
            })}
        </>

    )
}
export default StepsBenefits
