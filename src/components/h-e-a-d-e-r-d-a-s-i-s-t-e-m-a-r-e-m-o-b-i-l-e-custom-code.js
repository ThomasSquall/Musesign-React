import React from 'react'

import PropTypes from 'prop-types'

import './h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code.css'

const HEADERDASISTEMAREMOBILECustomCode = (props) => {
  return (
    <div
      className={`h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-container ${props.rootClassName} `}
    >
      <div className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-container1">
        <div className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-image"
          />
        </div>
        <div className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-container3">
          <a
            href={props.link_text}
            target="_blank"
            rel="noreferrer noopener"
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-link"
          >
            {props.text}
          </a>
          <a
            href={props.link_text1}
            target="_blank"
            rel="noreferrer noopener"
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-link1"
          >
            {props.text1}
          </a>
          <a
            href={props.link_text11}
            target="_blank"
            rel="noreferrer noopener"
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-link2"
          >
            {props.text11}
          </a>
          <a
            href={props.link_text111}
            target="_blank"
            rel="noreferrer noopener"
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-link3"
          >
            {props.text111}
          </a>
        </div>
        <div className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-container4">
          <a
            href={props.link_text2}
            target="_blank"
            rel="noreferrer noopener"
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-link4"
          >
            {props.text2}
          </a>
          <a
            href={props.link_text12}
            target="_blank"
            rel="noreferrer noopener"
            className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-link5"
          >
            {props.text12}
          </a>
          <button className="h-e-a-d-e-r-d-a-s-i-s-t-e-m-a-r-e-m-o-b-i-l-e-custom-code-button button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  )
}

HEADERDASISTEMAREMOBILECustomCode.defaultProps = {
  button: 'Pubblica un progetto',
  text1: 'Elenco dei Lavori',
  text2: 'Accedi',
  link_text111: 'https://example.com',
  text111: 'Musesign Academy',
  text: 'Come Funziona',
  image_alt: 'image',
  link_text11: 'https://example.com',
  link_text: 'https://example.com',
  text12: 'Registrati',
  rootClassName: '',
  image_src: '/playground_assets/logo-200h.png',
  text11: 'Musesign Score',
  link_text12: 'https://example.com',
  link_text1: 'https://example.com',
  link_text2: 'https://example.com',
}

HEADERDASISTEMAREMOBILECustomCode.propTypes = {
  button: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  link_text111: PropTypes.string,
  text111: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  link_text11: PropTypes.string,
  link_text: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text11: PropTypes.string,
  link_text12: PropTypes.string,
  link_text1: PropTypes.string,
  link_text2: PropTypes.string,
}

export default HEADERDASISTEMAREMOBILECustomCode
