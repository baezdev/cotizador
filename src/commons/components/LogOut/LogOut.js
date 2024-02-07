import {useNavigate} from 'react-router-dom'

import ButtonWhiteGreenText from '../ButtonWhiteGreenText/ButtonWhiteGreenText'

const LogOut = () => {
  const navigate = useNavigate()
  const leave = () => navigate('/')

  return (
    <>
      <ButtonWhiteGreenText
        label={'Salir'}
        handleOnClick={leave}
      />
    </>
  )
}
export default LogOut
