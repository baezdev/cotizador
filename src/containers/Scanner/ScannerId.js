import React, {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Camera, CameraResultType} from '@capacitor/camera'

import ButtonWhiteGreenText from '../../commons/components/ButtonWhiteGreenText/ButtonWhiteGreenText'
import ColorRoundedButton from '../../commons/components/ColorRoundedButton/ColorRoundedButton'
import { performOcrRequest } from '../../commons/network/lib/karalundi'
import { ThreeDots } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import delanteraIne from '../../assets/images/ine_front.png'
import traseraIne from '../../assets/images/ine_back.png'

import styles from './ScannerId.module.css'

const ScannerId = ({tipoId = 3}) => {
  const nav = useNavigate()

  const [showBack, setShowBack] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  const [spinnerVisible, setSpinnerVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  const imageRef = useRef(null)

  const nextPage = () => nav('/onboarding')
  const nextPageData = (data) => {
    nav('/onboarding',  { state: data })
  }
  const instFoto = () => nav('/testAlive')

  const showErrorToast = (message) => {
    toast.error(message, {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    })
  }

  const tomarFoto = async () => {
    try {
      toast.dismiss()

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64
      })

      const urlImg = image.base64String
      setImageSrc(urlImg)
      setImageError(false)
      setSpinnerVisible(true)
      const response = await performOcrRequest({ id: image.base64String })
      setSpinnerVisible(false)

      if (response?.estatus === 'ERROR') {
        showErrorToast('Se produjo un error al procesar la información. Por favor, intenta cargar la imagen nuevamente.')
        setImageError(true)
        console.log(response?.mensaje)
      } else {
        nextPageData(response)
      }

    } catch (error) {
      showErrorToast('Se produjo un error. Por favor, intentalo nuevamente.')
      setSpinnerVisible(false)
      console.error('Error al capturar la foto:', error)
    }
  }

  return (
    <>
    <ToastContainer />
      <div className={styles.container}>
        <div className={styles.subcontent}>
          <div className={styles.container_titles}>
            <p className={styles.titulo}>Identificación</p>
            <p className={styles.subtitulo}>
              {showBack ? 'Parte posterior' : 'Parte delantera'}
            </p>
          </div>
          <img
            className={styles.imgs}
            alt={''}
            src={showBack ? traseraIne : delanteraIne}
          />
          <div
            className={`${styles.imgs} ${imageError && styles.error}`}
            onClick={tomarFoto}
          >
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='#4fa94d'
              ariaLabel='three-dots-loading'
              wrapperClass={styles.spinner}
              visible={spinnerVisible}
            />
            {!imageSrc
            ?
            <img
              alt={''}
              src={'https://dummyimage.com/600x400/000/fff'}
            />
            :
            <img
              ref={imageRef}
              alt={''}
              src={'data:image/png;base64,' + imageSrc}
            />
          }
          </div>
          <span className={`${styles.intrucciones} ${imageError && styles.error}`}>
            Toma una fotografía con una buena iluminación, enfoque y que esté
            centrada en el recuadro.
          </span>
          <div className={styles.container_buttons}>
            <div className={styles.button}>
              <ButtonWhiteGreenText
                label={'Llenar manualmente'}
                handleOnClick={() => nextPage()}
                icon={true}
              />
            </div>
            <div className={styles.button}>
              <ColorRoundedButton
                label={'Tomar foto'}
                handleOnClick={instFoto}
                // handleOnClick={tomarFoto}
                //className={imageError ? styles.disabled : ''}
                className={styles.disabled}
              />
            </div>
            {/* {ocrResult && (
              <div>
                <h2>Resultado del OCR:</h2>
                <p>{ocrResult}</p>
              </div>
            )} */}

            {/* {informacionINE && (
              <div>
                <h2>Información del INE:</h2>
                <p>Nombre: {informacionINE.nombre}</p>
                <p>Sexo: {informacionINE.sexo}</p>
                <p>Dirección: {informacionINE.direccion}</p>
                <p>CURP: {informacionINE.curp}</p>
                <p>Vigencia: {informacionINE.vigencia}</p>
                <p>Clave Elector: {informacionINE.claveElector}</p>
              </div>
            )} */}
            {/* Agrega más campos aquí según tus necesidades */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ScannerId
