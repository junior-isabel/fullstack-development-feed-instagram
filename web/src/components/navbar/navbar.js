import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import Logo from '../../assets/logo.svg'
import Camera from '../../assets/camera.svg'

export default () => {
  return (
    <div className="main-header">
      <div className="content-header">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/new">
          <img src={Camera} alt="camara"/>
        </Link>
      </div>
    </div>
  )
}