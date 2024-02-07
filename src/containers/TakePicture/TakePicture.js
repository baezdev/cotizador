import styles from "./TakePicture.module.css";
import Instructions from "./Instructions/Slider/Instructions";
import {useEffect, useRef, useState} from "react";
import ColorRoundedButton from "../../commons/components/ColorRoundedButton/ColorRoundedButton";
import {useNavigate} from "react-router-dom";

const TakePicture = () => {

    const videoRef = useRef(null);
    const [showInst, setShowInst] = useState(true);
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 700
            }
        }).then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch((error)=>{
            console.log(error.mediaDevices)
        })
    }

    useEffect(() => {
        if (!showInst) getVideo()

    }, [videoRef, showInst])

    const nav = useNavigate();
    const nextPage = () => {
        nav('/verify-number')
        console.log('Siguiente')
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.subcontent}>
                    {showInst ?
                        (
                            <>
                                <Instructions/>
                                <div style={{marginTop: '20px'}}>
                                    <ColorRoundedButton label={'Continuar'}
                                                        handleOnClick={() => {
                                                            console.log('Activando camara')
                                                            setShowInst(false)
                                                        }}/>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <div className={styles.header}>
                                    <div>
                                        <span>Generar prueba de vida</span>
                                    </div>
                                </div>
                                <div className={styles.canvas}>
                                    <video ref={videoRef}/>
                                </div>
                                <div style={{marginTop: '30px'}}>
                                    <ColorRoundedButton label={'Continuar'}
                                                        handleOnClick={nextPage}/>
                                </div>

                            </>
                        )}
                    {/* {showInst &&
                        (
                            <>
                                <div className={styles.header}>
                                    <div>
                                        <span>Generar prueba de vida</span>
                                    </div>
                                </div>
                                <div className={styles.canvas}>
                                    <video ref={videoRef}/>
                                </div>
                                <div style={{marginTop: '30px'}}>
                                    <ColorRoundedButton label={'Continuar'}
                                                        handleOnClick={nextPage}/>
                                </div>

                            </>
                        )} */}

                </div>
            </div>
        </>
    )
}
export default TakePicture
