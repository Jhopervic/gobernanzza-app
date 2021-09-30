import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivMenu,SDivLogo,SDivLB01,SDivLB02,SDivLB03,SDivLB04,FooterBox} from "./customstyled"
function HomeWithoutCoop(props) {
  

  return (
    <>
      <BaseLayout>
        <SDivMenu><span>Inicio</span>
        <nav>
          <ul>
            <li><a href="/inicio-usuario-sin-coop"><i className="icon-mail"></i></a></li>
            <li><a href="/inicio-usuario-sin-coop"><i className="icon-search"></i></a></li>
            <li><a href="/inicio-usuario-sin-coop"><i className="icon-menu"></i></a></li>
          </ul>
        </nav>
    </SDivMenu>
    <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01>Bienvenido<b>Usuario</b></SDivLB01>
      <SDivLB02>A continuación puedes ver un resumen detallado de la/s cooperativa/s de las que formas parte</SDivLB02>
      <SDivLB03>Tus Cooperativas</SDivLB03>
      <SDivLB04>Aún no participas en ninguna cooperativa.</SDivLB04>
      <FooterBox><img
            src={require("components/assets/img/img_crear.svg").default}
            alt="Gobernanzza"
          />
          <i className="icon-add"></i></FooterBox>
      </BaseLayout>
    </>
  );
}
export default HomeWithoutCoop;