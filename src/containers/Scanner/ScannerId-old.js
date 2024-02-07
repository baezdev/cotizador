import {useState} from "react";
import delanteraIne from '../../assets/images/ine_front.png'
import traseraIne from '../../assets/images/ine_back.png'
import styles from "./ScannerId.module.css";
import ButtonWhiteGreenText from "../../commons/components/ButtonWhiteGreenText/ButtonWhiteGreenText";
import ColorRoundedButton from "../../commons/components/ColorRoundedButton/ColorRoundedButton";
import {Camera, CameraResultType} from '@capacitor/camera';
import {useNavigate} from "react-router-dom";
import Tesseract from 'tesseract.js';


const ScannerId = ({tipoId = 3}) => {
    const [showBack, setShowBack] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const nav = useNavigate();
    const nextPage = () => nav('/onboarding')


    const leerTextoDesdeImagen = async (base64Image) => {
        try {
          const imageBytes = Uint8Array.from(atob(base64Image), c => c.charCodeAt(0));
          const result = await Tesseract.recognize(imageBytes, 'eng', {
            logger: (m) => console.log(m),
          });
      
          return result.data.text;
        } catch (error) {
          console.error('Error al leer el texto de la imagen:', error);
          return null;
        }
    };

    const tomarFoto = async () => {
        try {
          const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Base64,
          });
      
          const urlImg = image.base64String;
          setImageSrc(urlImg);
      
          // Llama a la función para leer el texto desde la imagen
          const textoEnImagen = await leerTextoDesdeImagen(urlImg);
          console.log('Texto en la imagen:', textoEnImagen);
      
          // Navega a la siguiente página
          nextPage();
        } catch (error) {
          console.error('Error al capturar la foto:', error);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.subcontent}>
                    <span className={styles.titulo}>Identificación</span>
                    <span className={styles.subtitulo}>{showBack ? 'Parte posterior' : 'Parte delantera'}</span>
                    <img className={styles.imgs} alt={''} src={showBack ? traseraIne : delanteraIne}/>
                    <img className={styles.imgs} alt={''} src={'data:image/png;base64,' + imageSrc}/>
                    <span className={styles.intrucciones}>
                        Toma una fotografía con una buena iluminación, enfoque y que esté centrada en el recuadro.
                    </span>
                    <div style={{marginTop: '8vh'}}>
                        <div style={{marginBottom: '30px'}}>
                            <ButtonWhiteGreenText label={'Llenar manualmente'}
                                                  handleOnClick={() => nextPage()}/>
                        </div>
                        <div style={{marginBottom: '30px'}}>
                            <ColorRoundedButton label={'Tomar foto'}
                                                handleOnClick={tomarFoto}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScannerId;
