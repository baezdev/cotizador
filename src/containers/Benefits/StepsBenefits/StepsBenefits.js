import styles from './StepsBenefits.module.css'

const StepsBenefits = ({data = []}) => {
    return (
        <>
            {data.map((item, idx) => {
                console.log(item)
                return (
                    <div key={item.description} className={styles.contentStep}>
                        <div className={styles.greenTag}>
                            <span>{idx + 1}</span>
                        </div>
                        <span style={{textAlign: 'left'}} className={styles.texto}>{item.description}</span>
                    </div>
                )
            })}
        </>

    )
}
export default StepsBenefits
