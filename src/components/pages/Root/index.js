import React from "react";
import {SDivRoot,SDivLinks} from "./customstyled"
import BaseLayout from "components/layout/BaseLayout";
import {Link} from "react-router-dom";
function Root(props) {
  return (    
    <BaseLayout>
        <SDivRoot>
          <img
              src={require("components/assets/img/gobernanzza_log.svg").default}
              alt="Gobernanzza"
            />
        </SDivRoot>
        <SDivLinks>
          <ul>
            <li> <Link to="pantalla-principal">1.- Pantalla Principal</Link></li>
            <li><Link to="crear-cuenta">2.- 02. Crear Cuenta</Link></li>
            <li><Link to="cuenta-creada-con-exito">3.- 03. Crear cuenta con éxito</Link></li>
            <li><Link to="inicio-usuario-sin-coop">4.- Inicio “usuario sin coop”</Link></li>
            <li><Link to="buscador-de-coop">5.- Buscador de Coop. 1</Link></li>
          </ul>
        </SDivLinks>
    </BaseLayout>
    
  );
}
export default Root;
