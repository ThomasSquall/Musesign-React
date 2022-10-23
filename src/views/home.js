import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Musesign</title>
        <meta property="og:title" content="Musesign" />
      </Helmet>
    </div>
  )
}

export default Home
