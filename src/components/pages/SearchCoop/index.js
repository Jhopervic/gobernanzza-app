import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivMenu,SDivLB01,SDivLB02,SDivLB03,SDivSearch,SDivImg} from "./customstyled"
import { SInputText } from "components/styled-components/components";
function SearchCoop(props) {
  

  return (
    <>
      <BaseLayout>
        <SDivMenu><span>Buscar</span>
        <nav>
          <ul>
            <li><a href="/buscador-de-coop"><i className="icon-mail"></i></a></li>
            <li><a href="/buscador-de-coop"><i className="icon-scan"></i></a></li>
            <li><a href="/buscador-de-coop"><i className="icon-menu"></i></a></li>
          </ul>
        </nav>
    </SDivMenu>
   
      <SDivLB01>Buscar cooperativa</SDivLB01>
      <SDivLB02>Para buscar cooperativas dentro de Gobernanzza puedes hacer introduciendo el nombre, CIF, actividad o localidad de la cooperativa:</SDivLB02>      
      <SDivSearch>
              <SInputText
                type="text"
                placeholder="Buscar cooperativa"                
              />
       </SDivSearch>
      <SDivImg> <img
            src={require("components/assets/img/puzzle.png").default}
            alt="Gobernanzza"
          />
      </SDivImg>
      <SDivLB03>Aquí podrás ver una lista con acceso a su formación general para que puedas estar seguro de que es la cooperativa que buscas.</SDivLB03>
      </BaseLayout>
    </>
  );
}
export default SearchCoop;