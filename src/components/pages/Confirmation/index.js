import React from "react";
import BaseLayout from "components/layout/BaseLayout"
import {SDivLogo,SDivCheck,SDivLB01,SDivBtn} from "./customstyled"
import { SBtnPrimary } from "components/styled-components/components";
function Confirmation(props) {

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
     
      <SDivLB01>su voto ha sido registrado con éxito,</SDivLB01>
      <SDivBtn>
              <SBtnPrimary>
                           <span>Aceptar</span> </SBtnPrimary>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default Confirmation;
