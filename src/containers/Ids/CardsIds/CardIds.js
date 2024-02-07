import React from 'react'

import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIdBadge, faIdCard} from "@fortawesome/free-solid-svg-icons";

import styles from './CardsIds.module.css'

const CardIds = ({identificaciones = []}) => {
  const idPasaporte = 2;
  const nav = useNavigate();
  const toScan = () => nav('/scannerIds')
  return (
    <>
      {identificaciones.map((identificacion, idx) => {
        return (
          <React.Fragment key={`id_${idx}`}>
            <div className={styles.cardIds} onClick={toScan}>
              <div className={styles.iconIds}>
                <FontAwesomeIcon icon={identificacion.id === idPasaporte ? faIdBadge : faIdCard}/>
              </div>
              <span className={styles.description}>{identificacion.descripcion}</span>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CardIds
