import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import logo from "../images/logo.png"
const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Innovacción Virtual</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Un verano perfecto para prepararte en temas de la nube y obtener la certificación internacional Microsoft Azure AZ 900.
    </p>
    <a href ="https://aka.ms/cicloespecializado" target="_blank">
    <Button>Registro</Button>
    </a>
    <div
        style={{
          position: "relative",
          width: "250px",
          top: 60,
        }}
      >
         <img
          src={logo}
          alt=" "
        /> 
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
