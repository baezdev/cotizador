import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Tesseract from 'tesseract.js'
import {Camera, CameraResultType} from '@capacitor/camera'

import Instructions from './Instructions/Slider/Instructions'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'
import {extraerInformacionINE} from '../Scanner/utilities/extraerinfo'

import styles from './TestAlive.module.css'

const TestAlive = () => {

  const videoRef = useRef(null)
  const [showInst, setShowInst] = useState(true)

  const [imageSrc, setImageSrc] = useState('')
  const [ocrResult, setOcrResult] = useState('')
  const [informacionINE, setInformacionINE] = useState(null) // Estado para almacenar la información del INE

  const leerTextoDesdeImagen = async (base64Image) => {
    try {
      const imageBytes = Uint8Array.from(atob(base64Image), (c) =>
        c.charCodeAt(0)
      )
      const result = await Tesseract.recognize(imageBytes, 'eng', {
        logger: (m) => console.log(m)
      })

      return result.data.text
    } catch (error) {
      console.error('Error al leer el texto de la imagen:', error)
      return null
    }
  }

  const tomarFoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64
      })

      const urlImg = image.base64String
      setImageSrc(urlImg)

      // Llama a la función para leer el texto desde la imagen
      const textoEnImagen = await leerTextoDesdeImagen(urlImg)
      console.log('Texto en la imagen:', textoEnImagen)


      // Procesa el texto y extrae la información relevante
      const infoINE = extraerInformacionINE(textoEnImagen)

      // Almacena la información en el estado
      setInformacionINE(infoINE)

      // Establece el resultado del OCR en el estado
      setOcrResult(textoEnImagen)

      // Navega a la siguiente página
      nextPage()
    } catch (error) {
      console.error('Error al capturar la foto:', error)
    }
  }

  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 700
      }
    }).then((stream) => {
      let video = videoRef.current
      video.srcObject = stream
      video.play()
    }).catch((error) => {
      console.log(error.mediaDevices)
    })
  }

  useEffect(() => {
    if (!showInst) getVideo()
  }, [videoRef, showInst])

  const nav = useNavigate()
  const nextPage = () => nav('/generate-operation')
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontent}>
          {showInst ?
            (
              <>
                <Instructions/>
                {/* <div style={{marginTop: '20px'}}> */}
                <div className={styles.container_buttons}>
                  <ColorRoundedButton label={'Continuar'}
                                      handleOnClick={() => setShowInst(false)}/>
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
                {/* <div style={{marginTop: '30px'}}> */}
                <div className={styles.container_buttons}>
                  <ColorRoundedButton label={'Continuar'}
                                      handleOnClick={nextPage}/>
                </div>

              </>
            )}
        </div>
      </div>
    </>
  )
}
export default TestAlive
