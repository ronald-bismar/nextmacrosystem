import React from "react";
import letra_logo from "../../assets/images/letras-logo.png";
import logo from "../../assets/images/logo.png";
import "../../styles/cabecera/Logo.css";

function Logo() {
  return (
    <div className="logo-completo">
      <img className="logo" src={logo} alt="Logo Pagina" />
      <img className="letras-logo" src={letra_logo} alt="Logo Pagina" />
    </div>
  );
}
export default Logo;
