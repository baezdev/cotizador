import styles from './ColorRoundedButton.module.css'

const ColorRoundedButton = ({label, handleOnClick, ...props}) => {
    const buttonClassName = `${styles.btn} ${props.className || ''}`;
    return (
        <>
            <div className={styles.container_button}>
                <button onClick={handleOnClick}
                        className={buttonClassName}>
                    {label}
                </button>
            </div>
        </>
    )
}

export default ColorRoundedButton
