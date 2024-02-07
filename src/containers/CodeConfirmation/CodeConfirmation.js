import {useNavigate} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'

import ButtonWhiteGreenText from '../../commons/components/ButtonWhiteGreenText/ButtonWhiteGreenText'

import styles from './CodeConfirmation.module.css'

const CodeConfirmation = () => {
  const navigation = useNavigate()

  const inputRefOne = useRef(null)
  const inputRefTwo = useRef(null)
  const inputRefThree = useRef(null)
  const inputRefFour = useRef(null)
  const inputRefFive = useRef(null)
  const inputRefSix = useRef(null)

  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')

  const handleNumber = (event) => {
    const val = event.target.value
    if (!isNaN(val)) {
      setValue6(val)
      return navigation('/success')
    }
  }

  const handleClick = (event, pos) => {
    const val = event.target.value
    if (!isNaN(val)) {
      if (event.key !== 'Backspace') {
        switch (+pos) {
          case 1:
            inputRefTwo.current.focus()
            setValue1(val)
            break
          case 2:
            inputRefThree.current.focus()
            setValue2(val)
            break
          case 3:
            inputRefFour.current.focus()
            setValue3(val)
            break
          case 4:
            inputRefFive.current.focus()
            setValue4(val)
            break
          case 5:
            inputRefSix.current.focus()
            setValue5(val)
            break
        }
      }
    }
  }

  useEffect(() => {
    inputRefOne.current.focus()
  }, [])

  return (
    <div className={styles.codeconfirmation}>
      <div className={styles.codeconfirmation_container}>
        <header className={styles.header}>
          <p className={styles.text}>X<span>Código de confirmación</span></p>
          <p className={styles.text2}>Ingresa el código de confirmación que recibiste al número ******5434</p>
        </header>

        <main className={styles.main}>
          <div>
            <div className={styles.code_container}>
              {/*<input type="text" inputMode="tel" id="tlfn" name="tlfn"/>*/}
              <input type="number"
                     ref={inputRefOne}
                     inputMode="tel"
                     maxLength={1}
                     value={value1}
                     className={styles.code_input}
                     onChange={(e) => handleClick(e, 1)}
              />
              <input type="number"
                     ref={inputRefTwo}
                     inputMode="tel"
                     maxLength={1}
                     value={value2}
                     className={styles.code_input}
                     onChange={(e) => handleClick(e, 2)}
              />
              <input type="number"
                     ref={inputRefThree}
                     inputMode="tel"
                     maxLength={1}
                     value={value3}
                     className={styles.code_input}
                     onChange={(e) => handleClick(e, 3)}
              />
              <input type="number"
                     ref={inputRefFour}
                     inputMode="tel"
                     maxLength={1}
                     value={value4}
                     className={styles.code_input}
                     onChange={(e) => handleClick(e, 4)}
              />
              <input type="number"
                     ref={inputRefFive}
                     inputMode="tel"
                     maxLength={1}
                     value={value5}
                     className={styles.code_input}
                     onChange={(e) => handleClick(e, 5)}
              />
              <input type="number"
                     ref={inputRefSix}
                     inputMode="tel"
                     maxLength={1}
                     value={value6}
                     className={styles.code_input}
                     onChange={(e) => handleNumber(e)}
              />
            </div>
            <div className={styles.code_number}>
              Son 6 números
            </div>
          </div>
          {/* <button>Reenviar Código</button> */}
        </main>
        <footer style={{padding: '20px'}}>
          <ButtonWhiteGreenText
            label={'1:30  | Reenviar Código'}
            icon={true}
            upperCase={true}
          />
          <ButtonWhiteGreenText
            label={'No tengo acceso al código'}
            upperCase={true}
          />
        </footer>
      </div>
    </div>
  )
}

export default CodeConfirmation