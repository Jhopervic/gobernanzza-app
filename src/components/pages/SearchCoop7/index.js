import React from "react";
import BaseLayout from "components/layout/BaseLayout"
import {SDivLogo,SDivCheck,SDivLB01,SDivLB02,SDivBtn} from "./customstyled"
import { SBtnPrimary } from "components/styled-components/components";
function SearchCoop7(props) {

  return (
    <>
      <BaseLayout>
      <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="VacunApp"
          />
      </SDivLogo>
      <SDivCheck>
        <img
            src={require("components/assets/img/check.svg").default}
            alt="VacunApp"
          />
      </SDivCheck>
     
      <SDivLB01>Acta de Asamblea firmada con éxito</SDivLB01>
      <SDivLB02>Texto descriptivo</SDivLB02>
      <SDivBtn>
              <SBtnPrimary>
                           <span>Aceptar</span> </SBtnPrimary>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default SearchCoop7;
