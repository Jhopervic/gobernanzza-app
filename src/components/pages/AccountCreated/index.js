import React from "react";
import BaseLayout from "components/layout/BaseLayout"
import {SDivLogo,SDivLoading,SDivLB01,SDivLB02} from "./customstyled"
function AccountCreated(props) {
  

  return (
    <>
      <BaseLayout>
      <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="VacunApp"
          />
      </SDivLogo>
      <SDivLoading>
        <img
            src={require("components/assets/img/loading.svg").default}
            alt="VacunApp"
          />
      </SDivLoading>
     
      <SDivLB01>Hemos enviado un correo al email anteriormente indicado</SDivLB01>
      <SDivLB02>Para continuar debes verificar tu cuenta de email, para ello hemos enviado un email a la dirección anterioromente indicada</SDivLB02>
      </BaseLayout>
    </>
  );
}
export default AccountCreated;
