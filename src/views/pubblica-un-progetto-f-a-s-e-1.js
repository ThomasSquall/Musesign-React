import React from 'react'

import { Helmet } from 'react-helmet'

import HEADERDASISTEMAREMOBILECustomCode from '../components/h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code'
import ProgettoFase1 from '../components/progetto-fase-1'
import FOOTERFINAL51022 from '../components/f-o-o-t-e-r-f-i-n-a-l-51022'
import './pubblica-un-progetto-f-a-s-e-1.css'

const PubblicaUnProgettoFASE1 = (props) => {
  return (
    <div className="pubblica-un-progetto-f-a-s-e1-container">
      <Helmet>
        <title>Pubblica-un-progetto-FASE-1 - Musesign</title>
        <meta
          property="og:title"
          content="Pubblica-un-progetto-FASE-1 - Musesign"
        />
      </Helmet>
      <HEADERDASISTEMAREMOBILECustomCode rootClassName="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-root-class-name"></HEADERDASISTEMAREMOBILECustomCode>
      <ProgettoFase1 rootClassName="progetto-fase1-root-class-name"></ProgettoFase1>
      <FOOTERFINAL51022 rootClassName="f-o-o-t-e-r-f-i-n-a-l51022-root-class-name"></FOOTERFINAL51022>
    </div>
  )
}

export default PubblicaUnProgettoFASE1
