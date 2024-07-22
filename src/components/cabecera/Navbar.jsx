import React from "react";
import ItemNav from "./ItemNav";
import "../../styles/cabecera/Navbar.css";

function NavBar() {
  return (
    <ul className="navbar">
      <ItemNav name="Inicio" />
      <ItemNav name="Sobre Nosotros" />
      <ItemNav name="Contactos" />
      <ItemNav name="Soluciones" />
      <ItemNav name="Blog" />
    </ul>
  );
}

export default NavBar;
