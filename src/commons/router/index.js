import React from 'react'

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LogIn from '../../containers/LogIn/LogIn'
import ExchangeRate from '../../containers/ExchangeRate/ExchangeRate'
import Benefits from '../../containers/Benefits/Benefits'
import Ids from '../../containers/Ids/Ids'
import ScannerId from '../../containers/Scanner/ScannerId'
import Onboarding from '../../containers/Onboarding/Onboarding'
import TestAlive from '../../containers/TestAlive/TestAlive'
import GenerateOperation from '../../containers/GenerateOperation/GenerateOperation'
import CotizacionSuccess from '../../containers/CotizationSuccess/CotizacionSuccess'
import BuySale from '../../containers/BuySale/BuySale'
import TakePicture from '../../containers/TakePicture/TakePicture'
import VerifyNumber from '../../containers/VerifyNumber/VerifyNumber'
import CodeConfirmation from '../../containers/CodeConfirmation/CodeConfirmation'
import UpdateNumber from '../../containers/UpdateNumber/UpdateNumber'
import UpdateMessage from '../../containers/UpdateMessage/UpdateMessage'
import Success from '../../containers/Success/Success'

const AppRouter = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/cambio" element={<ExchangeRate/>}/>
            <Route path="/beneficios" element={<Benefits/>}/>
            <Route path={'/selectId'} element={<Ids/>}/>
            <Route path={'/scannerIds'} element={<ScannerId/>}/>
            <Route path={'/onboarding'} element={<Onboarding/>}/>
            <Route path={'/testAlive'} element={<TestAlive/>}/>
            <Route path={'/generate-operation'} element={<GenerateOperation/>}/>
            <Route path={'/cotization-success'} element={<CotizacionSuccess/>}/>
            {/* <Route path={'/cambio2'} element={<ExchangeRateDone/>}/> */}
            <Route path={'/compra-y-venta'} element={<BuySale/>}/>
            <Route path={'/tomar-foto'} element={<TakePicture/>}/>
            <Route path={'/verify-number'} element={<VerifyNumber/>}/>
            <Route path={'/code-confirmation'} element={<CodeConfirmation/>}/>
            <Route path={'/update-number'} element={<UpdateNumber/>}/>
            <Route path={'/updated-message'} element={<UpdateMessage/>}/>
            <Route path={'/success'} element={<Success/>}/>
            <Route path='*' element={<Navigate to='/cambio'/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default AppRouter
