import React from 'react'

import PropTypes from 'prop-types'

import './social-icons.css'

const SocialIcons = (props) => {
  return (
    <div className={`social-icons-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="social-icons-image"
      />
      <img
        alt={props.image_alt11}
        src={props.image_src11}
        className="social-icons-image1"
      />
      <img
        alt={props.image_alt111}
        src={props.image_src111}
        className="social-icons-image2"
      />
    </div>
  )
}

SocialIcons.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  image_alt11: 'image',
  image_src111: '/playground_assets/mask%20group%2011.svg',
  image_src11: '/playground_assets/mask%20group%2012.svg',
  image_src1: '/playground_assets/mask%20group%2010.svg',
  image_alt111: 'image',
}

SocialIcons.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src111: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt111: PropTypes.string,
}

export default SocialIcons
