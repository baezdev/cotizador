import styles from './Instructions.module.css'
import personaFrente from '../../../../assets/images/personaFrente.png'
import personaSombra from '../../../../assets/images/personaSombra.png'
import personaAccesorio from '../../../../assets/images/personaAccesorio.png'
import {useEffect, useState} from "react";


const Instructions = ({slideNum = 0}) => {

    const sliderOpc = [
        {
            instruccion: "Mantén la cámara a la altura de tus ojos.",
            title: "De frente a la cámara"
        },
        {
            instruccion: "Tu rostro debe verse sin sombras ni brillos. Evita colocarte de espaldas a la luz.",
            title: "Evita sombras"
        },
        {
            instruccion: "Tu rostro debes estar sin accesorios como: lentes, gorra, cubrebocas, audífonos, diademas, etc.",
            title: "Sin accesorios"
        }
    ]
    const [num, setNum] = useState(slideNum);
    const handleOnChangeDot = (lugar) => {
        setNum(lugar)
    }

    useEffect(() => {

        setInterval(() => {
            num === 2 ? setNum(0) : setNum(num + 1)
        }, 4000)

    });
    return (
        <>
            <span className={styles.title}>Sigue las recomendaciones</span>
            <img alt={''} src={num === 0 ? personaFrente : num === 1 ? personaSombra : personaAccesorio}
                 className={styles.imgInstrucciones}/>
            <div style={{
                minHeight: '175px',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                transition: ' .3s ease all '
            }}>
                <span className={styles.subTitulo}>{sliderOpc[num].title}</span>
                <span className={styles.instrucciones}>{sliderOpc[num].instruccion}</span>
            </div>
            <div className={styles.contentDots}>
                <span className={num === 0 ? styles.dot : styles.dotDisabled}
                      onClick={() => handleOnChangeDot(0)}></span>
                <span className={num === 1 ? styles.dot : styles.dotDisabled}
                      onClick={() => handleOnChangeDot(1)}></span>
                <span className={num === 2 ? styles.dot : styles.dotDisabled}
                      onClick={() => handleOnChangeDot(2)}></span>
            </div>

        </>
    )
}
export default Instructions;
