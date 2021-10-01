import React from "react";
import {SDivRoot,SDivLinks} from "./customstyled"
import BaseLayout from "components/layout/BaseLayout";
import {  Link } from "react-router-dom";
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
            <li> <a href="/gobernanzza-app/pantalla-principal" >1.- Pantalla Principal</a></li>
            <li><a href="/gobernanzza-app/crear-cuenta" >2.- 02. Crear Cuenta</a></li>
            <li><a href="/gobernanzza-app/cuenta-creada-con-exito" >3.- 03. Crear cuenta con éxito</a></li>
            <li><a href="/gobernanzza-app/inicio-usuario-sin-coop" >4.- Inicio “usuario sin coop”</a></li>
            <li><a href="/gobernanzza-app/buscador-de-coop" >5.- Buscador de Coop. 1</a></li>
          </ul>
        </SDivLinks>
    </BaseLayout>
    
  );
}
export default Root;
