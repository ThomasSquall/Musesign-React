import React from 'react'

import PropTypes from 'prop-types'

import './progetto-fase-2.css'

const ProgettoFase2 = (props) => {
  return (
    <div className={`progetto-fase-2-container ${props.rootClassName} `}>
      <div className="progetto-fase-2-container01">
        <div className="progetto-fase-2-container02">
          <h1 className="progetto-fase-2-text">{props.heading}</h1>
          <span className="progetto-fase-2-text01">{props.text}</span>
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="progetto-fase-2-image"
          />
        </div>
        <div className="progetto-fase-2-container03">
          <div className="progetto-fase-2-container04">
            <span className="progetto-fase-2-text02">{props.text1}</span>
            <input
              type="text"
              placeholder={props.textinput_placeholder}
              className="progetto-fase-2-textinput input"
            />
            <span className="progetto-fase-2-text03">{props.text11}</span>
          </div>
          <div className="progetto-fase-2-container05">
            <span className="progetto-fase-2-text04">{props.text12}</span>
            <textarea
              placeholder={props.textarea_placeholder}
              className="progetto-fase-2-textarea textarea"
            ></textarea>
            <span className="progetto-fase-2-text05">{props.text111}</span>
          </div>
          <div className="progetto-fase-2-container06">
            <span className="progetto-fase-2-text06">{props.text121}</span>
            <div className="progetto-fase-2-container07">
              <div className="progetto-fase-2-container08">
                <input type="checkbox" checked="true" className="" />
                <span className="progetto-fase-2-text07">{props.text2}</span>
              </div>
              <div className="progetto-fase-2-container09">
                <input type="checkbox" checked="true" className="" />
                <span className="progetto-fase-2-text08">{props.text21}</span>
              </div>
            </div>
          </div>
          <div className="progetto-fase-2-container10">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="progetto-fase-2-image1"
            />
            <span className="progetto-fase-2-text09">{props.text3}</span>
          </div>
          <div className="progetto-fase-2-container11">
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="progetto-fase-2-image2"
            />
            <button className="progetto-fase-2-button button">
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProgettoFase2.defaultProps = {
  text3:
    'Includi tutti i dettagli necessari per completare la tua richiesta. Trascina e rilascia qui qualsiasi immagine, audio o documento a supporto della descrizione del tuo progetto.  (grandezza massima del file: 200 MB).',
  rootClassName: '',
  text11:
    'Dai molta importanza al titolo del tuo progetto, questo sarà la prima cosa che vedranno i candidati musesigners. Dagli valore!',
  textinput_placeholder: 'Dai un nome al tuo progetto',
  image_src: '/playground_assets/group%20825-200h.png',
  text: 'Gentile cliente sei pronto/a a metterti in contatto con i nostri talentuosi musesigners?  Raccontaci brevemente della tua azienda e compila attentamente il seguente modulo con la procedura guidata.',
  text12: 'Descrivi il tuo progetto; aggiungi quanti più dettagli possibili',
  button: 'Successivo',
  image_alt3: 'image',
  image_alt: 'image',
  image_src4: '/playground_assets/group%20796-200h.png',
  text2: 'Italiano',
  text21: 'English',
  heading: 'Dicci di cosa hai bisogno',
  text111: '6000 caratteri rimanenti (min. 100 caratteri)',
  text1: 'Scegli un titolo per il tuo progetto',
  image_alt4: 'image',
  textarea_placeholder: 'Descrivi il tuo progetto qui...',
  image_src3: '/playground_assets/rectangle%20415-400h.png',
  text121: 'In quale lingua stai descrivendo la tua proposta?',
}

ProgettoFase2.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text12: PropTypes.string,
  button: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt: PropTypes.string,
  image_src4: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  heading: PropTypes.string,
  text111: PropTypes.string,
  text1: PropTypes.string,
  image_alt4: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  image_src3: PropTypes.string,
  text121: PropTypes.string,
}

export default ProgettoFase2
