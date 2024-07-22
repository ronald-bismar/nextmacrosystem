import React from "react";
import Logo from "./cabecera/Logo";
import Navbar from "./cabecera/Navbar";
import '../styles/Cabecera.css';

function Cabecera() {
  return (
    <header className="cabecera">
      <Logo></Logo>
      <Navbar></Navbar>
    </header>
  );
}
export default Cabecera;
