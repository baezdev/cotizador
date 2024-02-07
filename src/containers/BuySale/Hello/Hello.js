import styles from './Hello.module.css'

export const Hello = ({data = []}) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <div key={`it_${idx}`}
               className={styles.contentStep}>
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
