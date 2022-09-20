import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <h5 className="text">{new Date().getFullYear()} &copy; Derrick Korir - All rights reserved</h5>
    </div>
  )
}

export default Footer