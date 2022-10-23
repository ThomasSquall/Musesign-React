import React from 'react'

import PropTypes from 'prop-types'

import DesktopFooter from './desktop-footer'
import FOOTERMOBILE991px from './f-o-o-t-e-r-m-o-b-i-l-e-991px'
import './f-o-o-t-e-r-f-i-n-a-l-51022.css'

const FOOTERFINAL51022 = (props) => {
  return (
    <div
      className={`f-o-o-t-e-r-f-i-n-a-l-51022-container ${props.rootClassName} `}
    >
      <DesktopFooter
        rootClassName="desktop-footer-root-class-name"
        className=""
      ></DesktopFooter>
      <FOOTERMOBILE991px
        rootClassName="f-o-o-t-e-r-m-o-b-i-l-e991px-root-class-name"
        className=""
      ></FOOTERMOBILE991px>
    </div>
  )
}

FOOTERFINAL51022.defaultProps = {
  rootClassName: '',
}

FOOTERFINAL51022.propTypes = {
  rootClassName: PropTypes.string,
}

export default FOOTERFINAL51022
