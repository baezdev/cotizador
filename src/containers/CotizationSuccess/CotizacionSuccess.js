import styles from './CotizacionSuccess.module.css'
import QR from '../../assets/images/qr.png'
import { useNavigate } from 'react-router-dom'

const CotizacionSuccess = () => {

  const navigate = useNavigate()
  const handleContinue = () => {
    console.log('Cambio ruta')
    navigate('/cambio')
  }

  return (
    <div className={styles.cotizacion}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.title}>Cotización exitosa</p>
        </header>
        <main className={styles.main}>
          <article className={styles.article_up}>
            <p className={styles.text}>Acude a tu sucursal más cercana de Banco Azteca y muestra este QR al cajero que te atienda.</p>
          </article>

          <div className={styles.container_img} onClick={handleContinue}>
            <img className={styles.image} src={QR} alt='Imagen QR' />
          </div>

          <article className={styles.article_down}>
            <p className={styles.text}>Recibes: $8 USD en efectivo</p>
            <p className={styles.text}>Pagas: $143.84 MXN en efectivo</p>
            <p className={styles.text}>Tipo de cambio: $17.98 </p>
          </article>
        </main>
        <footer className={styles.footer}>
          <p className={styles.text}>Recuerda que solamente tú puedes realizar esta transacción.</p>
        </footer>
      </div>
    </div>
  )
}

export default CotizacionSuccess