import {useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'

import CardIds from './CardsIds/CardIds'

import styles from './Ids.module.css'

const Ids = () => {
  const identificaciones = [
    {
      id: 1,
      descripcion: 'INE'
    },
    {
      id: 2,
      descripcion: 'Pasaporte'
    }
  ]

  const nav = useNavigate()
  const goBack = () => nav('/beneficios')

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div
            className={styles.header}
            onClick={goBack}
          >
            <FontAwesomeIcon icon={faCaretLeft}/>
            <span style={{marginLeft: '10px'}}>Identificación</span>
          </div>

          <span className={styles.titulo}>Elige el tipo de identificación</span>
          <CardIds identificaciones={identificaciones}/>
        </div>
      </div>
    </>
  )
}
export default Ids
