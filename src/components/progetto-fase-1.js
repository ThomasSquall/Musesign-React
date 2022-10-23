import React from 'react'

import PropTypes from 'prop-types'

import './progetto-fase-1.css'

const ProgettoFase1 = (props) => {
  return (
    <div className={`progetto-fase-1-container ${props.rootClassName} `}>
      <div className="progetto-fase-1-container1">
        <h1 className="progetto-fase-1-text">{props.heading}</h1>
        <span className="progetto-fase-1-text1">{props.text}</span>
        <span className="progetto-fase-1-text2">{props.text1}</span>
        <div className="progetto-fase-1-container2">
          <div className="progetto-fase-1-container3">
            <input
              type="checkbox"
              checked="true"
              className="progetto-fase-1-checkbox"
            />
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="progetto-fase-1-image"
            />
            <span className="progetto-fase-1-text3">{props.text2}</span>
          </div>
          <div className="progetto-fase-1-container4">
            <input
              type="checkbox"
              checked="true"
              className="progetto-fase-1-checkbox1"
            />
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="progetto-fase-1-image1"
            />
            <span className="progetto-fase-1-text4">{props.text21}</span>
          </div>
        </div>
        <div className="progetto-fase-1-container5">
          <div className="progetto-fase-1-container6">
            <input
              type="checkbox"
              checked="true"
              className="progetto-fase-1-checkbox2"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="progetto-fase-1-image2"
            />
            <span className="progetto-fase-1-text5">{props.text22}</span>
          </div>
          <div className="progetto-fase-1-container7">
            <input
              type="checkbox"
              checked="true"
              className="progetto-fase-1-checkbox3"
            />
            <img
              alt={props.image_alt11}
              src={props.image_src11}
              className="progetto-fase-1-image3"
            />
            <span className="progetto-fase-1-text6">{props.text211}</span>
          </div>
        </div>
        <div className="progetto-fase-1-container8">
          <button className="progetto-fase-1-button button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  )
}

ProgettoFase1.defaultProps = {
  image_src1: '/playground_assets/mask%20group%2087-300h.png',
  button: 'Successivo',
  image_src2: '/playground_assets/mask%20group%2088-300h.png',
  text: 'Gentile cliente sei pronto/a a metterti in contatto con i nostri talentuosi musesigners?  Raccontaci brevemente della tua azienda e compila attentamente il seguente modulo con la procedura guidata.',
  text1: "Dimensione dell'azienda",
  image_alt11: 'image',
  text22: 'Da 100 a 1000 dipendenti',
  rootClassName: '',
  image_src: '/playground_assets/mask%20group%2086-300h.png',
  text21: 'Da 10 a 100 dipendenti',
  image_src11: '/playground_assets/mask%20group%2089-300h.png',
  heading: 'Ti diamo il benvenuto in Musesign!',
  image_alt2: 'image',
  image_alt: 'image',
  text2: 'Da 1 a 10 dipendenti',
  image_alt1: 'image',
  text211: 'Più di 1000 dipendenti',
}

ProgettoFase1.propTypes = {
  image_src1: PropTypes.string,
  button: PropTypes.string,
  image_src2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt11: PropTypes.string,
  text22: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text21: PropTypes.string,
  image_src11: PropTypes.string,
  heading: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  text211: PropTypes.string,
}

export default ProgettoFase1
