import React from 'react'

import PropTypes from 'prop-types'

import SocialIcons from './social-icons'
import './desktop-footer.css'

const DesktopFooter = (props) => {
  return (
    <div className={`desktop-footer-container ${props.rootClassName} `}>
      <div className="desktop-footer-container01">
        <div className="desktop-footer-container02">
          <h1 className="desktop-footer-iscriviti-alla-nostra-newsletter">
            {props.heading}
          </h1>
        </div>
        <div className="desktop-footer-container03">
          <div className="desktop-footer-container04">
            <input
              type="text"
              placeholder={props.textinput_placeholder}
              className="desktop-footer-textinput input"
            />
            <button className="desktop-footer-button button">
              {props.button}
            </button>
          </div>
        </div>
      </div>
      <div className="desktop-footer-container05">
        <div className="desktop-footer-container06">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="desktop-footer-image"
          />
          <div className="desktop-footer-container07">
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="desktop-footer-image1"
            />
            <span className="desktop-footer-text">{props.text}</span>
          </div>
          <div className="desktop-footer-container08">
            <img
              alt={props.image_alt31}
              src={props.image_src31}
              className="desktop-footer-image2"
            />
            <span className="desktop-footer-text01">{props.text1}</span>
          </div>
        </div>
        <div className="desktop-footer-container09">
          <h1 className="desktop-footer-text02">{props.heading1}</h1>
          <span className="desktop-footer-text03">{props.text2}</span>
          <span className="desktop-footer-text04">{props.text2111}</span>
          <span className="desktop-footer-text05">{props.text211}</span>
          <span className="desktop-footer-text06">{props.text2115}</span>
          <span className="desktop-footer-text07">{props.text21151}</span>
          <span className="desktop-footer-text08">{props.text2114}</span>
          <span className="desktop-footer-text09">{props.text2112}</span>
          <span className="desktop-footer-text10">{props.text21112}</span>
          <span className="desktop-footer-text11">{props.text211111}</span>
        </div>
        <div className="desktop-footer-container10">
          <h1 className="desktop-footer-text12">{props.heading11}</h1>
          <span className="desktop-footer-text13">{props.text21}</span>
          <span className="desktop-footer-text14">{props.text21111}</span>
          <span className="desktop-footer-text15">{props.text2113}</span>
        </div>
        <div className="desktop-footer-container11">
          <h1 className="desktop-footer-text16">{props.heading111}</h1>
          <span className="desktop-footer-text17">{props.text212}</span>
          <span className="desktop-footer-text18">{props.text211112}</span>
          <span className="desktop-footer-text19">{props.text21131}</span>
        </div>
        <div className="desktop-footer-container12">
          <h1 className="desktop-footer-text20">{props.heading1111}</h1>
          <span className="desktop-footer-text21">{props.text2121}</span>
          <span className="desktop-footer-text22">{props.text2111121}</span>
          <span className="desktop-footer-text23">{props.text211311}</span>
          <span className="desktop-footer-text24">{props.text2113111}</span>
        </div>
      </div>
      <SocialIcons className=""></SocialIcons>
    </div>
  )
}

DesktopFooter.defaultProps = {
  heading111: 'Termini',
  image_alt: 'image',
  image_src3: '/playground_assets/mask%20group%2013.svg',
  button: 'Iscriviti',
  text21112: 'Blog e guide',
  text2114: 'Musesign Academy',
  textinput_placeholder: 'Inserisci la tua mail',
  image_src: '/playground_assets/group%2098.svg',
  text2115: 'Servizi',
  heading1111: 'Assistenza',
  text2112: 'Musesign Showcase',
  text: 'Seleziona la lingua',
  text2111: 'Contest',
  rootClassName: '',
  text212: 'Privacy',
  heading: 'Iscriviti alla nostra Newsletter',
  text2: 'Categorie',
  text2113: 'News',
  text2113111: 'Acquistare su Musesign',
  text2111121: 'Fiducia e Sicurezza',
  text211112: 'Termini e Condizioni',
  heading11: 'Su di noi',
  text21151: 'Musesign Score',
  text211: 'Progetti',
  text211311: 'Vendere su Musesign',
  image_alt3: 'image',
  image_src31: '/playground_assets/mask%20group%2014.svg',
  image_alt31: 'image',
  text21131: 'Normativa sul copyright',
  text211111: 'Categorie',
  text1: 'Aiuto e assistenza',
  text21: 'Chi Siamo',
  text21111: 'Come Funziona',
  heading1: 'Musesign',
  text2121: 'Aiuto e assistenza',
}

DesktopFooter.propTypes = {
  heading111: PropTypes.string,
  image_alt: PropTypes.string,
  image_src3: PropTypes.string,
  button: PropTypes.string,
  text21112: PropTypes.string,
  text2114: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  text2115: PropTypes.string,
  heading1111: PropTypes.string,
  text2112: PropTypes.string,
  text: PropTypes.string,
  text2111: PropTypes.string,
  rootClassName: PropTypes.string,
  text212: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text2113: PropTypes.string,
  text2113111: PropTypes.string,
  text2111121: PropTypes.string,
  text211112: PropTypes.string,
  heading11: PropTypes.string,
  text21151: PropTypes.string,
  text211: PropTypes.string,
  text211311: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src31: PropTypes.string,
  image_alt31: PropTypes.string,
  text21131: PropTypes.string,
  text211111: PropTypes.string,
  text1: PropTypes.string,
  text21: PropTypes.string,
  text21111: PropTypes.string,
  heading1: PropTypes.string,
  text2121: PropTypes.string,
}

export default DesktopFooter
